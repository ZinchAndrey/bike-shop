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

// открытие / закрытие аккордеона
var filterName = document.querySelectorAll('.sidebar__legend-button');

for (var i = 0; i < filterName.length; i++) {
  filterName[i].addEventListener('click', function (event) {
    event.preventDefault();
    event.target.parentElement.nextElementSibling.classList.toggle('closed');
  });
}

