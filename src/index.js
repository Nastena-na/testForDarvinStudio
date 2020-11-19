import './index.css';
import { FormValidator } from './js/FormValidator';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

(function () {
  const arrowCatalog = document.querySelector('.navigation__item_type_catalog');
  const linkCatalog = document.querySelector('.navigation__link_type_catalog');
  const catalog = document.querySelector('.navigation__catalog');
  const form = document.forms.form;
  const sliderOne = document.querySelector('.swiper-container');
  const sliderTwo = document.querySelector('.salesHits__cardlist-swiper');
  const buttomSalesHits = document.querySelectorAll('.salesHits__buttom');
  const informButtom = document.querySelector('.inform__buttom');
  const twoParagraph = document.querySelector('.inform__description_two');
  const burger = document.querySelector('.header__burger');
  const navigation = document.querySelector('.navigation');

  const formValidator = new FormValidator(form);

  Swiper.use([Navigation, Pagination]);

  const swiperOne = new Swiper(sliderOne, {
    slidesPerView: 1,
    spaceBetween: 8,
    loop: true,
    slidesPerGroup: 1,
    centerInsufficientSlides: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiperTwo = new Swiper(sliderTwo, {
    slidesPerView: 1,
    spaceBetween: 8,
    loop: true,
    slidesPerGroup: 1,
    centerInsufficientSlides: false,
    pagination: {
      el: '.swiper-pag',
      type: 'bullets',
      clickable: true,
    },
  });

  function openCatalog() {
    // открываем меню каталога
    catalog.setAttribute('style', 'display:block;');
    arrowCatalog.setAttribute('style', 'background-color: #ffffff;');
    linkCatalog.setAttribute('style', 'color: #3a4750;');
  }

  function changeImage(evt) {
    //удаляем кнопку "корзина"
    evt.target
      .closest('.salesHits__card')
      .removeChild(evt.target.closest('.salesHits__buttom'));
  }

  function openTwoParagraph() {
    //открываем или закрываем вторую часть текста
    if (!twoParagraph.hasAttribute('style', 'display:none;')) {
      twoParagraph.setAttribute('style', 'display:block;');
    } else twoParagraph.removeAttribute('style', 'display:block;');
  }

  function openMenu() {
    // открытие меню навигации на разрешении меньше 425px
    if (!navigation.hasAttribute('style', 'display:block;')) {
      navigation.setAttribute('style', 'display:block;');
    } else navigation.removeAttribute('style', 'display:block;');
  }

  arrowCatalog.addEventListener('click', openCatalog); // по клику на каталог, открываем его меню
  formValidator.setEventListeners(); // вызываем метод валидации
  buttomSalesHits.forEach((elem) => {
    // по клику на каждый елемент "корзина", удаляем её
    elem.addEventListener('click', changeImage);
  });
  informButtom.addEventListener('click', openTwoParagraph); // по клику на кнопку "показать полностью", открываем или закрываем вторую часть текста
  burger.addEventListener('click', openMenu); // открытие меню навигации  по клику на бургер
})();
