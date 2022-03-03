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

const project = [{
  name: 'Project name goes here',
  description: 'Lorem ipsum dolor sit amet,'
  + 'consectetur adipiscing elit, sed do eiusmod '
  + 'tempor incididunt ut labore et dolore magna '
  + 'aliqua. Ut enim ad minim veniam, quis nostrud '
  + 'exercitation ullamco laboris nisi',
  description2: 'Ut aliquip '
  + 'ex ea commodo consequat.  Lorem ipsum dolor '
  + 'sit amet, consectetur adipiscing elit, sed do '
  + 'eiusmod tempor incididunt ut labore et dolore '
  + 'magna aliqua. Ut enim ad minim veniam, quis '
  + 'nostrud exercitation ullamco laboris nisi.',
  closePopup: './images/close2.png',
  leftArrow: './images/left-arrow.png',
  rightArrow: './images/right-arrow.png',
  item1: 'HTML/CSS',
  item2: 'Ruby on Rails',
  item3: 'JavaScript',
  live: 'See live',
  source: 'See source',
  liveImage: './images/live.png',
  sourceImage: './images/source.png',
  imageURL: './images/computer-image2.png',
  next: './images/next.png',
  previous: './images/previous.png',
  liveVersionLink: 'https://emyrue.github.io/Portfolio',
  sourceLink: 'https://github.com/emyrue/Portfolio/',
}];

const section = document.createElement('section');
const seeProject = document.querySelectorAll('.see-project');
section.className = 'default';
document.body.appendChild(section);

const markup = `
  <img class="close-icon" src=${project[0].closePopup}>
  <h2 class="popup-heading">${project[0].name}</h2>
  <ul class="popup-list">
    <li class="popup-list-item">${project[0].item1}</li>
    <li class="popup-list-item popup-list-item2">${project[0].item2}</li>
    <li class="popup-list-item">${project[0].item3}</li>
  </ul>
  <div class="slideshow">
    <img class="arrow" src=${project[0].leftArrow}>
    <img class="arrow" src=${project[0].rightArrow}>
  </div>
  <div class="slides">
    <img class="slide" src=${project[0].imageURL}>
    <img class="slide" src=${project[0].imageURL}>
    <img class="slide" src=${project[0].imageURL}>
    <img class="slide" src=${project[0].imageURL}>
  </div>
  <div class="center">
    <p class="about-project">${project[0].description}</p>
    <p class="about-project">${project[0].description2}</p>
  </div>
  <div class="popup-buttons">
    <button class="live-source-buttons">
      <a href=${project[0].liveVersionLink}>
        <span class="live-source-span">${project[0].live}</span>
        <img class="live-image" src=${project[0].liveImage}>
      </a>
    </button>
    <button class="live-source-buttons">
      <a href=${project[0].sourceLink}>
        <span class="live-source-span">${project[0].source}</span>
        <img class="live-image" src=${project[0].sourceImage}>
      </a>
    </button>
  </div>
  <div class="next-previous">
    <img class="previous" src=${project[0].previous}>
    <img class="next" src=${project[0].next}>
  </div>
`;

section.innerHTML = markup;
const xIcon = document.querySelector('.close-icon');
function display2() {
  section.classList.toggle('popup');
}

for (let m = 0; m < seeProject.length; m += 1) {
  seeProject[m].addEventListener('click', display2);
}

xIcon.addEventListener('click', display2);

const form = document.getElementById('form');
const small = document.getElementsByTagName('small')[0];
const email = document.getElementById('email');
const name = document.getElementById('name');
const message = document.getElementById('message');

function validateEmail(input) {
  const address = input.toString();
  let isLower = false;

  if (address === address.toLowerCase()) {
    isLower = true;
  }

  return isLower;
}

form.addEventListener('submit', (event) => {
  if (validateEmail(email.value)) {
    small.textContent = '';
  } else {
    small.textContent = 'Please enter your email address without capital letters.';
    event.preventDefault();
  }
});