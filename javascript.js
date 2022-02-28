

let mobileItem = document.querySelectorAll('.mobile-menu-item');
let close = document.querySelector('.close');
let hamburger = document.querySelector('.menu');
let menuOpen = document.querySelector('.menu-open');

function display() {
    menuOpen.classList.toggle('show');
}

mobileItem.addEventListener('click', display);
close.addEventListener('click', display);
hamburger.addEventListener('click', display);

