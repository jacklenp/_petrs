import {closeModal, openModal} from './modal';
import {postData} from '../services/services'

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
                    postData('http://localhost:3000/requests', json)
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
                openModal('.modal', modalTimerId);

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
                    closeModal('.modal');
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
export default forms;