// Story content. Photos live in assets/photos as NN.webp (full) and NN-t.webp
// (thumbnail). `focus` is the CSS object-position used when the photo is
// cropped into the 4:5 story frame; the lightbox always shows the full image.

export const SONG = {
  title: 'Admirin’ You',
  artist: 'Karan Aujla',
  src: 'assets/audio/admirin-you.mp3',
};

export const PHOTOS = [
  {
    focus: '50% 32%',
    line: 'Karan Aujla wrote “Admirin’ You” without ever meeting you. Imagine what I could write.',
  },
  {
    focus: '50% 42%',
    line: 'That side-eye smile should come with a warning label. I read it way too late.',
  },
  {
    focus: '50% 50%',
    line: 'Are those freckles or a star map? Because I keep getting lost in them.',
  },
  {
    focus: '50% 42%',
    line: 'Two little bows in your hair, and somehow I’m the one who got tied up.',
  },
  {
    focus: '50% 42%',
    line: 'Same photo, darker filter. Still dangerously pretty, just with the lights turned down.',
  },
  {
    focus: '50% 52%',
    line: 'Even your T-shirt is wearing sunglasses. Smart. You’re a lot to look at directly.',
  },
  {
    focus: '54% 50%',
    line: 'That pout could end wars. Or start them. Either way, I’m on your side.',
  },
  {
    focus: '50% 50%',
    line: 'Blurry photo, Beyoncé on the sticker, and still the sharpest thing on my screen. Diva, confirmed.',
  },
  {
    focus: '50% 52%',
    line: 'Resting your face on your hand like it’s heavy. Must be all the cute you carry around.',
  },
  {
    focus: '50% 55%',
    line: 'Red outfit, red lips. Is this a photo or a traffic light? Because I stopped everything.',
  },
  {
    focus: '50% 38%',
    line: 'Your sticker says “get out!” but that face says “stay forever.” I’m listening to the face.',
  },
  {
    focus: '50% 62%',
    line: 'Covered in dollar signs and still priceless. Economists are confused. I am not.',
  },
  {
    focus: '50% 62%',
    line: 'You put on glasses to see better. Great, now you can see exactly how hard I’m staring.',
  },
  {
    focus: '50% 48%',
    line: 'That look says “I know exactly what I’m doing.” You do. And you’re doing it to me.',
  },
  {
    focus: '55% 50%',
    line: 'Wearing camouflage doesn’t work when you’re this impossible to miss.',
  },
  {
    focus: '50% 50%',
    line: 'Your earrings are swinging and so is my heartbeat. My cardiologist says it’s you.',
  },
  {
    focus: '50% 58%',
    line: 'The camera couldn’t focus. Honestly, same. Every time you smile.',
  },
  {
    focus: '50% 50%',
    line: 'Too close, too blurry, too cute. Two of those are the camera’s fault. One is entirely yours.',
  },
  {
    focus: '56% 50%',
    line: 'Butterflies on your face, butterflies in my stomach. I think we match.',
  },
  {
    focus: '50% 48%',
    line: 'You signed this one with a heart. Bold of you to assume I still had mine after seeing it.',
  },
  {
    focus: '50% 64%',
    line: 'If you keep fixing your hair like that, someone’s going to have to fix my heart rate.',
  },
  {
    focus: '50% 52%',
    line: 'Hand behind your ear like you’re listening. So here it is: you’re my favourite notification.',
  },
  {
    focus: '50% 52%',
    line: 'Even the ceiling fan showed up for this one. You have a lot of fans. I’m still the biggest.',
  },
].map((p, i) => {
  const n = String(i + 1).padStart(2, '0');
  return { ...p, n, src: `assets/photos/${n}.webp`, thumb: `assets/photos/${n}-t.webp` };
});
