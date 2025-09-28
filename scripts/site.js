// shared mobile toggle for homepage (index.html)
const hamburger = document.getElementById('mobile-toggle');
const menu = document.getElementById('mobile-menu');
if (hamburger && menu) hamburger.addEventListener('click', () => menu.classList.toggle('hidden'));

// other pages use their own toggles with ids: mobile-toggle-2..4
