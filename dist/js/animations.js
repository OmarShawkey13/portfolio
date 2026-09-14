/**
 * 2026 Advanced Animation Engine
 * Scroll Reveal, Number Count-Up, 3D Card Tilt, and Mouse Spotlight
 */

function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// Animated Stat Counters
function initCounterAnimations() {
  const statNumbers = document.querySelectorAll('.hero-stat-number[data-target]');
  if (!statNumbers.length) return;

  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        const duration = 1600; // ms
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.floor(easeOut * target);

          const valueSpan = el.querySelector('.counter-value');
          if (valueSpan) {
            valueSpan.textContent = currentVal;
          }

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else if (valueSpan) {
            valueSpan.textContent = target;
          }
        }

        requestAnimationFrame(updateCounter);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(num => counterObserver.observe(num));
}

// 3D Card Tilt & Mouse Glare
function init3DTilt() {
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) return; // Skip heavy tilt physics on touch devices

  const tiltCards = document.querySelectorAll('.tilt-effect, .project-card');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;

      // Set CSS variables for spotlight effect
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });

  // Hero Card Tilt
  const heroCard = document.querySelector('.hero-card-wrapper');
  if (heroCard) {
    window.addEventListener('mousemove', (e) => {
      const { innerWidth, innerHeight } = window;
      const xRatio = (e.clientX / innerWidth - 0.5) * 2;
      const yRatio = (e.clientY / innerHeight - 0.5) * 2;

      heroCard.style.transform = `perspective(1000px) rotateY(${xRatio * 10}deg) rotateX(${-yRatio * 10}deg)`;
    });
  }
}

// Scroll Progress & Navbar Shrink
function initScrollEffects() {
  const progressBar = document.querySelector('.scroll-progress-bar');
  const navbarWrapper = document.querySelector('.navbar-wrapper');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = `${scrollPercentage}%`;
    }

    if (navbarWrapper) {
      if (scrollTop > 40) {
        navbarWrapper.classList.add('scrolled');
      } else {
        navbarWrapper.classList.remove('scrolled');
      }
    }
  }, { passive: true });
}

function initAnimations() {
  initScrollAnimations();
  initCounterAnimations();
  init3DTilt();
  initScrollEffects();
}
