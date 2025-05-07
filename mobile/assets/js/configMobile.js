const lenis = new Lenis();
function raf(e) {
  lenis.raf(e), requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
let lastScrollY = window.scrollY;
let isInitialLoad = true;

const elements = document.querySelectorAll('.scrollTop');

const observer = new IntersectionObserver((entries) => {
  const currentScrollY = window.scrollY;
  const isScrollingDown = currentScrollY > lastScrollY;

  entries.forEach(entry => {
    const el = entry.target;

    const alreadyAnimated = el.dataset.animated === "true";

    if (entry.isIntersecting && !alreadyAnimated) {
      if (isInitialLoad || isScrollingDown) {
        el.classList.add('visible', 'animate');
        el.dataset.animated = "true"; 
      }
    }
  });

  lastScrollY = currentScrollY;
  isInitialLoad = false;
}, {
  threshold: 0.01
});

elements.forEach(el => observer.observe(el));
