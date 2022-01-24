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
export default calc;