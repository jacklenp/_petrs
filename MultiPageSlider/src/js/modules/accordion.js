export default class Accordion {
    constructor(triggersSelector, message) {
        this.btns = document.querySelectorAll(triggersSelector);
        this.msg = document.querySelector(message)
        console.log(this.btns);
        
    }

    btnTrigger() {

        this.btns.forEach(btn => {

            //css 2-ой вариант где меняем JS стили  
            // .often-questions .accordion-block {
            //     background-color: #f7e7e6;
            //     max-height: 0;
            //     opacity: 0;
            //     transition: all 0.3s ease-in;
            //     /* overflow: hidden; */
            //     /* display: none; */
            //     /* margin-top: 1rem; */
            //     /* padding: 3rem 4rem; */
            //   }
              
            //   .often-questions .accordion-block.active-content {
            //     overflow: visible;
            //     opacity: 1;
            //     margin-top: 1rem;
            //     padding: 3rem 4rem;
            //   }
           
    
            btn.addEventListener('click', function() {
                    const sibling =  btn.closest('.module__info-show').nextElementSibling;
                    const minus = document.querySelector('.plus');
                    
                    sibling.classList.toggle('msg');
                    sibling.style.marginTop = '25px';
                    // sibling.classList.toggle('plus__content');

                    if (sibling.contains(minus)) {
                        console.log(111);
                        
                    }
                    
                    // minus.childNodes[1].childNodes[1].style.display = 'none';



                    
                    console.log(minus.childNodes[1].childNodes[1]);
                    console.log(document.querySelector('.plus__content').childNodes[1].childNodes[1].toggle('path'));
                    let card = document.createElement('div');
                    
                    card.classList.add('plus__content', 'plus-minus');
                    
                    card.innerHTML = `
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.00033 6.83366C0.540088 6.83366 0.166992 6.46056 0.166992 6.00033C0.166992 5.54009 0.540088 5.16699 1.00033 5.16699H11.0003C11.4606 5.16699 11.8337 5.54009 11.8337 6.00033C11.8337 6.46056 11.4606 6.83366 11.0003 6.83366H1.00033Z" fill="white"></path>
                    </svg>`;
                    console.log(card);
                    
                    
                    // minus.appendChild(card)
                    // minus.classList.toggle('plus-minus');
                    
   
                    // <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    
                    //                 <path d="M1.00033 6.83366C0.540088 6.83366 0.166992 6.46056 0.166992 6.00033C0.166992 5.54009 0.540088 5.16699 1.00033 5.16699H11.0003C11.4606 5.16699 11.8337 5.54009 11.8337 6.00033C11.8337 6.46056 11.4606 6.83366 11.0003 6.83366H1.00033Z" fill="white"></path>
                    //             </svg>

                // this.classList.toggle('active-style');
                // this.nextElementSibling.classList.toggle('active-content');
        
                // if(this.classList.contains('active-style')) {
                //     this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
                // } else {
                //     this.nextElementSibling.style.maxHeight = '0px'
                // }
                
            })
        });

    }

    init() {
        this.btnTrigger();
    }


}



    

    


