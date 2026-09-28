import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Color,
  PerspectiveCamera,
  Points,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
} from 'three';

// Classic heart outline, normalised to roughly [-1, 1].
function heartOutline(t) {
  const s = Math.sin(t);
  const x = 16 * s * s * s;
  const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
  return [x / 16, (y + 2.5) / 16];
}

// A "puffy" 3D heart: every point sits on a lens-shaped shell whose silhouette
// is the outline above, so the shape reads clearly from the front while still
// having real depth as it turns.
function heartPoint(scale, depth) {
  const [ox, oy] = heartOutline(Math.random() * Math.PI * 2);
  const rim = Math.random() < 0.22;
  const r = rim ? 1 : Math.pow(Math.random(), 0.35);
  const z = (Math.random() < 0.5 ? -1 : 1) * depth * Math.sqrt(Math.max(0, 1 - r * r));
  const jitter = rim ? 0.012 : 0.03;
  return [
    (ox * r + (Math.random() - 0.5) * jitter) * scale,
    (oy * r + (Math.random() - 0.5) * jitter) * scale,
    z * scale,
  ];
}

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uMorph;
  uniform float uBeat;
  uniform float uPixelRatio;
  uniform float uSize;
  uniform float uDrift;
  uniform float uHeartY;
  uniform float uHeartScale;
  uniform float uHeartGain;

  attribute vec3 aHeart;
  attribute vec3 aScatter;
  attribute vec4 aRand;

  varying float vAlpha;
  varying float vTint;

  void main() {
    // Lub-dub heartbeat: two quick pulses, then rest.
    float t = mod(uTime, 1.6);
    float pulse = exp(-pow((t - 0.12) * 14.0, 2.0)) + 0.6 * exp(-pow((t - 0.42) * 14.0, 2.0));
    float beat = 1.0 + 0.035 * pulse + 0.06 * uBeat;

    vec3 heart = aHeart * beat * uHeartScale;
    heart += 0.018 * vec3(
      sin(uTime * 1.3 + aRand.y * 40.0),
      cos(uTime * 1.1 + aRand.z * 40.0),
      sin(uTime * 0.9 + aRand.w * 40.0)
    );
    heart.y += uHeartY;

    // Dust field slowly rises and wraps so the gallery background never runs out.
    vec3 dust = aScatter;
    dust.y = mod(dust.y + uDrift * (0.4 + aRand.x) + 9.0, 18.0) - 9.0;
    dust.x += sin(uTime * 0.2 + aRand.y * 20.0) * 0.25;

    // Each particle leaves the heart at a slightly different moment.
    float m = clamp(uMorph * 1.6 - aRand.y * 0.6, 0.0, 1.0);
    m = m * m * (3.0 - 2.0 * m);
    vec3 pos = mix(heart, dust, m);

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;

    float size = uSize * (0.35 + aRand.x * 0.9) * mix(1.0, 1.6, m);
    gl_PointSize = size * uPixelRatio / -mv.z;

    float twinkle = 0.65 + 0.35 * sin(uTime * (1.0 + aRand.z * 2.0) + aRand.w * 30.0);
    // uHeartGain dims the heart when its particles are packed more densely.
    vAlpha = twinkle * mix(uHeartGain, 0.55, m);
    vTint = aRand.w;
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uOpacity;

  varying float vAlpha;
  varying float vTint;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    a = pow(a, 1.8);
    vec3 col = mix(uColorA, uColorB, vTint);
    gl_FragColor = vec4(col, a * vAlpha * uOpacity);
  }
`;

export function createScene(canvas, { reducedMotion = false } = {}) {
  let renderer;
  try {
    renderer = new WebGLRenderer({
      canvas,
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
    });
  } catch (e) {
    return null;
  }

  const small = Math.min(window.innerWidth, window.innerHeight) < 600;
  const count = small ? 7000 : 12000;

  const heart = new Float32Array(count * 3);
  const scatter = new Float32Array(count * 3);
  const rand = new Float32Array(count * 4);
  const spreadX = small ? 3.4 : 5.5;

  for (let i = 0; i < count; i++) {
    const [hx, hy, hz] = heartPoint(1.2, 0.42);
    heart[i * 3] = hx;
    heart[i * 3 + 1] = hy;
    heart[i * 3 + 2] = hz;

    scatter[i * 3] = (Math.random() * 2 - 1) * spreadX;
    scatter[i * 3 + 1] = (Math.random() * 2 - 1) * 9;
    scatter[i * 3 + 2] = -Math.random() * 9 + 1.5;

    rand[i * 4] = Math.random();
    rand[i * 4 + 1] = Math.random();
    rand[i * 4 + 2] = Math.random();
    rand[i * 4 + 3] = Math.random();
  }

  const geometry = new BufferGeometry();
  // `position` is required by three for bounds; the shader uses aHeart/aScatter.
  geometry.setAttribute('position', new BufferAttribute(heart, 3));
  geometry.setAttribute('aHeart', new BufferAttribute(heart, 3));
  geometry.setAttribute('aScatter', new BufferAttribute(scatter, 3));
  geometry.setAttribute('aRand', new BufferAttribute(rand, 4));

  const uniforms = {
    uTime: { value: 0 },
    uMorph: { value: 0 },
    uBeat: { value: 0 },
    uDrift: { value: 0 },
    uHeartY: { value: 0 },
    uHeartScale: { value: 1 },
    uHeartGain: { value: 1 },
    uOpacity: { value: 0 },
    uPixelRatio: { value: 1 },
    uSize: { value: small ? 62 : 84 },
    uColorA: { value: new Color('#f2b8b2') },
    uColorB: { value: new Color('#ffe8d2') },
  };

  const material = new ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
  });

  const points = new Points(geometry, material);
  points.frustumCulled = false;

  const scene = new Scene();
  scene.add(points);

  const camera = new PerspectiveCamera(35, 1, 0.1, 50);
  camera.position.set(0, 0, 8);

  const state = {
    morph: 0,
    drift: 0,
    beat: 0,
    opacity: 0,
    tiltX: 0,
    tiltY: 0,
  };

  let width = 0;
  let height = 0;
  let heartBox = null;

  // Heart geometry spans about 2.2 units tall and 2.4 wide at scale 1.
  function placeHeart() {
    if (!heartBox || !height) return;
    const visible = 2 * camera.position.z * Math.tan((camera.fov * Math.PI) / 360);
    const px = visible / height;
    uniforms.uHeartY.value = (height / 2 - heartBox.center) * px;
    const scale = Math.min((heartBox.size * px) / 2.2, (width * 0.78 * px) / 2.4);
    uniforms.uHeartScale.value = scale;
    // Brightness tuned on a phone (scale ~0.9, 7000 points); keep other screens equal.
    uniforms.uHeartGain.value = Math.min(1, Math.max(0.2, (scale / 0.9) ** 2 * (7000 / count)));
  }

  // Centre the heart on a screen-space box given in CSS pixels.
  function setHeart(center, size) {
    heartBox = { center, size };
    placeHeart();
  }

  function resize() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h || (w === width && h === height)) return;
    width = w;
    height = h;
    const pr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(pr);
    renderer.setSize(w, h, false);
    uniforms.uPixelRatio.value = pr;
    camera.aspect = w / h;
    // Keep the heart comfortably inside narrow portrait screens.
    camera.position.z = camera.aspect < 0.7 ? 8 / Math.max(camera.aspect / 0.7, 0.62) : 8;
    camera.updateProjectionMatrix();
    placeHeart();
  }

  let running = false;
  let raf = 0;
  let last = performance.now();
  let time = 0;

  function frame(now) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    if (!reducedMotion) time += dt;

    uniforms.uTime.value = time;
    uniforms.uMorph.value += (state.morph - uniforms.uMorph.value) * Math.min(dt * 4, 1);
    uniforms.uDrift.value += (state.drift - uniforms.uDrift.value) * Math.min(dt * 3, 1);
    uniforms.uOpacity.value += (state.opacity - uniforms.uOpacity.value) * Math.min(dt * 2.5, 1);
    uniforms.uBeat.value += (state.beat - uniforms.uBeat.value) * Math.min(dt * 12, 1);

    // A slow sway rather than a full spin keeps the silhouette readable.
    points.rotation.y = Math.sin(time * 0.45) * 0.55 + state.tiltY;
    points.rotation.x = state.tiltX;

    renderer.render(scene, camera);
  }

  function start() {
    if (running) return;
    running = true;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  }

  function stop() {
    running = false;
    cancelAnimationFrame(raf);
  }

  resize();
  window.addEventListener('resize', resize);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else start();
  });

  return { state, start, stop, resize, setHeart };
}
