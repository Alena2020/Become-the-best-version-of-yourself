"use strict";

let nav = document.querySelector('.nav');
let visibleMenu = document.querySelector('.visible-menu');
let hiddenMenu = document.querySelector('.hidden-menu');
let burger = document.querySelector('.burger');
let breaks = [];

function updateMenu() {
  // получаем ширину всего меню
  let navWidth = burger.classList.contains('hidden') ? nav.offsetWidth : nav.offsetWidth - burger.offsetWidth;
  let visibleMenuWidth = visibleMenu.offsetWidth; // получаем ширину видимого меню
  console.log(hiddenMenu);
  if (visibleMenuWidth > navWidth) {
    breaks.push(visibleMenuWidth);
    hiddenMenu.prepend(visibleMenu.lastElementChild);
    burger.classList.remove('hidden');
    updateMenu();
  } else {
    if (navWidth > breaks[breaks.length - 1]) {
      breaks.pop();
      visibleMenu.append(hiddenMenu.firstElementChild);
    }
    if (breaks.length < 1) {
      burger.classList.add('hidden');
      hiddenMenu.classList.remove('active');
    }
  }
  
}

burger.addEventListener('click', function () {
  hiddenMenu.classList.toggle('active');
  burger.classList.toggle('active');
});

window.addEventListener('resize', updateMenu);
document.addEventListener('DOMContentLoaded', updateMenu);