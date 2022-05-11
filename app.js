const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// eslint-disable-next-line no-use-before-define
hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

const navLink = document.querySelectorAll('.nav-links');

// eslint-disable-next-line no-use-before-define
navLink.forEach((n) => n.addEventListener('click', closeMenu));

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}
