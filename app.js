const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLogo = document.querySelector('.nav-logo');
const home = document.querySelector('.home-container-item');

// eslint-disable-next-line no-use-before-define
hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  navLogo.classList.toggle('active');
  home.classList.toggle('active');
}

const navLink = document.querySelectorAll('.nav-links');

// eslint-disable-next-line no-use-before-define
navLink.forEach((n) => n.addEventListener('click', closeMenu));

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  navLogo.classList.remove('active');
  home.classList.remove('active');
}
