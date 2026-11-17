const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const siteHeader = document.getElementById('site-header');
const scrollProgress = document.getElementById('scroll-progress');

// Mobile navigation
if (menuButton && navigation) {
  const closeMenu = (returnFocus = false) => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');

    if (returnFocus) menuButton.focus();
  };

  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    navigation.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('click', event => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    if (open && !navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });

  document.addEventListener('keydown', event => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    if (event.key === 'Escape' && open) closeMenu(true);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 850) closeMenu();
  });
}

// Keep scroll work to one update per animation frame.
const handleScroll = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  if (siteHeader) siteHeader.classList.toggle('is-scrolled', scrollTop > 16);

  if (scrollProgress && docHeight > 0) {
    const progress = Math.min(scrollTop / docHeight, 1);
    scrollProgress.style.transform = `scaleX(${progress})`;
  }
};

let scrollFrame = 0;
const scheduleScrollUpdate = () => {
  if (scrollFrame) return;

  scrollFrame = window.requestAnimationFrame(() => {
    scrollFrame = 0;
    handleScroll();
  });
};

window.addEventListener('scroll', scheduleScrollUpdate, { passive: true });
window.addEventListener('resize', scheduleScrollUpdate, { passive: true });
handleScroll();

// Reveal content only when JavaScript is available; reduced motion shows it immediately.
const revealElements = document.querySelectorAll('.reveal');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!reducedMotion.matches && 'IntersectionObserver' in window && revealElements.length > 0) {
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

  revealElements.forEach(element => revealObserver.observe(element));
} else {
  revealElements.forEach(element => element.classList.add('is-visible'));
}

// Highlight the visible section in the main navigation.
const navLinks = document.querySelectorAll('.site-nav a[data-nav]');
const observedSections = Array.from(document.querySelectorAll('main section[id]'))
  .filter(section => Array.from(navLinks).some(link => link.dataset.nav === section.id));

if ('IntersectionObserver' in window && observedSections.length > 0 && navLinks.length > 0) {
  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        navLinks.forEach(link => {
          const active = link.dataset.nav === entry.target.id;
          link.classList.toggle('is-active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    },
    { rootMargin: '-35% 0px -55% 0px' }
  );

  observedSections.forEach(section => sectionObserver.observe(section));
}

// Copy the public contact email, with a fallback for browsers without Clipboard API access.
const copyEmailButton = document.getElementById('copy-email-btn');
const copyEmailText = document.getElementById('copy-email-text');
let copyMessageTimeout;

const fallbackCopy = email => {
  const previousFocus = document.activeElement;
  const field = document.createElement('textarea');
  field.value = email;
  field.setAttribute('readonly', '');
  field.setAttribute('aria-hidden', 'true');
  field.style.position = 'fixed';
  field.style.top = '0';
  field.style.left = '-9999px';
  document.body.append(field);
  field.select();

  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch {
    copied = false;
  }

  field.remove();
  if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
  return copied;
};

if (copyEmailButton && copyEmailText) {
  copyEmailButton.addEventListener('click', async () => {
    const email = copyEmailButton.dataset.email;
    if (!email) return;

    let copied = false;
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(email);
        copied = true;
      } catch {
        copied = false;
      }
    }

    if (!copied) copied = fallbackCopy(email);

    copyEmailText.textContent = copied
      ? 'Copied to clipboard ✓'
      : 'Copy unavailable — use Send an Email';

    window.clearTimeout(copyMessageTimeout);
    copyMessageTimeout = window.setTimeout(() => {
      copyEmailText.textContent = 'Copy Email Address';
    }, 2600);
  });
}

// Keep the footer year current without requiring a build step.
const yearElement = document.getElementById('year');
if (yearElement) yearElement.textContent = new Date().getFullYear();

// Activating this class enables JS-only navigation and reveal enhancements.
document.documentElement.classList.add('js');
