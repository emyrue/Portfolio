const mobileItem = document.querySelectorAll('.mobile-menu-item');
const closeButton = document.querySelector('.close');
const hamburger = document.querySelector('.menu');
const menuOpen = document.querySelector('.menu-open');

function display() {
  menuOpen.classList.toggle('show');
}

closeButton.addEventListener('click', display);
hamburger.addEventListener('click', display);
for (let i = 0; i < mobileItem.length; i += 1) {
  mobileItem[i].addEventListener('click', display);
}
