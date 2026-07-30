// Main application entry point
document.addEventListener('DOMContentLoaded', () => {
  // Initialize separate modules
  if (typeof initTheme === 'function') initTheme();
  if (typeof initNavigation === 'function') initNavigation();
  
  // Set current year in footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
