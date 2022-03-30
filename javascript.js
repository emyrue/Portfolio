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
  image1URL: './images/headline.png',
  image2URL: './images/information.png',
  image3URL: './images/featured.png',
  image4URL: './images/about.png',
  next: './images/next.png',
  previous: './images/previous.png',
  liveVersionLink: 'https://emyrue.github.io/ConcertListing/',
  sourceLink: 'https://github.com/emyrue/ConcertListing/',
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
  <div class="slideshow slideshow1">
    <img class="arrow arrow-left" src=${project[0].leftArrow}>
    <img class="arrow arrow-right" src=${project[0].rightArrow}>
  </div>
  <div class="slides">
    <img class="slide slide1 border" src=${project[0].image1URL}>
    <img class="slide slide2" src=${project[0].image2URL}>
    <img class="slide slide3" src=${project[0].image3URL}>
    <img class="slide slide4" src=${project[0].image4URL}>
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

const slideDisplay = document.querySelector('.slideshow');
const arrowToLeft = document.querySelector('.arrow-left');
const arrowToRight = document.querySelector('.arrow-right');
const firstSlide = document.querySelector('.slide1');
const secondSlide = document.querySelector('.slide2');
const thirdSlide = document.querySelector('.slide3');
const fourthSlide = document.querySelector('.slide4');

arrowToLeft.addEventListener('click', () => {
  if (slideDisplay.classList.contains('slideshow4')) {
    slideDisplay.classList.remove('slideshow4');
    slideDisplay.classList.add('slideshow3');
    fourthSlide.classList.remove('border');
    thirdSlide.classList.add('border');
  } else if (slideDisplay.classList.contains('slideshow3')) {
    slideDisplay.classList.remove('slideshow3');
    slideDisplay.classList.add('slideshow2');
    thirdSlide.classList.remove('border');
    secondSlide.classList.add('border');
  } else if (slideDisplay.classList.contains('slideshow2')) {
    slideDisplay.classList.remove('slideshow2');
    slideDisplay.classList.add('slideshow1');
    secondSlide.classList.remove('border');
    firstSlide.classList.add('border');
  }
});

arrowToRight.addEventListener('click', () => {
  if (slideDisplay.classList.contains('slideshow1')) {
    slideDisplay.classList.remove('slideshow1');
    slideDisplay.classList.add('slideshow2');
    firstSlide.classList.remove('border');
    secondSlide.classList.add('border');
  } else if (slideDisplay.classList.contains('slideshow2')) {
    slideDisplay.classList.remove('slideshow2');
    slideDisplay.classList.add('slideshow3');
    secondSlide.classList.remove('border');
    thirdSlide.classList.add('border');
  } else if (slideDisplay.classList.contains('slideshow3')) {
    slideDisplay.classList.remove('slideshow3');
    slideDisplay.classList.add('slideshow4');
    thirdSlide.classList.remove('border');
    fourthSlide.classList.add('border');
  }
});

const form = document.getElementById('form');
const small = document.getElementsByTagName('small');
const email = document.getElementById('email');
const fullName = document.getElementById('name');
const message = document.getElementById('message');

let dataObject = {
  name: '',
  email: '',
  message: '',
};

if (window.localStorage.getItem('datakey') !== null) {
  dataObject = JSON.parse(window.localStorage.getItem('datakey'));
}

function validateEmail(input) {
  const address = input.toString();
  let isLower = true;

  if (address === address.toLowerCase() && address !== '') {
    isLower = true;
  }

  return isLower;
}

form.addEventListener('submit', (event) => {
  if (validateEmail(email.value)) {
    small.textContent = '';
    dataObject.name = fullName.value;
    dataObject.email = email.value;
    dataObject.message = message.value;
    window.localStorage.setItem('datakey', JSON.stringify(dataObject));
  } else {
    small.textContent = 'Please enter your email address without capital letters.';
    event.preventDefault();
  }
});

fullName.value = dataObject.email;
email.value = dataObject.email;
message.value = dataObject.message;