/**
 * 2026 Theme Manager
 * Persistent Light / Dark Mode with System Preference & Multi-Toggle Sync
 */

const SUN_ICON_SVG = `
  <svg class="theme-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="m4.93 4.93 1.41 1.41"></path>
    <path d="m17.66 17.66 1.41 1.41"></path>
    <path d="M2 12h2"></path>
    <path d="M20 12h2"></path>
    <path d="m6.34 17.66-1.41 1.41"></path>
    <path d="m19.07 4.93-1.41 1.41"></path>
  </svg>
`;

const MOON_ICON_SVG = `
  <svg class="theme-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
  </svg>
`;

function initTheme() {
  const navToggleBtn = document.getElementById('theme-toggle-nav');
  const fabToggleBtn = document.getElementById('theme-toggle-fab');

  // Detect preferred theme
  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);

    const iconSvg = theme === 'dark' ? SUN_ICON_SVG : MOON_ICON_SVG;
    const titleText = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';

    if (navToggleBtn) {
      navToggleBtn.innerHTML = iconSvg;
      navToggleBtn.setAttribute('title', titleText);
      navToggleBtn.setAttribute('aria-label', titleText);
    }

    if (fabToggleBtn) {
      fabToggleBtn.innerHTML = iconSvg;
      fabToggleBtn.setAttribute('title', titleText);
      fabToggleBtn.setAttribute('aria-label', titleText);
    }
  }

  function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
  }

  // Initial apply
  applyTheme(currentTheme);

  // Attach event listeners
  if (navToggleBtn) navToggleBtn.addEventListener('click', toggleTheme);
  if (fabToggleBtn) fabToggleBtn.addEventListener('click', toggleTheme);

  // Listen to OS system preference changes if user hasn't set an explicit preference
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('portfolio-theme')) {
        currentTheme = e.matches ? 'dark' : 'light';
        applyTheme(currentTheme);
      }
    });
  }
}
