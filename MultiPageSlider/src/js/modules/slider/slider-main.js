import Slider from './slider';


export default class MainSlider extends Slider {
    constructor(btns) {
        super(btns)
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = this.slides.length;
        }
        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });
        this.slides[this.slideIndex - 1].style.display = 'block';

        try {
            // мы обявили елемент this.hanson в render()
            // в try  мы обявляем елемент this.hanson а потом используем ее в showSlides()
            this.hanson.style.opacity = "0";

            if (n === 3) {
                this.hanson.classList.add('animated');
                setTimeout(() => {
                    console.log('text');
                    this.hanson.style.opacity = "1";
                    this.hanson.classList.add('slideInUp');
                }, 3000);
            } else {
                this.hanson.classList.remove('slideInUp');
            }
        } catch (e) {
            
        }
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    bindTrigers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {   //по клику переключает слайд
                this.plusSlides(1)
            });
            // console.log(btn.parentNode);
            // console.log(btn.parentNode.previousElementSibling);
            
            btn.parentNode.previousElementSibling.addEventListener('click', (e) => { //по клику на лого переключает слайд
                //  parentNode -  ищет родителя елемента
                //  previousElementSibling -  ищет предидущего  соседа
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        document.querySelectorAll('.prevmodule').forEach(arrow => {
            arrow.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(-1);
            });
        });
        document.querySelectorAll('.nextmodule').forEach(arrow => {
            arrow.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(1);
            });
        });
    }

    render() { // єтот метод переключает слайд
        if(this.container) { // ЕСЛИ єто правда == true
            try { // try catch дает  возможность не поломать скрипт
                // в try  мы обявляем елемент this.hanson а потом используем ее в showSlides()
                this.hanson = document.querySelector('.hanson');
            } catch(e) {}
    
            this.showSlides(this.slideIndex);
            this.bindTrigers()
        }
    }
}