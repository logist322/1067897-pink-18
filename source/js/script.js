var burger = document.querySelector('.header__burger');
var header = document.querySelector('.header');
var list = document.querySelector('.header__main-nav');
var headerLogoWrap = document.querySelector('.header__logo-wrap');
var greeting = document.querySelector('.greeting');
var intro = document.querySelector('.intro__heading-wrap');
var competition = document.querySelector('.competition__heading-wrap');

burger.addEventListener('click', function(evt) {
  evt.preventDefault();
  burger.classList.toggle('header__burger--opened');
  header.classList.toggle('header--opened');
  list.classList.toggle('main-nav--opened');
  headerLogoWrap.classList.toggle('header__logo-wrap--opened');

  if (intro) {
    intro.classList.toggle('intro__heading-wrap--opened');
  } else if (greeting) {
    greeting.classList.toggle('greeting--opened');
  } else if (competition) {
    competition.classList.toggle('competition__heading-wrap--opened');
  };
});
