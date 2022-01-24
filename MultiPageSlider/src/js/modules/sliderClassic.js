// этот слайдер простой для длайдера в стиле ООП

export default class Slider { // в класс мы передаем аргументы page, btns
    constructor(page, btns) {  
        // этим конструктором мы  будем конструировать свойства нового обекта
        // сейчас нас клас ничего не создает
        // класс  будет создавать когда мі его вызываем через оператор NEW
        this.page = document.querySelector(page); //у каждой страницы будет свой page
        this.slides = this.page.children; // .children - мы получаем всех детей page
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
        
    }



    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = this.slideIndex.length;
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

    render() { // єтот метод переключает слайд
        try { // try catch дает  возможность не поломать скрипт
            // в try  мы обявляем елемент this.hanson а потом используем ее в showSlides()
            this.hanson = document.querySelector('.hanson');

        } catch(e) {}

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
            })

        })

        this.showSlides(this.slideIndex);

        
        
    }
}

// export default slider;