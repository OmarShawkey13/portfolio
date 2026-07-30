// Navigation and Hamburger Menu Logic
function initNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navItems = document.querySelector('.nav-items');

  if (!navToggle || !navItems) return;

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navItems.classList.toggle('open');
  });

  // Close menu when a link is clicked
  const navLinks = document.querySelectorAll('.nav-items a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navItems.classList.remove('open');
    });
  });
}
