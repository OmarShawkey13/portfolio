const SUN_ICON_SVG = `
  <svg class="theme-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 2v2"></path><path d="M12 20v2"></path>
    <path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path>
    <path d="M2 12h2"></path><path d="M20 12h2"></path>
    <path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>
  </svg>`;

const MOON_ICON_SVG = `
  <svg class="theme-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
  </svg>`;

function initTheme() {
  const toggles = [
    document.getElementById('theme-toggle-nav'),
    document.getElementById('theme-toggle-fab')
  ].filter(Boolean);
  const preferenceKey = 'portfolio-theme';
  const colorScheme = window.matchMedia?.('(prefers-color-scheme: dark)');
  let savedTheme = null;

  try {
    savedTheme = localStorage.getItem(preferenceKey);
  } catch {
    // The site remains usable when browser storage is unavailable.
  }
  if (savedTheme !== 'light' && savedTheme !== 'dark') savedTheme = null;

  let currentTheme = savedTheme || (colorScheme?.matches ? 'dark' : 'light');

  function applyTheme(theme, persist = false) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#07111f' : '#f5f9fc'
    );

    const iconSvg = theme === 'dark' ? SUN_ICON_SVG : MOON_ICON_SVG;
    const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    toggles.forEach(button => {
      button.innerHTML = iconSvg;
      button.setAttribute('aria-label', label);
      button.setAttribute('title', label);
    });

    if (persist) {
      try {
        localStorage.setItem(preferenceKey, theme);
        savedTheme = theme;
      } catch {
        // Theme changes still apply for this page view.
      }
    }
  }

  applyTheme(currentTheme);
  toggles.forEach(button => {
    button.addEventListener('click', () => {
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark', true);
    });
  });

  const syncWithSystem = event => {
    if (!savedTheme) applyTheme(event.matches ? 'dark' : 'light');
  };
  if (colorScheme?.addEventListener) colorScheme.addEventListener('change', syncWithSystem);
  else colorScheme?.addListener?.(syncWithSystem);
}
