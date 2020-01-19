'use strict'

// Slider variables
let sliderItems = document.querySelectorAll(".slider__item");
let sliderItem = document.querySelector(".slider__item");
let sliderList = document.querySelector(".slider__list");
let leftArrow = document.querySelector(".slider__button_arrow-left");
let rightArrow = document.querySelector(".slider__button_arrow-right");

let translateValue = 0;
let visibleItems = Math.round(sliderList.offsetWidth/sliderItem.offsetWidth);
let currentItem = visibleItems;

// Slider methods
const slideToRight = () => {
  if(currentItem === sliderItems.length) return;
  translateValue -= sliderItem.offsetWidth;
  sliderList.style.transform = `translateX(${translateValue}px)`;
  currentItem++;
}

const slideToLeft = () => {
  if(currentItem === visibleItems) return;
  translateValue += sliderItem.offsetWidth;
  sliderList.style.transform = `translateX(${translateValue}px)`;
  currentItem--;
}

leftArrow.addEventListener('click', slideToLeft);
rightArrow.addEventListener('click', slideToRight); 

// Modal methods

