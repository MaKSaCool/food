import tabs  from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import forms from './modules/forms';
import calculator from './modules/calculator';
import slider from './modules/slider';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2021-02-01');
    cards();
    forms('form', modalTimerId);
    calculator();
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
        totalCounter: '#total',
        currentCounter: '#current',
        slide: '.offer__slide'
    });
 
    {

        // Classes
    // getResource('http://localhost:3000/menu')
    //     .then(data => createCard(data));
    // function createCard(data) {
    //     data.forEach( ({img, altimg, title, descr, price}) => {
    //         const element = document.createElement('div');
    //         element.classList.add('menu__item');
    //         element.innerHTML = `
    //             <img src=${img} alt=${altimg}>
    //             <h3 class="menu__item-subtitle">${title}</h3>
    //             <div class="menu__item-descr">${descr}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${price*27}</span> грн/день</div>
    //             </div>
    //         `;
    //         document.querySelector('.menu .container').append(element);
    //     });
    // }


   


    // Json
    // fetch('db.json')
    //     .then(data => data.json())
    //     .then(res => console.log(res));

//Slider
//     // showSlides(slideIndex);

//     // if (slides.length < 10) {
//     //     total.textContent = `0${slides.length}`;
//     // } else {
//     //     total.textContent = slides.length; 
//     // }

//     // function showSlides(n) {
//     //     if (n > slides.length) {
//     //         slideIndex = 1;
//     //     }
//     //     if (n < 1) {
//     //         slideIndex = slides.length;
//     //     }

//     //     slides.forEach(item => item.style.display = 'none');
//     //     slides[slideIndex - 1].style.display = 'block';

//     //     if (slideIndex < 10) {
//     //         current.textContent = `0${slideIndex}`;
//     //     } else {
//     //         current.textContent = slideIndex; 
//     //     }
//     // }

//     // function plusSlides (n) {
//     //     showSlides(slideIndex += n);
//     // }

//     // prev.addEventListener('click', () => {
//     //     plusSlides(-1);
//     // });

//     // next.addEventListener('click', () => {
//     //     plusSlides(1);
//     // });
    }
});