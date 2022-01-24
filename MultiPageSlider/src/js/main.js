import MainSlider from './modules/slider/slider-main'
import MiniSlider from './modules/slider/slider-mini'
import PlayVideo from './modules/playVideo'
import Difference from './modules/difference'
import Accordion from './modules/accordion'

window.addEventListener('DOMContentLoaded', () => {
    // 'use strict';

    const slider = new MainSlider({container: '.page', btns: '.next'});
    slider.render();

    const modulePageSlider = new MainSlider({container: '.moduleapp', btns: '.next'});
    modulePageSlider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();

    new PlayVideo('.showup .play', '.overlay').init();
    new PlayVideo('.module__video-item .play', '.overlay').init();
    


    new Difference('.officerold','.officernew', '.officer__card-item').init();

    new Accordion('.plus__content', '.msg').init();

})