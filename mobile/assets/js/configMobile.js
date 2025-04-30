const lenis = new Lenis();
function raf(e) {
  lenis.raf(e), requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
