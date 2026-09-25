function initNavigation() {
  const navToggle = document.getElementById('nav-toggle-btn');
  const navItems = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top');
  const mobileMenu = window.matchMedia('(max-width: 900px)');

  function closeMenu({ restoreFocus = false } = {}) {
    if (!navToggle || !navItems) return;
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation menu');
    navItems.classList.remove('open');
    navItems.inert = mobileMenu.matches;
    navItems.setAttribute('aria-hidden', String(mobileMenu.matches));
    if (restoreFocus) navToggle.focus();
  }

  if (navToggle && navItems) {
    const setMenuForViewport = () => {
      if (mobileMenu.matches) closeMenu();
      else {
        navItems.inert = false;
        navItems.setAttribute('aria-hidden', 'false');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open navigation menu');
        navItems.classList.remove('open');
      }
    };

    navToggle.addEventListener('click', () => {
      const isOpen = !navItems.classList.contains('open');
      if (!isOpen) {
        closeMenu();
        return;
      }
      navToggle.classList.add('active');
      navToggle.setAttribute('aria-expanded', 'true');
      navToggle.setAttribute('aria-label', 'Close navigation menu');
      navItems.classList.add('open');
      navItems.inert = false;
      navItems.setAttribute('aria-hidden', 'false');
      navItems.querySelector('.nav-link')?.focus();
    });

    document.addEventListener('click', event => {
      if (!navToggle.contains(event.target) && !navItems.contains(event.target)) closeMenu();
    });

    navLinks.forEach(link => link.addEventListener('click', () => {
      closeMenu({ restoreFocus: mobileMenu.matches });
    }));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && navItems.classList.contains('open')) {
        closeMenu({ restoreFocus: true });
      }
    });

    if (mobileMenu.addEventListener) mobileMenu.addEventListener('change', setMenuForViewport);
    else mobileMenu.addListener?.(setMenuForViewport);
    setMenuForViewport();
  }

  const sections = document.querySelectorAll('main section[id]');
  if ('IntersectionObserver' in window && sections.length && navLinks.length) {
    const scrollSpyObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const currentId = entry.target.id;
        navLinks.forEach(link => {
          const isCurrent = link.getAttribute('href') === `#${currentId}`;
          link.classList.toggle('active', isCurrent);
          if (isCurrent) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, {
      rootMargin: '-20% 0px -70% 0px'
    });

    sections.forEach(section => scrollSpyObserver.observe(section));
  }

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
