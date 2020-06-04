new Glider(document.querySelector('.glider'), {
  slidesToShow: 3,
  draggable: true,
});

// Hamburger   Menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.menu');
const overlay = document.querySelector('.bg-overlay');
const links = document.querySelectorAll('.menu li');

// Hamburger Menu
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  overlay.classList.toggle('open');
  hamburger.classList.toggle('toggle');
});