'use strict'

// Slider elements
let sliderItems = document.querySelectorAll(".slider__item");
let sliderItem = document.querySelector(".slider__item");
let sliderList = document.querySelector(".slider__list");
let leftArrow = document.querySelector(".slider__button_arrow-left");
let rightArrow = document.querySelector(".slider__button_arrow-right");
// Modal elements
let petButtons = document.querySelectorAll(".friends-item__button");
// Slider variables
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

petButtons.forEach(button => button.addEventListener('click', toggleModal));

class Modal {
  constructor(content) {
    const modalWrapper = document.createElement('div');
    modalWrapper.className = 'modal-window';
    modalWrapper.innerHTML = `
      <div class='modal-window__content'>
        ${content}
        <button class="modal-window__button modal-window__button_close action-button fa fa-close" onclick="toggleModal()">
        </button>
      </div>
    `;

    return modalWrapper;
  }
}

function toggleModal(e) {
  const modal = document.querySelector('.modal-window');
  // If modal does not exist, create it
  if(!modal) {
    document.body.append(new Modal(getModalContent(e)));
    return;
  }
  // If modal already exist, toggle his visibility
  /* const modalVisibility = modal.style.display;
  modal.style.display = (modalVisibility === 'none') ? 'flex' : 'none'; */
  modal.remove();
}

function getModalContent(e) {
  let target = e.target;
  console.log(target);
  let modalItem = target.parentNode.querySelector('.modal-item');
  // let content = modalItem.firstElementChild;

  return modalItem.innerHTML;
}