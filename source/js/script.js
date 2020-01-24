var burger = document.querySelector('.header__burger');
var header = document.querySelector('.header');
var list = document.querySelector('.header__main-nav');
var headerLogoWrap = document.querySelector('.header__logo-wrap');
var greeting = document.querySelector('.greeting');
var intro = document.querySelector('.intro__heading-wrap');
var competition = document.querySelector('.competition__heading-wrap');
var popupOk = document.querySelector('.popup-success');
var popupError = document.querySelector('.popup-fail');
var buttonOk = document.querySelector('.popup-success__button');
var buttonError = document.querySelector('.popup-fail__button');
var submit = document.querySelector('.form-footer__button');
var phone = document.querySelector('.contact-info__input--phone');
var email = document.querySelector('.contact-info__input--email');
var firstName = document.querySelector('.user-name__input--first-name');
var secondName = document.querySelector('.user-name__input--second-name');

window.addEventListener('load', function(evt) {
  evt.preventDefault();
  burger.classList.toggle('header__burger--no-js');
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

submit.addEventListener('click', function(evt) {
  if (phone.checkValidity() && email.checkValidity()) {
    evt.preventDefault();
    if (firstName.value && secondName.value && email.value) {
      popupOk.classList.remove('popup-success--closed')
    } else {
      popupError.classList.remove('popup-fail--closed');
      firstName.classList.add('user-name__input--required');
      secondName.classList.add('user-name__input--required');
      email.classList.add('contact-info__input--required');
    };
  };
});

buttonOk.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupOk.classList.add('popup-success--closed');
})

buttonError.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupError.classList.add('popup-fail--closed');
  location.href = 'form.html#anch';
})

firstName.addEventListener('click', function(evt) {
  evt.preventDefault();
  firstName.classList.remove('user-name__input--required');
})

secondName.addEventListener('click', function(evt) {
  evt.preventDefault();
  secondName.classList.remove('user-name__input--required');
})

email.addEventListener('click', function(evt) {
  evt.preventDefault();
  email.classList.remove('contact-info__input--required');
})
