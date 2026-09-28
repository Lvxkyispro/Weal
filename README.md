# Admirin' You

A mobile-first, cinematic photo story: 23 photographs, each with its own
(questionable) pickup line, set to "Admirin' You" by Karan Aujla.

## The experience

1. **Loader.** Photos and fonts preload behind a thin progress ring. Tapping
   **Begin** starts the song (browsers only allow audio after a tap).
2. **Hero.** Thousands of WebGL particles gather into a 3D heart that beats
   with a lub-dub rhythm (and, when served over http/https on non-iOS
   devices, to the bass of the song). The title rises letter by letter.
3. **Prelude.** A short note whose words light up one by one as you scroll.
4. **The reel.** Every photo lives on one pinned stage. Scrolling scrubs each
   scene: the frame is revealed by one of four masks (rise, curtain, iris,
   3D drop), the photo settles from a slow zoom, the caption rises word by
   word, then the frame tilts away in 3D as the next one arrives. Scrolling
   settles on the nearest fully revealed photo. The heart breaks apart into
   drifting dust behind the photos. Tap any photo to see it uncropped.
5. **Interlude.** Halfway through, a break with a kinetic "Admirin' you" band.
6. **Finale.** The dust gathers back into the heart: "Still admirin' you."
7. **Outro.** All 23 photos on a draggable 3D ring, and a "Watch it again"
   button.

Also:
- HUD with the photo counter and a page progress line
- Music dock with play/pause and an equaliser
- Film grain and vignette
- Respects `prefers-reduced-motion`
- Handles safe areas and phone toolbars
- Works offline: fonts and libraries are bundled, nothing loads from a CDN

## Run it

The built site is committed, so any static server works:

    npx serve .            # or: python3 -m http.server

You can also just open `index.html`. The only thing that changes when opened
from a file is that the equaliser falls back to a CSS animation.

To host it, push to GitHub Pages (Settings, Pages, deploy from the branch
root).

## Add the song

Copy the track to `assets/audio/admirin-you.mp3`. See
`assets/audio/README.md`.

## Edit

| What | Where |
| --- | --- |
| Captions, photo crop focus, song title/path | `src/data.js` |
| Scroll choreography, loader, ring, lightbox, audio | `src/main.js` |
| Particle heart (Three.js shaders) | `src/scene.js` |
| Styles and layout tokens | `assets/css/style.css` |

After editing anything in `src/`, rebuild the bundle:

    npm install
    npm run build          # writes assets/js/app.js

`scripts/prepare_photos.py` regenerates `assets/photos/` from the original
files. It sets the photo order, applies EXIF rotation, and outputs WebP full
images and thumbnails. One photo in the original set
(`IMG_20250211_184459_0995.jpg`) was a byte-for-byte duplicate of another and
is left out.

## Stack

- Three.js (custom point shaders)
- GSAP with ScrollTrigger
- Vanilla HTML/CSS
- Bundled with esbuild
- Fonts: Cormorant Garamond and Inter, self-hosted under the SIL OFL
