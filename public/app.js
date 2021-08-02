const menuBtn = document.querySelector('.nav__menu');
const aboutBtn = document.querySelector('.nav__about');
const contactBtn = document.querySelector('.nav__contact');
const reviewBtn = document.querySelector('.nav__review');
const btnArray = [menuBtn, aboutBtn, contactBtn, reviewBtn];

const menu = document.querySelector('.body__menu');
const about = document.querySelector('.body__about');
const contact = document.querySelector('.body__contact');
const reviews = document.querySelector('.body__reviews');
const bodyArray = [menu, about, contact, reviews];

const hamburger = document.querySelector('.nav__hamburger');

for (let i = 0; i < btnArray.length; i++) {
  btnArray[i].addEventListener('click', () => {
    for (let j = 0; j < bodyArray.length; j++) {
      if (i == j) {
        bodyArray[j].style.display = 'block';
      } else {
        bodyArray[j].style.display = 'none';
      }
    }
  })
}


