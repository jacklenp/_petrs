import tabs from '../js/modules/tabs';
import timer from '../js/modules/timer';
import modal from '../js/modules/modal';
import slider from '../js/modules/slider';
import calc from '../js/modules/calc';
import cards from '../js/modules/cards';
import forms from '../js/modules/forms';
import {openModal} from './modules/modal'


window.addEventListener('DOMContentLoaded', () => {
      const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 30000);

      //   const tabs = require('../js/modules/tabs'),
      //         timer = require('../js/modules/timer'),
      //         modal = require('../js/modules/modal'),
      //         slider = require('../js/modules/slider'),
      //         calc = require('../js/modules/calc'),
      //         cards = require('../js/modules/cards'),
      //         forms = require('../js/modules/forms');


      tabs('.tabheader__item', '.tabcontent', '.tabheader__items',  'tabheader__item_active');
            //   tabs();
              timer('.timer', '2021=01-03');
              modal('[data-modal]', '.modal', modalTimerId);
              calc();
              cards();
              forms('form', modalTimerId);
              slider({
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







