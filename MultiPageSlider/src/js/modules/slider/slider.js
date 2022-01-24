export default class Slider { // в класс мы передаем аргументы page, btns
    // {page = "", btns = "", next = "", prev = ""} -єто  как раз и будет деструкторировать наш обЬект
    // = {}  а это если мы забыли передать обЬект в мейн то сработает пустой обЬект {}
    constructor({container = null, 
        btns = null, 
        next = null, 
        prev = null,
        activeClass = '',
        animate,
        autoplay} = {}) {  
        // этим конструктором мы  будем конструировать свойства нового обекта
        // сейчас нас клас ничего не создает
        // класс  будет создавать когда мі его вызываем через оператор NEW
        this.container = document.querySelector(container); //у каждой страницы будет свой page/container
        try { this.slides = this.container.children;} catch(e) {}; // .children - мы получаем всех детей page/container
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
        
    }



 
}

// export default slider;