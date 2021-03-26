'use strict';

import choiceClub from './modules/сhoiceClub';
import togglePopup from './modules/togglePopup';
import toggleMenu from './modules/toggleMenu';
import validForm from './modules/validForm';
import scrollBlock from './modules/scrollBlock';
import sendForm from './modules/sendForm';
import mainSlider from './modules/mainSlider';
import gallerySlider from './modules/gallerySlider';
import servicesSlider from './modules/servicesSlider';
import calc from './modules/calc';



// выбор клуба
choiceClub();

// модальное окно(записаться на визит, перезвони мне, подарок)
togglePopup();

// меню
toggleMenu();

// валидация форм
validForm();

// cкрол стрелки вверх
scrollBlock();

// отправка форм
sendForm('banner-form','check1');
sendForm('footer_form',false);
sendForm('form1','check');
sendForm('form2','check2');
sendForm('card_order','card_check');

// главнй слайдер
mainSlider();

// слайдер галереи
gallerySlider();

// слайдер услуг
servicesSlider();

// калькулятор
calc();