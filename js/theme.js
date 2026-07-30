// Theme handling logic
function initTheme() {
  const themeToggleBtn = document.querySelector('.theme-toggle');
  if (!themeToggleBtn) return;
  
  const themeIcon = themeToggleBtn.querySelector('span');
  
  // Set initial theme based on system preference or saved preference
  let currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme, themeIcon);

  themeToggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon(currentTheme, themeIcon);
  });
}

function updateThemeIcon(theme, iconElement) {
  if (theme === 'dark') {
    iconElement.textContent = '🌙';
  } else {
    iconElement.textContent = '☀️';
  }
}
