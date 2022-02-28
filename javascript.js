let mobileItem = document.querySelectorAll('.mobile-menu-item');
let closeButton = document.querySelector('.close');
let hamburger = document.querySelector('.menu');
let menuOpen = document.querySelector('.menu-open');

function display() {
    menuOpen.classList.toggle('show');
}

closeButton.addEventListener('click', display);
hamburger.addEventListener('click', display);
for (let i = 0; i < mobileItem.length; i++) {
    mobileItem[i].addEventListener('click', display);
}
