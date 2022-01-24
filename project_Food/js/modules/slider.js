function slider({container, slide, nextArrow, preArrow, totalCounter, currentCount, wrapper, field}) {
    
            // SLIDER
          
            const slides = document.querySelectorAll(slide),
                slider = document.querySelector(container),
                prev = document.querySelector(preArrow),
                next = document.querySelector(nextArrow),
                current = document.querySelector(currentCount),
                total = document.querySelector(totalCounter),
                slidesWrapper = document.querySelector(wrapper),
                slidesItem = document.querySelector(field),
                width = window.getComputedStyle(slidesWrapper).width;
                // total = document.querySelector('#total')
            // const slides = document.querySelectorAll('.offer__slide'),
            //     slider = document.querySelector('.offer__slider'),
            //     prev = document.querySelector('.offer__slider-prev'),
            //     next = document.querySelector('.offer__slider-next'),
            //     current = document.querySelector('#current'),
            //     total = document.querySelector('#total'),
            //     slidesWrapper = document.querySelector('.offer__slider-wrapper'),
            //     slidesItem = document.querySelector('.offer__slider-item'),
            //     width = window.getComputedStyle(slidesWrapper).width;
            //     // total = document.querySelector('#total')

            let slideIndex = 1;
            let offset = 0;

            if(slides.length < 10) {
                total.textContent = `0${slides.length}`;
                current.textContent = `0${slideIndex}`;
            } else {
                total.textContent = slides.length;
                current.textContent = slideIndex;
            }

            slidesItem.style.width = 100 * slides.length + '%' ;
            // console.log(slidesItem.style.width = width);
            // console.log(slidesItem.style.width = 100 * slides.length + 'px');
            slidesItem.style.display = 'flex';
            slidesItem.style.transition = '0.5s all';

            slidesWrapper.style.overflow = "hidden";

            slides.forEach(slide => {
                slide.style.width = width;
            });

            slider.style.position ='relative';

            const dots = document.createElement('ol'),
                dotsArr = [];

            dots.classList.add('carousel-indicators');
            dots.style.cssText = `
            
            `;
            slider.append(dots);

            for (let i = 0; i < slides.length; i++) {
                const dot = document.createElement('li');
                dot.classList.add('dot');
                dot.setAttribute('data-slide-to', i+1);
                if(i == 0 ) {
                    dot.style.opacity = 1;
                }
                dots.append(dot);

                dotsArr.push(dot);
                
            }
            function deletePx(src) {
                // +width.replace(/\D/g, '')
                return +src.replace(/\D/g, '');
            }

            next.addEventListener('click', () => {
                if(offset == deletePx(width) * (slides.length - 1)) {
                    offset = 0;
                } else {
                   offset += deletePx(width);
                }

                slidesItem.style.transform = `translateX(-${offset}px)`;

                if (slideIndex == slides.length) {
                    slideIndex = 1;
                } else {
                    slideIndex++;
                }

                if(slides.length < 10 ) {
                    current.textContent = `0${slideIndex}`;
                } else {
                    current.textContent = slideIndex;
                }

                dotsArr.forEach(activeDot => activeDot.style.opacity = '.5');
                dotsArr[slideIndex - 1].style.opacity = 1;


            });
            prev.addEventListener('click', () => {
                if(offset == 0 ) {
                    offset = deletePx(width) * (slides.length - 1);
                } else {
                    offset -= deletePx(width);
                }
                slidesItem.style.transform = `translateX(-${offset}px)`;

                if (slideIndex == 1) {
                    slideIndex = slides.length;
                } else {
                    slideIndex--
                }

                if(slides.length < 10 ) {
                    current.textContent = `0${slideIndex}`;
                } else {
                    current.textContent = slideIndex;
                }

                dotsArr.forEach(activeDot => activeDot.style.opacity = '.5')
                dotsArr[slideIndex - 1].style.opacity = 1;
            });

            dotsArr.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    const slideTo = e.target.getAttribute('data-slide-to')
                    
                    slideIndex = slideTo;
                    offset = deletePx(width) * (slideTo - 1);
                    
                    slidesItem.style.transform = `translateX(-${offset}px)`;

                    if(slides.length < 10 ) {
                        current.textContent = `0${slideIndex}`;
                    } else {
                        current.textContent = slideIndex;
                    }
    

                    dotsArr.forEach(activeDot => activeDot.style.opacity = '.5')
                    dotsArr[slideIndex - 1].style.opacity = 1;

                })
            })


            



            ////////////////
            ////////////////

            // showSlides(slideIndex);

            // if(slides.length < 10) {
            //     total.textContent =  `0${slides.length}`
            // } else {
            //     total.textContent =  `${slides.length}`
            // }


            // function showSlides(n) {
            //     if(n > slides.length) {
            //         slideIndex = 1
            //     }

            //     if(n < 1) {
            //         slideIndex = slides.length;
            //     }

            //     slides.forEach(item => item.style.display = 'none');
            //     slides[slideIndex - 1].style.display = 'block';

            //     if(slides.length < 10) {
            //         current.textContent =  `0${slideIndex}`;
            //     } else {
            //         current.textContent =  slideIndex;
            //     }
            // }
            // function plusSlides(n) {
            //     showSlides(slideIndex += n);
            // }
            // prev.addEventListener('click', () => {
            //     plusSlides(-1)
            // })
            // next.addEventListener('click', () => {
            //     plusSlides(1)
            // })


            // DOTS SLIDER
}

// module.exports = slider;
export default slider;