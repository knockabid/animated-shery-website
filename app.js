//locamotive - smooth scroll
// gsap to aimate

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

gsap.from(".nlink", {
  stagger: 0.5,
  y: 10,
  duration: 1,
  opacity: 0,
});

Shery.textAnimate(".text-target" /* Element to target.*/, {
  //Parameters are optional.
  style: 2,
  y: 10,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.3,
});

gsap.from(".animeateff", {
  y: 50,
  duration: 0.5,
  stagger: 0.2,
});

Shery.imageEffect("#hero-Middle img", {
  style: 4,
  config: {
    uColor: { value: false },
    uSpeed: { value: 2.04, range: [0.1, 1], rangep: [1, 10] },
    uAmplitude: { value: 1.5, range: [0, 5] },
    uFrequency: { value: 1.57, range: [0, 10] },
    geoVertex: { range: [1, 64], value: 64 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.6666751563554928 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.2, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

gsap.from("img", {
  z: -3,
  duration: 2,
  opacity: 0,
  stagger: 1,
});

Shery.imageEffect(".test", {
  style: 4,
  config: {
    uColor: { value: false },
    uSpeed: { value: 2.04, range: [0.1, 1], rangep: [1, 10] },
    uAmplitude: { value: 1.5, range: [0, 5] },
    uFrequency: { value: 1.57, range: [0, 10] },
    geoVertex: { range: [1, 64], value: 64 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.6666751563554928 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.2, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

Shery.imageEffect(".b-image", {
  style: 6,
  gooey: true,
});
