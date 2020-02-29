'use strict';

// сайдбар с фильтрами на странице каталога
var sidebar = document.querySelector('.sidebar');
var filters = document.querySelector('.toolbar__item-link--mob');
var filterCloseButton = document.querySelector('.sidebar__close-button');
var catalog = document.querySelector('.catalog');

// открытие / закрытие сайдбара с фильтрами
// убирает сайдбар из потока и закрывает его при включ js
if (catalog) {
  sidebar.classList.add('sidebar--closed');
  catalog.classList.remove('catalog--no-js');

  filters.addEventListener('click', function () {
    sidebar.classList.toggle('sidebar--closed');
  });

  filterCloseButton.addEventListener('click', function () {
    sidebar.classList.toggle('sidebar--closed');
  });

  // открытие / закрытие аккордеона
  var filterName = document.querySelectorAll('.sidebar__legend-button');

  for (var i = 0; i < filterName.length; i++) {
    filterName[i].addEventListener('click', function (event) {
      event.preventDefault();
      event.target.classList.toggle('sidebar__legend-button--closed');
      event.target.parentElement.nextElementSibling.classList.toggle('closed');
    });
  }
}

// открытие / закрытие меню в моб версии
var nav = document.querySelector('.nav');
var menuCloseButton = document.querySelector('.nav__button-close');
var menuOpenButton = document.querySelector('.page-header__menu-button');

// закрывает меню и убираем его из потока при работающем js
nav.classList.remove('nav--no-js');
nav.classList.add('nav--closed');

menuOpenButton.addEventListener('click', function () {
  nav.classList.remove('nav--closed');
});

menuCloseButton.addEventListener('click', function () {
  nav.classList.add('nav--closed');
});


// переключение цветов в карточке товара

var colorButton = document.querySelectorAll('.product__color-button');

if (colorButton) {
  for (i = 0; i < colorButton.length; i++) {
    colorButton[i].addEventListener('click', function (event) {
      event.preventDefault();
      for (i = 0; i < colorButton.length; i++) {
        colorButton[i].classList.remove('product__color-button--active');
      }
      event.target.classList.toggle('product__color-button--active');
    });
  }
}

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 32,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
