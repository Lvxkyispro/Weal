# Song

Put the track here as:

    assets/audio/admirin-you.mp3

That exact name is what the page loads (set in `src/data.js` as `SONG.src`).
Until the file exists, the music dock shows "Song file not added yet" and
everything else works normally. Playback starts when she taps **Begin** and
loops. The play button in the dock pauses and resumes it.

To use a different file name or format (for example `.m4a`), change
`SONG.src` in `src/data.js` and run `npm run build`.
