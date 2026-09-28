import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PHOTOS, SONG } from './data.js';
import { createScene } from './scene.js';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const TOTAL = PHOTOS.length;
const INTERLUDE_AFTER = 12;
const SVG_NS = 'http://www.w3.org/2000/svg';

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const pad = (n) => String(n).padStart(2, '0');

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function svgIcon(d) {
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS(SVG_NS, 'path');
  path.setAttribute('d', d);
  svg.appendChild(path);
  return svg;
}

// Wraps every word in a mask so it can rise into place. Returns the inner spans.
function splitWords(node, text = node.textContent) {
  node.textContent = '';
  const inners = [];
  text.split(/\s+/).filter(Boolean).forEach((word, i) => {
    if (i) node.appendChild(document.createTextNode(' '));
    const outer = el('span', 'w');
    const inner = el('span', 'wi', word);
    outer.appendChild(inner);
    node.appendChild(outer);
    inners.push(inner);
  });
  return inners;
}

function splitChars(node) {
  const text = node.textContent;
  node.setAttribute('aria-label', text);
  node.textContent = '';
  return Array.from(text).map((ch) => {
    const span = el('span', 'char', ch);
    span.setAttribute('aria-hidden', 'true');
    node.appendChild(span);
    return span;
  });
}

/* --------------------------------------------------------------------------
   WebGL background
   -------------------------------------------------------------------------- */

const scene = createScene($('#gl'), { reducedMotion: REDUCED });
const gl = scene ? scene.state : { morph: 0, drift: 0, beat: 0, opacity: 0, tiltX: 0, tiltY: 0 };
if (scene) {
  gl.morph = 1;
  scene.start();
}

// The heart's shape is driven by three independent sources; the strongest wins.
const morph = { intro: 1, hero: 0, finale: 0, outro: 0 };
function applyMorph() {
  gl.morph = Math.max(morph.intro, morph.hero * (1 - morph.finale), morph.outro);
}

// Particles step back while photos are on screen.
const dim = { reel: false, outro: false };
function applyOpacity() {
  if (dim.reel) gl.opacity = 0.5;
  else if (dim.outro) gl.opacity = 0.35;
  else gl.opacity = 1;
}

if (!REDUCED && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  window.addEventListener('pointermove', (e) => {
    gsap.to(gl, {
      tiltY: (e.clientX / window.innerWidth - 0.5) * 0.5,
      tiltX: (e.clientY / window.innerHeight - 0.5) * 0.3,
      duration: 1.4,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  });
}

/* --------------------------------------------------------------------------
   Build the reel
   -------------------------------------------------------------------------- */

const stage = $('#reelStage');
const layers = [];

const REVEALS = [
  // [from, to]
  ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)'],
  ['inset(0% 50% 0% 50%)', 'inset(0% 0% 0% 0%)'],
  ['circle(0% at 50% 50%)', 'circle(75% at 50% 50%)'],
  ['inset(0% 0% 100% 0%)', 'inset(0% 0% 0% 0%)'],
];

function buildShot(photo, index) {
  const article = el('article', 'shot');
  article.setAttribute('aria-label', `Photo ${photo.n} of ${TOTAL}`);

  const body = el('div', 'shot__body');
  const big = el('span', 'shot__big', photo.n);
  big.setAttribute('aria-hidden', 'true');

  const meta = el('div', 'shot__meta label');
  meta.append(el('span', '', `No. ${photo.n}`), el('span', 'shot__rule'), el('span', '', 'Tap to open'));

  const frame = el('button', 'shot__frame');
  frame.type = 'button';
  frame.setAttribute('aria-label', `Open photo ${photo.n} in full`);
  frame.dataset.index = String(index);

  const glow = el('span', 'shot__glow');
  glow.setAttribute('aria-hidden', 'true');
  const clip = el('span', 'shot__clip');
  const img = el('img');
  img.src = photo.src;
  img.alt = `Photo ${photo.n} of ${TOTAL}`;
  img.decoding = 'async';
  img.draggable = false;
  img.style.objectPosition = photo.focus;
  clip.appendChild(img);

  const expand = el('span', 'shot__expand');
  expand.setAttribute('aria-hidden', 'true');
  expand.appendChild(svgIcon('M14 5h5v5M10 19H5v-5M19 5l-6 6M5 19l6-6'));
  clip.appendChild(expand);

  frame.append(glow, clip);

  const line = el('p', 'shot__line');
  const words = splitWords(line, photo.line);

  body.append(big, meta, frame, line);
  article.appendChild(body);
  stage.appendChild(article);

  return { type: 'photo', index, el: article, big, meta, frame, clip, img, expand, line, words };
}

function buildInterlude() {
  const article = el('article', 'shot shot--interlude');
  article.setAttribute('aria-label', 'Interlude');

  const phrase = 'Admirin’ you · ';
  const makeRow = (extra) => {
    const row = el('div', `marquee ${extra}`);
    row.setAttribute('aria-hidden', 'true');
    const track = el('span', 'marquee__track', phrase.repeat(6));
    row.appendChild(track);
    return { row, track };
  };
  const a = makeRow('');
  const b = makeRow('marquee--em');

  const copy = el('p', 'interlude__copy');
  const words = splitWords(copy, 'Halfway through, and I’m still not over you.');

  article.append(a.row, copy, b.row);
  stage.appendChild(article);

  return { type: 'interlude', el: article, tracks: [a.track, b.track], words };
}

PHOTOS.forEach((photo, i) => {
  layers.push(buildShot(photo, i));
  if (i + 1 === INTERLUDE_AFTER) layers.push(buildInterlude());
});

$('#reel').style.setProperty('--steps', String(layers.length));

/* --------------------------------------------------------------------------
   Reel timeline: one step per layer, scrubbed by scroll
   -------------------------------------------------------------------------- */

const hudNum = $('#hudNum');
let currentPhoto = 0;

function setCounter(i) {
  if (i === currentPhoto) return;
  const dir = i > currentPhoto ? 1 : -1;
  currentPhoto = i;
  gsap.killTweensOf(hudNum);
  gsap.fromTo(
    hudNum,
    { yPercent: 100 * dir },
    {
      yPercent: 0,
      duration: 0.5,
      ease: 'power3.out',
      onStart: () => { hudNum.textContent = pad(i + 1); },
    },
  );
}

function buildReel() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  const last = layers.length - 1;
  tl.addLabel('start', 0);

  layers.forEach((layer, i) => {
    const b = i;
    tl.fromTo(layer.el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.12, ease: 'none' }, b);

    if (layer.type === 'photo') {
      const [from, to] = REVEALS[layer.index % REVEALS.length];
      const tilt = layer.index % REVEALS.length === 3;

      if (REDUCED) {
        tl.fromTo(layer.words, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 }, b + 0.1);
      } else {
        tl.fromTo(layer.clip, { clipPath: from }, { clipPath: to, duration: 0.5, ease: 'power3.inOut' }, b)
          .fromTo(layer.img, { scale: 1.35, yPercent: 5 }, { scale: 1.06, yPercent: 0, duration: 0.8, ease: 'power2.out' }, b)
          .fromTo(
            layer.frame,
            tilt ? { rotateX: -26, y: 40 } : { y: 36 },
            tilt ? { rotateX: 0, y: 0, duration: 0.6 } : { y: 0, duration: 0.6 },
            b,
          )
          .fromTo(layer.big, { yPercent: 45, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.6 }, b + 0.05)
          .fromTo(layer.meta, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.3 }, b + 0.2)
          .fromTo(layer.expand, { autoAlpha: 0, scale: 0.6 }, { autoAlpha: 1, scale: 1, duration: 0.25 }, b + 0.4)
          .fromTo(
            layer.words,
            { yPercent: 115 },
            { yPercent: 0, duration: 0.34, stagger: { amount: 0.22 } },
            b + 0.2,
          );
      }
      tl.addLabel(`s${i}`, b + 0.62);

      if (i !== last) {
        if (!REDUCED) {
          tl.to(layer.img, { scale: 1, duration: 0.3, ease: 'none' }, b + 0.8)
            .to(layer.frame, { y: -44, rotateX: 14, scale: 0.9, duration: 0.3, ease: 'power2.in' }, b + 0.72)
            .to(layer.line, { y: -18, autoAlpha: 0, duration: 0.22, ease: 'power1.in' }, b + 0.72)
            .to(layer.big, { yPercent: -35, autoAlpha: 0, duration: 0.3, ease: 'power1.in' }, b + 0.72);
        }
        tl.to(layer.el, { autoAlpha: 0, duration: 0.14, ease: 'none' }, b + 0.88);
      }
    } else {
      if (!REDUCED) {
        tl.fromTo(layer.tracks[0], { xPercent: 0 }, { xPercent: -30, duration: 1.1, ease: 'none' }, b)
          .fromTo(layer.tracks[1], { xPercent: -30 }, { xPercent: 0, duration: 1.1, ease: 'none' }, b)
          .fromTo(layer.words, { yPercent: 115 }, { yPercent: 0, duration: 0.34, stagger: { amount: 0.2 } }, b + 0.15);
      }
      tl.addLabel(`s${i}`, b + 0.55);
      tl.to(layer.el, { autoAlpha: 0, duration: 0.14, ease: 'none' }, b + 0.88);
    }
  });

  // Pad so the timeline length equals the number of layers (one scroll step each).
  const end = layers.length;
  if (tl.duration() < end) tl.to({}, { duration: end - tl.duration() });
  tl.addLabel('end', end);

  // Map timeline time back to the photo counter.
  const photoAt = (time) => {
    let photo = 0;
    for (let i = 0; i < layers.length; i++) {
      if (i <= time + 0.3 && layers[i].type === 'photo') photo = layers[i].index;
    }
    return photo;
  };

  ScrollTrigger.create({
    trigger: '#reel',
    start: 'top top',
    end: 'bottom bottom',
    animation: tl,
    scrub: REDUCED ? true : 0.9,
    // Settle on the nearest fully revealed photo once scrolling stops.
    snap: {
      snapTo: 'labels',
      inertia: false,
      duration: { min: 0.25, max: 0.8 },
      delay: 0.12,
      ease: 'power1.inOut',
    },
    onUpdate: (self) => {
      gl.drift = self.progress * 14;
      // Use scroll progress, not the scrubbed timeline, so the counter never lags.
      setCounter(photoAt(self.progress * tl.duration()));
    },
    onToggle: (self) => {
      dim.reel = self.isActive;
      applyOpacity();
      gsap.to('.hud__count', { autoAlpha: self.isActive ? 1 : 0, duration: 0.5, overwrite: 'auto' });
    },
  });
}

/* --------------------------------------------------------------------------
   Hero, prelude and finale
   -------------------------------------------------------------------------- */

const heroChars = $$('[data-split]').map(splitChars);

// Builds the intro without touching anything until it actually plays, so it can
// be queued behind the loader or the replay curtain.
function heroIntro() {
  const tl = gsap.timeline();
  tl.fromTo(
    morph,
    { intro: 1 },
    { intro: 0, duration: 2.8, ease: 'power2.inOut', onUpdate: applyMorph, immediateRender: false },
    0,
  );

  if (REDUCED) {
    tl.fromTo('.hero__inner, .cue', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 }, 0.2);
    return tl;
  }

  heroChars.forEach((chars, line) => {
    tl.fromTo(
      chars,
      { yPercent: 118, rotate: 6 },
      { yPercent: 0, rotate: 0, duration: 1.6, ease: 'expo.out', stagger: 0.06 },
      0.5 + line * 0.25,
    );
  });
  tl.fromTo('.hero__over .mask > span', { yPercent: 110 }, { yPercent: 0, duration: 1.2, ease: 'expo.out' }, 0.4)
    .fromTo('.hero__sub .mask > span', { yPercent: 110 }, { yPercent: 0, duration: 1.2, ease: 'expo.out' }, 1.1)
    .fromTo('.cue', { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, 1.6);
  return tl;
}

function buildScrollScenes() {
  // Hero: particles leave the heart as the title lifts away.
  ScrollTrigger.create({
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    onUpdate: (self) => {
      morph.hero = self.progress;
      applyMorph();
    },
  });

  if (!REDUCED) {
    gsap.to('.hero__inner', {
      yPercent: -35,
      autoAlpha: 0,
      ease: 'none',
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom 30%', scrub: true },
    });
    gsap.to('.cue', {
      autoAlpha: 0,
      ease: 'none',
      scrollTrigger: { trigger: '#hero', start: 'top top', end: '20% top', scrub: true },
    });
  }

  // Prelude: words brighten one by one.
  const prelude = $('#preludeText');
  const text = prelude.textContent.trim();
  prelude.setAttribute('aria-label', text);
  prelude.textContent = '';
  const words = text.split(/\s+/).map((w, i) => {
    if (i) prelude.appendChild(document.createTextNode(' '));
    const span = el('span', 'word', w);
    span.setAttribute('aria-hidden', 'true');
    prelude.appendChild(span);
    return span;
  });
  gsap.to(words, {
    opacity: 1,
    ease: 'none',
    stagger: 0.1,
    scrollTrigger: { trigger: '#prelude', start: 'top 35%', end: 'bottom bottom', scrub: REDUCED ? true : 0.6 },
  });

  // Finale: the heart comes back together above the closing words.
  ScrollTrigger.create({
    trigger: '#finale',
    start: 'top bottom',
    end: 'top top',
    onUpdate: (self) => {
      morph.finale = self.progress;
      applyMorph();
    },
  });

  const finaleTl = gsap.timeline({ paused: true, defaults: { ease: 'expo.out' } });
  if (REDUCED) {
    finaleTl.fromTo('#finaleCopy', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 }, 0);
  } else {
    finaleTl.fromTo('.finale__copy .mask > span', { yPercent: 110 }, { yPercent: 0, duration: 1.4, stagger: 0.12 }, 0);
  }
  ScrollTrigger.create({
    trigger: '#finale',
    start: 'top 45%',
    onEnter: () => finaleTl.play(),
    onLeaveBack: () => finaleTl.reverse(),
  });

  // Outro: the heart lets go again and every photo gathers on a ring.
  ScrollTrigger.create({
    trigger: '#outro',
    start: 'top 85%',
    end: 'top 25%',
    onUpdate: (self) => {
      morph.outro = self.progress;
      applyMorph();
    },
  });

  const outroTl = gsap.timeline({ paused: true, defaults: { ease: 'expo.out' } });
  if (REDUCED) {
    outroTl.fromTo('#ring, #replay, .outro__sign, .outro__hint', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 }, 0);
  } else {
    outroTl
      .fromTo('#ring', { autoAlpha: 0, scale: 0.86 }, { autoAlpha: 1, scale: 1, duration: 1.8 }, 0)
      .fromTo('.outro__hint, #replay, .outro__sign', { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.1 }, 0.5);
  }
  ScrollTrigger.create({
    trigger: '#outro',
    start: 'top 70%',
    onEnter: () => outroTl.play(),
    onLeaveBack: () => outroTl.reverse(),
    onToggle: (self) => {
      dim.outro = self.isActive;
      applyOpacity();
    },
  });

  // Page progress line in the HUD.
  const bar = $('#hudBar');
  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => gsap.set(bar, { scaleX: self.progress }),
  });
}

/* --------------------------------------------------------------------------
   Finale ring
   -------------------------------------------------------------------------- */

const ring = $('#ring');
const ringSpin = $('#ringSpin');
const cards = PHOTOS.map((photo, i) => {
  const card = el('div', 'ring__card');
  card.dataset.index = String(i);
  const img = el('img');
  img.src = photo.thumb;
  img.alt = '';
  img.decoding = 'async';
  img.draggable = false;
  img.style.objectPosition = photo.focus;
  card.appendChild(img);
  ringSpin.appendChild(card);
  return card;
});

const ringState = { angle: 0, velocity: 0, radius: 0, dragging: false, visible: false };
const STEP = 360 / cards.length;

function layoutRing() {
  const cw = cards[0].offsetWidth || 120;
  ringState.radius = Math.round((cw / 2 / Math.tan(Math.PI / cards.length)) * 1.14);
  cards.forEach((card, i) => {
    card.style.transform = `rotateY(${i * STEP}deg) translateZ(${ringState.radius}px)`;
  });
  renderRing();
}

function renderRing() {
  ringSpin.style.transform = `translateZ(${-ringState.radius}px) rotateY(${ringState.angle}deg)`;
}

let ringLast = 0;
function ringLoop(now) {
  if (!ringState.visible) return;
  const dt = Math.min((now - ringLast) / 1000, 0.05);
  ringLast = now;
  if (!ringState.dragging) {
    ringState.velocity *= Math.pow(0.04, dt);
    ringState.angle += (REDUCED ? 0 : -7) * dt + ringState.velocity * dt;
  }
  renderRing();
  requestAnimationFrame(ringLoop);
}

new IntersectionObserver((entries) => {
  const visible = entries[0].isIntersecting;
  if (visible && !ringState.visible) {
    ringState.visible = true;
    ringLast = performance.now();
    requestAnimationFrame(ringLoop);
  } else if (!visible) {
    ringState.visible = false;
  }
}).observe(ring);

(function ringDrag() {
  let startX = 0;
  let lastX = 0;
  let lastT = 0;
  let moved = 0;
  let pointerId = null;
  let downCard = null;

  ring.addEventListener('pointerdown', (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    pointerId = e.pointerId;
    downCard = e.target.closest('.ring__card');
    try { ring.setPointerCapture(e.pointerId); } catch (err) { /* not critical */ }
    startX = lastX = e.clientX;
    lastT = performance.now();
    moved = 0;
    ringState.dragging = true;
    ringState.velocity = 0;
  });

  ring.addEventListener('pointermove', (e) => {
    if (!ringState.dragging || e.pointerId !== pointerId) return;
    const now = performance.now();
    const dx = e.clientX - lastX;
    moved = Math.max(moved, Math.abs(e.clientX - startX));
    ringState.angle += dx * 0.28;
    const dt = Math.max((now - lastT) / 1000, 0.001);
    ringState.velocity = (dx * 0.28) / dt;
    lastX = e.clientX;
    lastT = now;
  });

  const end = (e) => {
    if (!ringState.dragging || e.pointerId !== pointerId) return;
    ringState.dragging = false;
    pointerId = null;
    if (performance.now() - lastT > 80) ringState.velocity = 0;
    ringState.velocity = Math.max(-600, Math.min(600, ringState.velocity));

    const card = downCard;
    downCard = null;
    if (e.type !== 'pointerup' || moved >= 6) return;

    // Open the tapped card if it faces the viewer; a tap between cards opens
    // whichever photo is at the front.
    const facing = (i) => Math.abs(((((i * STEP + ringState.angle) % 360) + 540) % 360) - 180);
    let index = card ? Number(card.dataset.index) : -1;
    if (index < 0 || facing(index) >= 80) {
      index = 0;
      for (let i = 1; i < cards.length; i++) if (facing(i) < facing(index)) index = i;
    }
    openLightbox(index, cards[index]);
  };
  ring.addEventListener('pointerup', end);
  ring.addEventListener('pointercancel', end);
})();

/* --------------------------------------------------------------------------
   Lightbox
   -------------------------------------------------------------------------- */

const lightbox = $('#lightbox');
const lbImg = $('#lightboxImg');
const lbNum = $('#lightboxNum');
const lbLine = $('#lightboxLine');
let lbReturnFocus = null;
let lbOpen = false;

function openLightbox(index, origin) {
  const photo = PHOTOS[index];
  if (!photo || lbOpen) return;
  lbOpen = true;
  lbReturnFocus = origin instanceof HTMLElement ? origin : document.activeElement;

  lbImg.src = photo.src;
  lbImg.alt = `Photo ${photo.n} of ${TOTAL}`;
  lbNum.textContent = `No. ${photo.n} / ${TOTAL}`;
  lbLine.textContent = photo.line;

  lightbox.hidden = false;
  gsap.fromTo('.lightbox__backdrop', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5, ease: 'power2.out' });
  gsap.fromTo(
    '.lightbox__figure',
    { autoAlpha: 0, y: 24, scale: 0.96 },
    { autoAlpha: 1, y: 0, scale: 1, duration: 0.8, ease: 'expo.out' },
  );
  gsap.fromTo('.lightbox__close', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5, delay: 0.2 });
  $('.lightbox__close').focus({ preventScroll: true });
}

function closeLightbox() {
  if (!lbOpen) return;
  lbOpen = false;
  gsap.to('.lightbox__figure', { autoAlpha: 0, y: 12, scale: 0.98, duration: 0.35, ease: 'power2.in' });
  gsap.to('.lightbox__close', { autoAlpha: 0, duration: 0.25 });
  gsap.to('.lightbox__backdrop', {
    autoAlpha: 0,
    duration: 0.45,
    delay: 0.1,
    ease: 'power2.inOut',
    onComplete: () => {
      lightbox.hidden = true;
      lbImg.removeAttribute('src');
    },
  });
  if (lbReturnFocus && document.contains(lbReturnFocus)) lbReturnFocus.focus({ preventScroll: true });
}

stage.addEventListener('click', (e) => {
  const frame = e.target.closest('.shot__frame');
  if (frame) openLightbox(Number(frame.dataset.index), frame);
});

lightbox.addEventListener('click', (e) => {
  if (e.target.closest('[data-close]')) closeLightbox();
});

// Keep the page still underneath without touching overflow (which would
// shift layout and make ScrollTrigger recalculate).
['wheel', 'touchmove'].forEach((type) => {
  lightbox.addEventListener(type, (e) => e.preventDefault(), { passive: false });
});

const SCROLL_KEYS = new Set(['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ']);
document.addEventListener('keydown', (e) => {
  if (!lbOpen) return;
  if (e.key === 'Escape') closeLightbox();
  else if (e.key === 'Tab') {
    e.preventDefault();
    $('.lightbox__close').focus();
  } else if (SCROLL_KEYS.has(e.key)) e.preventDefault();
});

/* --------------------------------------------------------------------------
   Music
   -------------------------------------------------------------------------- */

const audio = $('#song');
const dock = $('#dock');
const playBtn = $('#playBtn');
const bars = $$('#bars i');
$('#songTitle').textContent = SONG.title;
$('#songArtist').textContent = SONG.artist;
audio.src = SONG.src;

const IOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
let analyser = null;
let freq = null;

function setPlaying(on) {
  dock.classList.toggle('is-playing', on);
  playBtn.setAttribute('aria-pressed', String(on));
  playBtn.setAttribute('aria-label', on ? 'Pause song' : 'Play song');
}

function markMissing() {
  dock.classList.add('is-missing');
  $('#songArtist').textContent = 'Song file not added yet';
  setPlaying(false);
}

// Audio analysis drives the equaliser and the heart's pulse. It is skipped on
// file:// (the browser would silence the track) and on iOS (Web Audio follows
// the silent switch, plain media playback does not).
function setupAnalyser() {
  if (analyser || IOS || !/^https?:$/.test(location.protocol)) return;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return;
  try {
    const ctx = new Ctx();
    const source = ctx.createMediaElementSource(audio);
    analyser = ctx.createAnalyser();
    analyser.fftSize = 64;
    analyser.smoothingTimeConstant = 0.8;
    source.connect(analyser);
    analyser.connect(ctx.destination);
    freq = new Uint8Array(analyser.frequencyBinCount);
    if (ctx.state === 'suspended') ctx.resume();
    dock.classList.add('has-analyser');
    gsap.ticker.add(readAnalyser);
  } catch (e) {
    analyser = null;
  }
}

function readAnalyser() {
  if (!analyser) return;
  if (audio.paused) {
    gl.beat = 0;
    bars.forEach((b) => { b.style.transform = 'scaleY(0.18)'; });
    return;
  }
  analyser.getByteFrequencyData(freq);
  const low = (freq[1] + freq[2] + freq[3]) / (3 * 255);
  gl.beat = Math.pow(low, 2.2);
  bars.forEach((b, i) => {
    const v = freq[2 + i * 5] / 255;
    b.style.transform = `scaleY(${(0.18 + v * 0.82).toFixed(3)})`;
  });
}

function play() {
  setupAnalyser();
  const attempt = audio.play();
  if (attempt && attempt.then) {
    attempt.then(
      () => {
        dock.classList.remove('is-missing');
        $('#songArtist').textContent = SONG.artist;
        setPlaying(true);
      },
      () => {
        if (audio.error || audio.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) markMissing();
        else setPlaying(false);
      },
    );
  } else {
    setPlaying(!audio.paused);
  }
}

audio.addEventListener('error', markMissing);
audio.addEventListener('pause', () => setPlaying(false));
audio.addEventListener('playing', () => setPlaying(true));

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    if (dock.classList.contains('is-missing')) {
      // Give a freshly added file another chance.
      dock.classList.remove('is-missing');
      audio.load();
    }
    play();
  } else {
    audio.pause();
  }
});

/* --------------------------------------------------------------------------
   Loader
   -------------------------------------------------------------------------- */

const loaderCount = $('#loaderCount');
const loaderRing = $('#loaderRing');
const beginBtn = $('#begin');

function preload() {
  const sources = PHOTOS.map((p) => p.src);
  const total = sources.length + 1;
  let done = 0;
  const shown = { value: 0 };

  const tick = () => {
    done += 1;
    gsap.to(shown, {
      value: done / total,
      duration: 0.6,
      ease: 'power2.out',
      overwrite: true,
      onUpdate: () => {
        loaderCount.textContent = String(Math.round(shown.value * 100)).padStart(3, '0');
        loaderRing.style.strokeDashoffset = String(1 - shown.value);
      },
    });
  };

  const images = sources.map((src) => new Promise((resolve) => {
    const img = new Image();
    img.onload = img.onerror = () => { tick(); resolve(); };
    img.src = src;
  }));
  const fonts = (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve())
    .catch(() => {})
    .then(tick);

  const minimum = new Promise((r) => setTimeout(r, 1400));
  const timeout = new Promise((r) => setTimeout(r, 15000));
  return Promise.race([Promise.all([...images, fonts, minimum]), timeout]);
}

let started = false;

function begin() {
  if (started) return;
  started = true;
  beginBtn.disabled = true;
  play();

  const loader = $('#loader');
  const tl = gsap.timeline();
  tl.to('.loader__center, .loader__row', { autoAlpha: 0, y: -16, duration: 0.6, ease: 'power2.in', stagger: 0.05 })
    .to(loader, { yPercent: -100, duration: 1.2, ease: 'expo.inOut' }, 0.35)
    .add(() => {
      loader.remove();
      document.body.classList.remove('is-loading');
      ScrollTrigger.refresh();
    })
    .add(heroIntro(), 0.9)
    .to(gl, { opacity: 1, duration: 2, ease: 'power2.out', onComplete: applyOpacity }, 0.6)
    .to('#hud', { autoAlpha: 1, duration: 1 }, 1.6)
    .to(dock, { y: 0, autoAlpha: 1, duration: 1.2, ease: 'expo.out' }, 1.8);
}

/* --------------------------------------------------------------------------
   Replay
   -------------------------------------------------------------------------- */

$('#replay').addEventListener('click', () => {
  const curtain = $('#curtain');
  gsap.timeline()
    .to(curtain, { autoAlpha: 1, duration: 0.7, ease: 'power2.inOut' })
    .add(() => {
      window.scrollTo(0, 0);
      ScrollTrigger.update();
    })
    .add(heroIntro(), '+=0.1')
    .to(curtain, { autoAlpha: 0, duration: 0.9, ease: 'power2.inOut' }, '<');
});

/* --------------------------------------------------------------------------
   Boot
   -------------------------------------------------------------------------- */

gsap.set('.hud__count', { autoAlpha: 0 });
gsap.set(dock, { xPercent: -50, yPercent: 0, y: 120, x: 0, autoAlpha: 0 });
gsap.set('#ring, #replay, .outro__sign, .outro__hint', { autoAlpha: 0 });
if (REDUCED) {
  gsap.set('.hero__inner, .cue, #finaleCopy', { autoAlpha: 0 });
} else {
  gsap.set('.hero__inner .mask > span, .finale__copy .mask > span', { yPercent: 110 });
  heroChars.forEach((chars) => gsap.set(chars, { yPercent: 118 }));
  gsap.set('.cue', { autoAlpha: 0 });
}

// Fit the heart into the free space between the HUD and the hero copy.
function layoutHeart() {
  if (!scene) return;
  scene.resize();
  const hero = $('#hero');
  const inner = $('.hero__inner');
  const top = $('#hud').offsetHeight + 12;
  const bottom = hero.offsetTop + inner.offsetTop - 20;
  const space = Math.max(bottom - top, 120);
  scene.setHeart(top + space / 2, space * 0.9);
}

buildReel();
buildScrollScenes();
layoutRing();
layoutHeart();
window.addEventListener('resize', () => {
  layoutRing();
  layoutHeart();
});
if (document.fonts && document.fonts.ready) document.fonts.ready.then(layoutHeart);

preload().then(() => {
  beginBtn.disabled = false;
  gsap.fromTo(beginBtn, { scale: 0.92 }, { scale: 1, duration: 1, ease: 'expo.out' });
});
beginBtn.addEventListener('click', begin);
