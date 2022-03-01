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

let project = {
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet,' + 
    'consectetur adipiscing elit, sed do eiusmod ' +
    'tempor incididunt ut labore et dolore magna ' + 
    'aliqua. Ut enim ad minim veniam, quis nostrud ' + 
    'exercitation ullamco laboris nisi Ut aliquip ' + 
    'ex ea commodo consequat.  Lorem ipsum dolor ' + 
    'sit amet, consectetur adipiscing elit, sed do ' + 
    'eiusmod tempor incididunt ut labore et dolore ' + 
    'magna aliqua. Ut enim ad minim veniam, quis ' + 
    'nostrud exercitation ullamco laboris nisi.',
    item1: 'HTML/CSS',
    item2: 'Ruby on Rails',
    item3: 'JavaScript',
    imageURL: './image/computer-image1.png',
    liveVersionLink: 'https://emyrue.github.io/Portfolio',
    sourceLink: 'https://github.com/emyrue/Portfolio/'
}

let section = document.createElement('section');
let heading = document.createElement('h2');
let list = document.createElement('ul');
let listItem1 = document.createElement('li');
let listItem2 = document.createElement('li');
let listItem3 = document.createElement('li');

section.classList.add('default', 'popup');
heading.className = 'popup-heading';
list.className = 'popup-list';
listItem1.classList.add('popup-list-item', 'popup-list-item1');
listItem2.classList.add('popup-list-item', 'popup-list-item2');
listItem3.classList.add('popup-list-item', 'popup-list-item3');

heading.textContent = project.name;
listItem1.textContent = project.item1;
listItem2.textContent = project.item2;
listItem3.textContent = project.item3;

document.body.appendChild(section);
section.appendChild(heading);
section.appendChild(list);
list.appendChild(listItem1);
list.appendChild(listItem2);
list.appendChild(listItem3);