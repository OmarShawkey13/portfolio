/**
 * Main Application Orchestrator
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Core Modules
  if (typeof initTheme === 'function') initTheme();
  if (typeof initNavigation === 'function') initNavigation();
  if (typeof initAnimations === 'function') initAnimations();
  if (typeof initProjects === 'function') initProjects();
  if (typeof initContact === 'function') initContact();

  // Set current year in footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
