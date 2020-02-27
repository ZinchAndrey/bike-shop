'use strict';

// сайдбар с фильтрами на странице каталога
var sidebar = document.querySelector('.sidebar');
var filters = document.querySelector('.toolbar__item-link--mob');
var filterCloseButton = document.querySelector('.sidebar__close-button');
var catalog = document.querySelector('.catalog');

// открытие / закрытие сайдбара с фильтрами
// убирает сайдбар из потока и закрывает его при включ js
sidebar.classList.add('sidebar--closed');
catalog.classList.remove('catalog--no-js'); // расскоментировать соответствующий css

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

// открытие / закрытие меню в моб версии
var nav = document.querySelector('.nav');
var menuCloseButton = document.querySelector('.nav__button-close');
var menuOpenButton = document.querySelector('.page-header__menu-button');
var menuMob = document.querySelector('.nav');

// закрывает меню и убираем его из потока при работающем js
nav.classList.remove('nav--no-js'); // необходимо раскомментировать css код
menuMob.classList.add('closed');

menuOpenButton.addEventListener('click', function () {
  menuMob.classList.remove('closed');
});

menuCloseButton.addEventListener('click', function () {
  menuMob.classList.add('closed');
});


// переключение цветов в карточке товара

var colorButton = document.querySelectorAll('.product__color-button');

for (i = 0; i < colorButton.length; i++) {
  colorButton[i].addEventListener('click', function (event) {
    event.preventDefault();
    for (i = 0; i < colorButton.length; i++) {
      colorButton[i].classList.remove('product__color-button--active');
    }
    event.target.classList.toggle('product__color-button--active');
  });
}

