function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (!elements.length || prefersReducedMotion || !('IntersectionObserver' in window)) return;

  document.documentElement.dataset.scrollReveal = 'ready';
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, {
    rootMargin: '0px 0px -32px 0px',
    threshold: 0.08
  });

  elements.forEach(element => observer.observe(element));
}

function initScrollEffects() {
  const progressBar = document.getElementById('scroll-progress');
  const navbarWrapper = document.querySelector('.navbar-wrapper');
  let framePending = false;
  let isScrolled = null;

  function update() {
    framePending = false;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;

    if (progressBar) progressBar.style.transform = `scaleX(${progress})`;
    if (navbarWrapper) {
      const nextScrolled = scrollTop > 40;
      if (nextScrolled !== isScrolled) {
        navbarWrapper.classList.toggle('scrolled', nextScrolled);
        isScrolled = nextScrolled;
      }
    }
  }

  function scheduleUpdate() {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(update);
  }

  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate, { passive: true });
  scheduleUpdate();
}

function initAnimations() {
  initScrollAnimations();
  initScrollEffects();
}
