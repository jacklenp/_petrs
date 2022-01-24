import Slider from '../slider/slider';

export default class MiniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoplay) {
        super(container, next, prev, activeClass, animate, autoplay);
    }

    decorizeSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if(this.animate) {
                slide.querySelector('.card__title').style.opacity = "0.4";
                slide.querySelector('.card__controls-arrow').style.opacity = "0";
            }
        })

        if(!this.slides[0].closest('button')) { // closest - возвращает ближайшего родителя либо же себя если подходит по селектиору в данном случае 'button'
            this.slides[0].classList.add(this.activeClass)
        }
        
        if(this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = "1";
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = "1";
        }
    }

    nextSlide() {
        if (this.slides[1].tagName == "BUTTON" && this.slides[2].tagName == "BUTTON") {
            this.container.appendChild(this.slides[0]); // Slide
            this.container.appendChild(this.slides[1]); // btn
            this.container.appendChild(this.slides[2]); // btn
            this.decorizeSlides();
        } else if (this.slides[1].tagName == "BUTTON") {
            this.container.appendChild(this.slides[0]); // Slide
            this.container.appendChild(this.slides[1]); // btn
            this.decorizeSlides();
        } else {
            this.container.appendChild(this.slides[0]);
            this.decorizeSlides(); 
        }
    }

    bindTrigers() {
        this.next.addEventListener('click', () => this.nextSlide());
        this.prev.addEventListener('click', () => {

            for (let i = this.slides.length - 1; i > 0; i--) {
                if (this.slides[i].tagName !== 'BUTTON') {
                    let active = this.slides[i];
                    this.container.insertBefore(active, this.slides[0]);
                    this.decorizeSlides();
                    break;
                }
                
            }


        });
    }
    // ////////////////////////////
    // ////////////////////////////
    // ////////////////////////////
    // // Это нормальное условие переключение слайдов вперед/назад
    // // Изз-за того что у нас кнопки button в html файле находяться в одном контейнере прийдеться переделать слайде, используя уловия исключения кнопок
    // bindTrigers() {
    //     this.next.addEventListener('click', () => {
    //         this.container.appendChild(this.slides[0]);
    //         this.decorizeSlides();  
    //     });
    //     this.prev.addEventListener('click', () => {
    //         let active = this.slides[this.slides.length - 1]
    //         this.container.insertBefore(active, this.slides[0]);
    //         this.decorizeSlides();
    //     });
    // }
    // ////////////////////////////
    // ////////////////////////////

    init() {
       try {
            this.container.style.cssText =  `
                display: flex;
                flex-wrap: wrap;
                overflow: hidden;
                align-items: flex-start;
            `;
            this.bindTrigers();
            this.decorizeSlides();
    
            if(this.autoplay) {  // єто значит если этот параметр нм=ам передан
                setInterval(() => this.nextSlide(), 5000)
            }
       } catch(e) {};

    }
}