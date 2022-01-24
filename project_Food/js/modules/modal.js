
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
export default modal;
export {closeModal};
export {openModal};