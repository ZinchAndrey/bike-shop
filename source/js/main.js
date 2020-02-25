'use strict';
// сайдбар с фильтрами на странице каталога
var sidebar = document.querySelector('.sidebar');
var filters = document.querySelector('.toolbar__item-link--mob');
var filterCloseButton = document.querySelector('.sidebar__close-button');

// открытие / закрытие сайдбара
sidebar.classList.add('sidebar--closed');

filters.addEventListener('click', function () {
  sidebar.classList.toggle('sidebar--closed');
});

filterCloseButton.addEventListener('click', function () {
  sidebar.classList.toggle('sidebar--closed');
});

var filterName = document.querySelector('.sidebar__legend-button');
// var inputBlock = document.querySelector('.sidebar__input-wrapper');

filterName.addEventListener('click', function (event) {
  // console.log(event.target);
  event.target.parentElement.nextElementSibling.classList.toggle('closed');
});
