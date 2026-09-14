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
    const closeMenu = () => {
      navToggle.classList.remove('active');
      navItems.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    };

    navToggle.addEventListener('click', () => {
      const isOpen = !navItems.classList.contains('open');
      navToggle.classList.toggle('active', isOpen);
      navItems.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navItems.contains(e.target)) {
        closeMenu();
      }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Escape is a predictable exit on touch keyboards and desktop.
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
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
