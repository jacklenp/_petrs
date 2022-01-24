/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _js_modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _js_modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _js_modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _js_modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _js_modules_cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _js_modules_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../js/modules/forms */ "./js/modules/forms.js");










window.addEventListener('DOMContentLoaded', () => {
      const modalTimerId = setTimeout(() => Object(_js_modules_modal__WEBPACK_IMPORTED_MODULE_2__["openModal"])('.modal', modalTimerId), 30000);

      //   const tabs = require('../js/modules/tabs'),
      //         timer = require('../js/modules/timer'),
      //         modal = require('../js/modules/modal'),
      //         slider = require('../js/modules/slider'),
      //         calc = require('../js/modules/calc'),
      //         cards = require('../js/modules/cards'),
      //         forms = require('../js/modules/forms');


      Object(_js_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items',  'tabheader__item_active');
            //   tabs();
              Object(_js_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])('.timer', '2021=01-03');
              Object(_js_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-modal]', '.modal', modalTimerId);
              Object(_js_modules_calc__WEBPACK_IMPORTED_MODULE_4__["default"])();
              Object(_js_modules_cards__WEBPACK_IMPORTED_MODULE_5__["default"])();
              Object(_js_modules_forms__WEBPACK_IMPORTED_MODULE_6__["default"])('form', modalTimerId);
              Object(_js_modules_slider__WEBPACK_IMPORTED_MODULE_3__["default"])({
                  container : '.offer__slider', 
                  slide : '.offer__slide', 
                  nextArrow : '.offer__slider-next', 
                  preArrow : '.offer__slider-prev', 
                  totalCounter : '#total',
                  currentCount : '#current',
                  wrapper : '.offer__slider-wrapper', 
                  field : '.offer__slider-item'

              });

          
       


});









/***/ }),

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calc() {
         // CALCULATOR

         const result = document.querySelector('.calculating__result span');
         // let sex = 'female', 
         //     height, weight, age, 
         //     ratio = 1.375;

         let sex, height, weight, age, ratio;

         if (localStorage.getItem('sex')){
             sex = localStorage.getItem('sex') 
         } else {
             sex = "female";
             localStorage.setItem('sex', "female")
         }

         if (localStorage.getItem('ratio')){
             ratio = localStorage.getItem('ratio') 
         } else {
             ratio = 1.375;
             localStorage.setItem('ratio', 1.375)
         }

         function initLocalSettings(selector, activeClass) {
             const elements = document.querySelectorAll(selector);

             elements.forEach(item => {
                 item.classList.remove(activeClass);

                 if(item.getAttribute('id') === localStorage.getItem('sex')) {
                     item.classList.add(activeClass);
                 }
                 if(item.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                     item.classList.add(activeClass);
                 }
             })
         }

         initLocalSettings('#gender div', 'calculating__choose-item_active')
         initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active')




         function calcTotal() {
             if(!sex || !height || !weight || !age || !ratio) {
                 result.textContent = "Не хватает данных";
                 return;
             }

             if (sex === 'female') {
                 result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 *age)) * ratio);
             } else {
                 result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);   
             }
         }
         calcTotal();

         // function getStaticInformation(parentsSelector, activeClass) {
         //     const elements = document.querySelectorAll(`${parentsSelector} div`)
             
         //     document.querySelector(parentsSelector).addEventListener('click', (e) => {
         //         if(e.target.getAttribute('data-ratio')){
         //             ratio = +e.target.getAttribute('data-ratio');
         //         } else {
         //             sex = e.target.getAttribute('id')
         //         }
                 
         //         elements.forEach(elem => {
         //             elem.classList.remove(activeClass)
         //         })
         //         e.target.classList.add(activeClass);

         //     })
         // }
         // getStaticInformation('#gender', 'calculating__choose-item_active')
         // getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active')


         function getStaticInformation(selector, activeClass) {
         // function getStaticInformation(parantsSelector, activeClass) {
             const elements = document.querySelectorAll(selector);
             // const elements = document.querySelectorAll(`${parantsSelector} div`);
             console.log(elements);
             
             elements.forEach(elem => {
                 elem.addEventListener('click', (e) => {
                     if(e.target.getAttribute('data-ratio')) {
                         ratio = +e.target.getAttribute('data-ratio');
                         localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'))
                     } else {
                         sex = e.target.getAttribute('id');
                         localStorage.setItem('sex', e.target.getAttribute('id'))
                     }
 
                     elements.forEach(elem => {
                         elem.classList.remove(activeClass);
                     })
                     e.target.classList.add(activeClass);
 
                     calcTotal();
                 });
             })
             // document.querySelector(parantsSelector)
         }

         // getStaticInformation('calculating__choose_medium')
         getStaticInformation('#gender div', 'calculating__choose-item_active')
         // getStaticInformation('#gender', 'calculating__choose-item_active')
         getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active')
         // getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active')
         

         function getDynamicInformation(selector) {
             const input = document.querySelector(selector);

             input.addEventListener('input', () => {
                 if(input.value.match(/\D/g)) {
                     input.style.border = "2px solid red";
                 } else {
                     input.style.border = "none";

                 }

                 switch(input.getAttribute('id')) {
                     case "height": 
                         height = +input.value;
                         console.log(height);
                         
                         break;
                     case "weight": 
                         weight = +input.value;
                         console.log(weight);
                         
                         break;
                     case "age": 
                         age = +input.value;
                         console.log(age);
                         
                         break;
                     
                     }
                     calcTotal();
                 })
         }
         getDynamicInformation('#height')
         getDynamicInformation( '#weight')
         getDynamicInformation('#age')
}

// module.exports= calc;
/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards() {
      // Create card menu

      class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector),
            this.transfer = 27;
            this.changeTaUAH();
        }

        changeTaUAH() {
            this.price= this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element =  'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className =>  element.classList.add(className));

            }


            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
            `;
            this.parent.append(element);
        }
    }

    // const div = new MenuCard();
    // div.render();



    Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, altimg, title, descr, price}) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render()
        });
    });

    // getResource('http://localhost:3000/menu')
    //     .then(data => createCard(data))

    //     function createCard(data) {
    //         data.forEach(({img, altimg, title, descr, price}) => {
    //             price = price * 27;

    //             const element = document.createElement('div');
    //     element.classList.add('menu__item');
    //     element.innerHTML = `
    //         <img src=${img} alt=${altimg}>
    //         <h3 class="menu__item-subtitle">${title}</h3>
    //         <div class="menu__item-descr">${descr}</div>
    //         <div class="menu__item-divider"></div>
    //         <div class="menu__item-price">
    //             <div class="menu__item-cost">Цена:</div>
    //             <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //         </div>
    //     `;
    //     document.querySelector('.menu .container').append(element);
    //         });
    //     }


//СНЯТЬ КОМЕНТ !!!!!!!!!!!!!!!!!!
    // axios.get('http://localhost:3000/menu')
    //     .then(obj => {
    //         obj.data.forEach(({img, altimg, title, descr, price}) => {
    //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render()
    //         });
    //     });
//СНЯТЬ КОМЕНТ !!!!!!!!!!!!!!!!!!

            // new MenuCard(
            //     "img/tabs/vegy.jpg",
            //     "vegy",
            //     'Меню "Фитнес"',
            //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
            //     8,
            //     '.menu .container',
            //     // 'menu__item',
            //     // 'big'
            // ).render();
            // new MenuCard(
            //     "img/tabs/elite.jpg",
            //     "elite",
            //     'Меню "Премиум"',
            //     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
            //     16,
            //     '.menu .container',
            //     'menu__item'
            // ).render();
            // new MenuCard(
            //     "img/tabs/post.jpg",
            //     "post",
            //     'Меню "Постное"',
            //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
            //     14,
            //     '.menu .container',
            //     'menu__item'
            // ).render();

//СНЯТЬ КОМЕНТ !!!!!!!!!!!!!!!!!!
}

// module.exports = cards;
/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function forms(formSelector, modalTimerId) {
    
            // Forms

            const forms = document.querySelectorAll(formSelector);

            const message = {
                loading: "img/form/spinner.svg",
                success: "Спасибо! Мы свяжемся с Вами!",
                failture: "Что-то пошло не так"
            };

            forms.forEach(item => {
                bindPostData(item);
            });



            function bindPostData(form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();

                    // let statusMessage = document.createElement('div');
                    // statusMessage.classList.add('status');
                    let statusMessage = document.createElement('img');
                    statusMessage.src = message.loading;
                    statusMessage.classList.add('status');
                    // statusMessage.textContent = message.loading;
                    // form.append(statusMessage);
                    form.insertAdjacentElement('afterend', statusMessage);
/////
/////
// const request = new XMLHttpRequest();
// request.open('POST', 'server.php');

// // request.setRequestHeader('Content-type', 'multipart/form-data');
// request.setRequestHeader('Content-type', 'application/json');
// const formData = new FormData(form);

// const object = {};
// formData.forEach(function(value, key) {
    //     object[key] = value;
    //     // console.log(object);
    
    // });
    
// const json = JSON.stringify(object);

// // request.send(formData);
// request.send(json);
/////
/////
                    const formData = new FormData(form);
                    // const object = {};
                    // formData.forEach(function(value, key) {
                    //         object[key] = value;
                    //     });

                    const json = JSON.stringify(Object.fromEntries(formData.entries()));

                    // postData('server.php', JSON.stringify(object))
                    Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/requests', json)
                    // postData('http://localhost:3000/requests', JSON.stringify(object))
                    // .then(data => data.text())  //  трансформация дата  
                    .then(data => {
                        console.log(data);
                        showThanksModal(message.success);
                        statusMessage.remove();
                    }).catch(() => {
                        showThanksModal(message.failture);
                    }).finally(() => {
                        form.reset();
                    });


                    // request.addEventListener('load', () => {
                    //     if(request.status === 200){
                    //         console.log(request.response);
                    //         // statusMessage.textContent = message.success;
                    //         showThanksModal(message.success);
                            
                    //         form.reset();
                    //         statusMessage.remove();
                    //         // setTimeout(()=>{
                    //             // }, 2000);
                    //         } else {
                    //             // statusMessage.textContent = message.failture;
                    //             showThanksModal(message.failture);

                    //     }
                    // });

                });
                // const statusMessage = document.createElement('div');
                // statusMessage.classList.add('status');
                // statusMessage.textContent = message.loading;
                // form.append(statusMessage)

                // const request = new XMLHttpRequest();
                // request.open('POST', 'server.php');

                // request.setRequestHeader('Content-type', 'multipart/form-data')
                // const formData = new FormData(form);

                // request.send(formData);

                // request.addEventListener('load', () => {
                //     if(request.status === 200) {
                //         console.log(request.response);
                        
                //     }
                // })
            }

//СНЯТЬ КОМЕНТ !!!!!!!!!!!!!!!!!!
            // Form spinner
            
            function showThanksModal(message) {
                const modalDialog = document.querySelector('.modal__dialog');
                
                modalDialog.classList.add('hide'); 
                Object(_modal__WEBPACK_IMPORTED_MODULE_0__["openModal"])('.modal', modalTimerId);

                const thanksModal = document.createElement('div');
                thanksModal.classList.add('modal__dialog');
                thanksModal.innerHTML = `
                    <div class="modal__content">
                        <div data-close class="modal__close">&times;</div>
                        <div class="modal__title">${message}</div>

                    </div>
                `;
                document.querySelector('.modal').append(thanksModal);
                setTimeout(() => {
                    thanksModal.remove();
                    modalDialog.classList.add('show');
                    modalDialog.classList.remove('hide');
                    Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])('.modal');
                }, 4000);
            }



            // fetch('https://jsonplaceholder.typicode.com/posts', {
            //     method: "POST",
            //     body: JSON.stringify({name: 'Alex'}),
            //     headers: {
            //         'Content-type': 'application/json'
            //     }
            // })
            //     .then(response => response.json())
            //     .then(json => console.log(json));

            // fetch('db.json')
            //     .then(data => data.json())
            //     .then(res => console.log(res));



}

// module.exports = forms;
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! exports provided: default, closeModal, openModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });

    function closeModal(modalSelector) {
        const modal = document.querySelector(modalSelector);
        modal.classList.add('hide', 'fade');
        modal.classList.remove('show');
        document.documentElement.style.overflow = '';
    }
        
    function openModal(modalSelector, modalTimerId) {
        const modal = document.querySelector(modalSelector);
        modal.classList.add('show', 'fade');
        modal.classList.remove('hide');
        document.documentElement.style.overflow = 'hidden';

        console.log(modalTimerId);
        
        if(modalTimerId) {
            clearInterval(modalTimerId);

        }
    }


    function modal(triggerSelector, modalSelector, modalTimerId) {
    
   
    //Modal

    const modal = document.querySelector(modalSelector),
    // btnModalClose = document.querySelector('[data-close]'),
        //  modalTrigger = document.querySelectorAll('[data-modal]');
        modalTrigger = document.querySelectorAll(triggerSelector);



    modalTrigger.forEach((btnModal) => {
        btnModal.addEventListener('click', () => {
            // modal.style.display = "block";
            openModal(modalSelector, modalTimerId);
            // console.log(window.getComputedStyle('display'));
        });
    });


    
    // btnModalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if(e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        // console.log(e.code);
        if(e.code === "Escape" && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    

    function showModalByScroll() {
        // console.log(window.pageYOffset);
        // console.log(document.documentElement.clientHeight);
        
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            // console.log();
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

}

// module.exports = modal;
/* harmony default export */ __webpack_exports__["default"] = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider({container, slide, nextArrow, preArrow, totalCounter, currentCount, wrapper, field}) {
    
            // SLIDER
          
            const slides = document.querySelectorAll(slide),
                slider = document.querySelector(container),
                prev = document.querySelector(preArrow),
                next = document.querySelector(nextArrow),
                current = document.querySelector(currentCount),
                total = document.querySelector(totalCounter),
                slidesWrapper = document.querySelector(wrapper),
                slidesItem = document.querySelector(field),
                width = window.getComputedStyle(slidesWrapper).width;
                // total = document.querySelector('#total')
            // const slides = document.querySelectorAll('.offer__slide'),
            //     slider = document.querySelector('.offer__slider'),
            //     prev = document.querySelector('.offer__slider-prev'),
            //     next = document.querySelector('.offer__slider-next'),
            //     current = document.querySelector('#current'),
            //     total = document.querySelector('#total'),
            //     slidesWrapper = document.querySelector('.offer__slider-wrapper'),
            //     slidesItem = document.querySelector('.offer__slider-item'),
            //     width = window.getComputedStyle(slidesWrapper).width;
            //     // total = document.querySelector('#total')

            let slideIndex = 1;
            let offset = 0;

            if(slides.length < 10) {
                total.textContent = `0${slides.length}`;
                current.textContent = `0${slideIndex}`;
            } else {
                total.textContent = slides.length;
                current.textContent = slideIndex;
            }

            slidesItem.style.width = 100 * slides.length + '%' ;
            // console.log(slidesItem.style.width = width);
            // console.log(slidesItem.style.width = 100 * slides.length + 'px');
            slidesItem.style.display = 'flex';
            slidesItem.style.transition = '0.5s all';

            slidesWrapper.style.overflow = "hidden";

            slides.forEach(slide => {
                slide.style.width = width;
            });

            slider.style.position ='relative';

            const dots = document.createElement('ol'),
                dotsArr = [];

            dots.classList.add('carousel-indicators');
            dots.style.cssText = `
            
            `;
            slider.append(dots);

            for (let i = 0; i < slides.length; i++) {
                const dot = document.createElement('li');
                dot.classList.add('dot');
                dot.setAttribute('data-slide-to', i+1);
                if(i == 0 ) {
                    dot.style.opacity = 1;
                }
                dots.append(dot);

                dotsArr.push(dot);
                
            }
            function deletePx(src) {
                // +width.replace(/\D/g, '')
                return +src.replace(/\D/g, '');
            }

            next.addEventListener('click', () => {
                if(offset == deletePx(width) * (slides.length - 1)) {
                    offset = 0;
                } else {
                   offset += deletePx(width);
                }

                slidesItem.style.transform = `translateX(-${offset}px)`;

                if (slideIndex == slides.length) {
                    slideIndex = 1;
                } else {
                    slideIndex++;
                }

                if(slides.length < 10 ) {
                    current.textContent = `0${slideIndex}`;
                } else {
                    current.textContent = slideIndex;
                }

                dotsArr.forEach(activeDot => activeDot.style.opacity = '.5');
                dotsArr[slideIndex - 1].style.opacity = 1;


            });
            prev.addEventListener('click', () => {
                if(offset == 0 ) {
                    offset = deletePx(width) * (slides.length - 1);
                } else {
                    offset -= deletePx(width);
                }
                slidesItem.style.transform = `translateX(-${offset}px)`;

                if (slideIndex == 1) {
                    slideIndex = slides.length;
                } else {
                    slideIndex--
                }

                if(slides.length < 10 ) {
                    current.textContent = `0${slideIndex}`;
                } else {
                    current.textContent = slideIndex;
                }

                dotsArr.forEach(activeDot => activeDot.style.opacity = '.5')
                dotsArr[slideIndex - 1].style.opacity = 1;
            });

            dotsArr.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    const slideTo = e.target.getAttribute('data-slide-to')
                    
                    slideIndex = slideTo;
                    offset = deletePx(width) * (slideTo - 1);
                    
                    slidesItem.style.transform = `translateX(-${offset}px)`;

                    if(slides.length < 10 ) {
                        current.textContent = `0${slideIndex}`;
                    } else {
                        current.textContent = slideIndex;
                    }
    

                    dotsArr.forEach(activeDot => activeDot.style.opacity = '.5')
                    dotsArr[slideIndex - 1].style.opacity = 1;

                })
            })


            



            ////////////////
            ////////////////

            // showSlides(slideIndex);

            // if(slides.length < 10) {
            //     total.textContent =  `0${slides.length}`
            // } else {
            //     total.textContent =  `${slides.length}`
            // }


            // function showSlides(n) {
            //     if(n > slides.length) {
            //         slideIndex = 1
            //     }

            //     if(n < 1) {
            //         slideIndex = slides.length;
            //     }

            //     slides.forEach(item => item.style.display = 'none');
            //     slides[slideIndex - 1].style.display = 'block';

            //     if(slides.length < 10) {
            //         current.textContent =  `0${slideIndex}`;
            //     } else {
            //         current.textContent =  slideIndex;
            //     }
            // }
            // function plusSlides(n) {
            //     showSlides(slideIndex += n);
            // }
            // prev.addEventListener('click', () => {
            //     plusSlides(-1)
            // })
            // next.addEventListener('click', () => {
            //     plusSlides(1)
            // })


            // DOTS SLIDER
}

// module.exports = slider;
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabsSelector, tabsContentSelector, tabsParentSelextor, activeClass) {
// function tabs() {
// Tabs

    // const tabs = document.querySelectorAll('.tabheader__item'),
    //         tabsParent = document.querySelector('.tabheader__items'),
    //         // tabsActive = document.querySelectorAll('.tabheader__item_active'),
    //         tabsContent = document.querySelectorAll('.tabcontent');
    const tabs = document.querySelectorAll(tabsSelector),
            tabsParent = document.querySelector(tabsParentSelextor),
            tabsContent = document.querySelectorAll(tabsContentSelector);



    function hideTabsContent() {
        tabsContent.forEach(tab => {
            // tab.style.display = 'none';
            tab.classList.add('hide');
            tab.classList.remove('show');
        });

        tabs.forEach(tab => {
            // tab.classList.remove('tabheader__item_active');
            tab.classList.remove(activeClass);
        });
    }


    function showTabContent(i = 0) {
        // tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        // tabs[i].classList.add('tabheader__item_active');
        tabs[i].classList.add(activeClass);
    }
    hideTabsContent();
    showTabContent();


    tabsParent.addEventListener('click', event => {
        const target = event.target;

        // if(target && target.classList.contains('tabheader__item')) {
        if(target && target.classList.contains(tabsSelector.slice(1))) {
            console.log(tabsSelector);
            
            tabs.forEach((item , i) => {
                if(target == item) {
                    hideTabsContent();
                    showTabContent(i);
                }
                // target.classList.add('tabheader__item_active');
            });
        }
    });

}

// module.exports = tabs;
/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(id,deadtime) {
     // Timer

    

     function getTimeRemaining(endtime){
         const t = Date.parse(endtime) - Date.parse(new Date()),
             days = Math.floor(t / (1000 * 60 * 60 * 24 )),
             hours = Math.floor((t / (1000 * 60 * 60) % 24)),
             minutes = Math.floor((t / 1000 / 60) % 60),
             seconds = Math.floor((t / 1000) % 60);
             
         return {
             'total': t,
             'days': days,
             'hours': hours,
             'minutes': minutes,
             'seconds': seconds
         };  
     }
 
     function getZero(num) {
         if(num >= 0 && num <= 9) {
             return `0${num}`;
         } else {
             return num;
         }
     }
 
     function setClock(selector, endtime) {
         const timer = document.querySelector(selector),
             days = timer.querySelector('#days'),
             hours = timer.querySelector('#hours'),
             minutes = timer.querySelector('#minutes'),
             seconds = timer.querySelector('#seconds'),
             timeInterval = setInterval(updateClock, 1000);
 
         updateClock();
     
         function updateClock() {
             const t =  getTimeRemaining(endtime);
 
             days.innerHTML = getZero(t.days);
             hours.innerHTML = getZero(t.hours);
             minutes.innerHTML = getZero(t.minutes);
             seconds.innerHTML = getZero(t.seconds);
 
             if(t.total <= 0) {
                 clearInterval(timeInterval);
                 days.innerHTML = "00";
                 hours.innerHTML = "00";
                 minutes.innerHTML = "00";
                 seconds.innerHTML = "00";
             }
         }
     }
     setClock(id, deadtime);
 
}

// module.exports = timer;
/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });

            const postData = async (url, data) => {
                let res = await fetch(url, {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: data
                });

                return await res.json();
            };
            const getResource = async (url) => {
                let res = await fetch(url);
        
                if(!res.ok) {
                    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
                }
        
                return await res.json();
            };
            



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map