import { dropDown, slider } from "./functions";
import './style.css';

// Header

const moreTab = document.querySelector('.more-tab');
const moreList = document.querySelector('.more');

dropDown(moreTab, moreList);

// Image slider

const nextBtn = document.querySelector('.btn-next');
const backBtn = document.querySelector('.btn-back');
const autoplayBtn = document.querySelector('.autoplay');

nextBtn.addEventListener('click', slider.nextSlide);
backBtn.addEventListener('click', slider.previousSlide);
autoplayBtn.addEventListener('click', () => {
  slider.slideShow();
  autoplayBtn.classList.toggle('on');
});
