const menuBtn = document.querySelectorAll('.nav__menu');
const aboutBtn = document.querySelectorAll('.nav__about');
const contactBtn = document.querySelectorAll('.nav__contact');
const reviewBtn = document.querySelectorAll('.nav__review');
const btnArray = [menuBtn, aboutBtn, contactBtn, reviewBtn];

const menu = document.querySelector('.body__menu');
const about = document.querySelector('.body__about');
const contact = document.querySelector('.body__contact');
const reviews = document.querySelector('.body__reviews');
const bodyArray = [menu, about, contact, reviews];

const hamburger = document.querySelector('.nav__hamburger');
const hamburgerMenu = document.querySelector('.body__hamburgerMenu');

for (let i = 0; i < btnArray.length; i++) {
  for (let j = 0; j < 2; j++) {
    btnArray[i][j].addEventListener('click', () => {
      for (let k = 0; k < bodyArray.length; k++) {
        if (i == k) {
          bodyArray[k].style.display = 'block';
        } else {
          bodyArray[k].style.display = 'none';
        }
      }
    })
  }
}

hamburger.addEventListener('click', () => {
  if (hamburgerMenu.style.display == 'flex') {
    hamburgerMenu.style.display = 'none';
  } else {
    hamburgerMenu.style.display = 'flex';
  }
})

