/**
 * 2026 Navigation & Scroll-Spy Engine
 */

function initNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navItems = document.querySelector('.nav-items');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top');

  // Mobile Menu Toggle
  if (navToggle && navItems) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navItems.classList.toggle('open');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navItems.contains(e.target)) {
        navToggle.classList.remove('active');
        navItems.classList.remove('open');
      }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navItems.classList.remove('open');
      });
    });
  }

  // Scroll Spy for Nav Links
  const sections = document.querySelectorAll('section[id]');
  if (sections.length && navLinks.length) {
    const scrollSpyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px'
    });

    sections.forEach(sec => scrollSpyObserver.observe(sec));
  }

  // Back to Top Button
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}
