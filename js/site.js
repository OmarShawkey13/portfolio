const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const siteHeader = document.getElementById('site-header');
const scrollProgress = document.getElementById('scroll-progress');

// 1. Mobile Navigation Menu
if (menuButton && navigation) {
  const closeMenu = () => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  };

  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) closeMenu();
  });
}

// 2. Scroll Progress & Header Elevation
const handleScroll = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  if (siteHeader) {
    siteHeader.classList.toggle('is-scrolled', scrollTop > 16);
  }

  if (scrollProgress && docHeight > 0) {
    const progress = Math.min(scrollTop / docHeight, 1);
    scrollProgress.style.transform = `scaleX(${progress})`;
  }
};

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

// 3. Smooth Scroll Reveal via IntersectionObserver
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach(el => revealObserver.observe(el));
} else {
  revealElements.forEach(el => el.classList.add('is-visible'));
}

// 4. Active Section Highlight in Navigation
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.site-nav a[data-nav]');

if ('IntersectionObserver' in window && sections.length > 0 && navLinks.length > 0) {
  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('is-active', link.dataset.nav === activeId);
          });
        }
      });
    },
    { rootMargin: '-35% 0px -55% 0px' }
  );

  sections.forEach(section => sectionObserver.observe(section));
}

// 5. One-Click Copy Email Button
const copyEmailBtn = document.getElementById('copy-email-btn');
const copyEmailText = document.getElementById('copy-email-text');

if (copyEmailBtn && copyEmailText) {
  copyEmailBtn.addEventListener('click', async () => {
    const email = copyEmailBtn.dataset.email;
    if (!email) return;

    try {
      await navigator.clipboard.writeText(email);
      const originalText = copyEmailText.textContent;
      copyEmailText.textContent = 'Copied to Clipboard ✓';
      setTimeout(() => {
        copyEmailText.textContent = originalText;
      }, 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
}

// 6. Dynamic Copyright Year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}