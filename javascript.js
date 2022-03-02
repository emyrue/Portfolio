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

const project = {
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
  sourceLink: 'https://github.com/emyrue/Portfolio/'
};

const section = document.createElement('section');
const xIcon = document.createElement('img');
const heading = document.createElement('h2');
const list = document.createElement('ul');
const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');
const slideshow = document.createElement('div');
const arrowLeft = document.createElement('img');
const arrowRight = document.createElement('img');
const slides = document.createElement('div');
const image1 = document.createElement('img');
const image2 = document.createElement('img');
const image3 = document.createElement('img');
const image4 = document.createElement('img');
const flexContainer = document.createElement('div');
const paragraph1 = document.createElement('p');
const paragraph2 = document.createElement('p');
const buttons = document.createElement('div');
const button1 = document.createElement('button');
const link1 = document.createElement('a');
const span1 = document.createElement('span');
const liveImage = document.createElement('img');
const button2 = document.createElement('button');
const link2 = document.createElement('a');
const span2 = document.createElement('span');
const sourceImage = document.createElement('img');
const seeProject = document.querySelectorAll('.see-project');
const nextPrevious = document.createElement('div');
const previous = document.createElement('img');
const next = document.createElement('img');

section.className = 'default';
xIcon.className = 'close-icon';
heading.className = 'popup-heading';
list.className = 'popup-list';
listItem1.classList.add('popup-list-item', 'popup-list-item1');
listItem2.classList.add('popup-list-item', 'popup-list-item2');
listItem3.classList.add('popup-list-item', 'popup-list-item3');
slideshow.className = 'slideshow';
arrowLeft.className = 'arrow';
arrowRight.className = 'arrow';
slides.className = 'slides';
image1.className = 'slide';
image2.className = 'slide';
image3.className = 'slide';
image4.className = 'slide';
flexContainer.className = 'center';
paragraph1.className = 'about-project';
paragraph2.className = 'about-project';
buttons.className = 'popup-buttons';
button1.className = 'live-source-buttons';
span1.className = 'live-source-span';
liveImage.className = 'live-image';
button2.className = 'live-source-buttons';
span2.className = 'live-source-span';
sourceImage.className = 'live-image';
nextPrevious.className = 'next-previous';
previous.className = 'previous';
next.className = 'next';

xIcon.src = project.closePopup;
heading.textContent = project.name;
listItem1.textContent = project.item1;
listItem2.textContent = project.item2;
listItem3.textContent = project.item3;
arrowLeft.src = project.leftArrow;
arrowRight.src = project.rightArrow;
image1.src = project.imageURL;
image2.src = project.imageURL;
image3.src = project.imageURL;
image4.src = project.imageURL;
paragraph1.textContent = project.description;
paragraph2.textContent = project.description2;
link1.href = project.liveVersionLink;
span1.textContent = project.live;
liveImage.src = project.liveImage;
link2.href = project.sourceLink;
span2.textContent = project.source;
sourceImage.src = project.sourceImage;
previous.src = project.previous;
next.src = project.next;

document.body.appendChild(section);
section.appendChild(xIcon);
section.appendChild(heading);
section.appendChild(list);
section.appendChild(slideshow);
list.appendChild(listItem1);
list.appendChild(listItem2);
list.appendChild(listItem3);
slideshow.appendChild(arrowLeft);
slideshow.appendChild(arrowRight);
section.appendChild(slides);
slides.appendChild(image1);
slides.appendChild(image2);
slides.appendChild(image3);
slides.appendChild(image4);
section.appendChild(flexContainer);
flexContainer.appendChild(paragraph1);
flexContainer.appendChild(paragraph2);
section.appendChild(buttons);
buttons.appendChild(button1);
button1.appendChild(link1);
link1.appendChild(span1);
link1.appendChild(liveImage);
buttons.appendChild(button2);
button2.appendChild(link2);
link2.appendChild(span2);
link2.appendChild(sourceImage);
section.appendChild(nextPrevious);
nextPrevious.appendChild(previous);
nextPrevious.appendChild(next);

function display2() {
  section.classList.toggle('popup');
}

for (let m = 0; m < seeProject.length; m += 1) {
  seeProject[m].addEventListener('click', display2);
}

xIcon.addEventListener('click', display2);