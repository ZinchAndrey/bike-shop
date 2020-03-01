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

// слайдер slick
// слайдер с великами
$('.slider-block__list--bikes').slick({ // eslint-disable-line no-undef
  centerMode: true,
  centerPadding: '200px',
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        centerPadding: '50px',
        // slidesToShow: 3
      }
    },
    {
      breakpoint: 1023,
      settings: {
        centerPadding: '100px',
        slidesToScroll: 2,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding: '0px',
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }
  ]
});
$('.slider-block__list--bikes').slick('slickSetOption', 'slidesToScroll', 3, true); // eslint-disable-line no-undef


// слайдер с аксессуарами
$('.slider-block__list--details').slick({ // eslint-disable-line no-undef
  centerMode: true,
  centerPadding: '120px',
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        centerPadding: '50px',
        // slidesToShow: 3
      }
    },
    {
      breakpoint: 1023,
      settings: {
        centerPadding: '100px',
        slidesToScroll: 2,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding: '0px',
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }
  ]
});
$('.slider-block__list--details').slick('slickSetOption', 'slidesToScroll', 4, true); // eslint-disable-line no-undef

// eslint-disable-next-line no-unused-vars
// var swiper = new Swiper('.swiper-container', { // eslint-disable-line no-undef
//   slidesPerView: 3,
//   spaceBetween: 32,
//   slidesPerGroup: 3,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   centeredSlides: true,
//   // loopedSlides: 4,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   // breakpoints: {
//   //   768: {
//   //     slidesPerView: 1,
//   //     slidesPerGroup: 1,
//   //   }
//   // }
// });
