var burger = document.querySelector('.header__burger');
var header = document.querySelector('.header');
var list = document.querySelector('.header__nav');
var headerLogoWrap = document.querySelector('.header__logo-wrap');

burger.addEventListener('click', function(evt) {
  evt.preventDefault();
  burger.classList.toggle('header__burger--opened');
  header.classList.toggle('header--opened');
  list.classList.toggle('nav--opened');
  headerLogoWrap.classList.toggle('header__logo-wrap--opened');
});
