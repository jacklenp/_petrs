export default class PlayVideo {
    constructor(trigger, overlay) {
        this.btns = document.querySelectorAll(trigger);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    }

    bindTrigers() {  // подвязка тригеров к определеннім действиям
        this.btns.forEach((btn, num) => {
           try {
                const blockedElem = btn.closest('.module__video-item').nextElementSibling;

                if (num % 2 == 0) {
                    blockedElem.setAttribute('data-disabled', 'true')
                }
           } catch (e) {
               
           }

            btn.addEventListener('click', () => {
                if (!btn.closest('.module__video-item') || btn.closest('.module__video-item').getAttribute('data-disabled') !== "true") {
                    this.activeBtn = btn; // btn - та Noda  тот елемент в которую кликнул пользователь

                    // изза того что каждій раз this.createPlayer(path); создается плеер мі создадим условия
                    // проверим если уже есть блок iframe#frame
                    if (document.querySelector('iframe#frame')) {
                        this.overlay.style.display = 'flex';
                        if(this.path !== btn.getAttribute('data-url')) { // проверяем тыкнул ли пользователь в кнопку
                            this.path = btn.getAttribute('data-url'); // this.path создаем екземпляр класа
                            this.player.loadVideoById({ //загружаем видео по определенному идентификатору
                                videoId: this.path
                            });
                        }
                    } else {
                        this.path = btn.getAttribute('data-url');
                        this.createPlayer(this.path);

                    }
                }
            })
        })
    }

    bindCloseBtn() {
        this.close.addEventListener('click', ()=> {
            this.overlay.style.display = 'none';

            this.player.stopVideo();
            // this.player.clearVideo();
        })
    }

    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`,
            events: {
              'onStateChange': this.onPlayerStateChange
            }
            // events: { // это не нужно в данном проэкте
            //   'onReady': onPlayerReady,
            //   'onStateChange': onPlayerStateChange
            // }
        });

        // console.log(this.player);
        this.overlay.style.display = 'flex';
    }

    onPlayerStateChange(state) {
        try {
            const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling; //получаем елемент которій заблокирован
            // Итого:
            // blockedElem - получаем елемент которій заблокирован
            // this.activeBtn - та кнопка на которюю мы кликнули
            // .closest('.module__video-item') - получает первую Node по селектору который мы сюда передадим , выше по иерархии и если подходит тот елемент на котором это сработало то вернет сам елемент
            // .nextElementSibling - получаем следущего соседа / (елем справа)
            const playBtn = this.activeBtn.querySelector('svg').cloneNode(true); // cloneNode - (создание клона) копирует обертку(например svg), а якщо cloneNode(true) - то копіює + ще вкладеність
            if(state.data === 0 ) {  // https://developers.google.com/youtube/iframe_api_reference?hl=ru#Playback_status
                // 0 - воспроизведение видео завершено (по документации)
                if (blockedElem.querySelector('.play__circle').classList.contains('closed')) {
                    blockedElem.querySelector('.play__circle').classList.remove('closed');
                    blockedElem.querySelector('svg').remove();
                    blockedElem.querySelector('.play__circle').appendChild(playBtn);
                    blockedElem.querySelector('.play__text').textContent = 'play video';
                    blockedElem.querySelector('.play__text').classList.remove('attention');
                    blockedElem.style.opacity = 1;
                    blockedElem.style.filter = 'none';

                    blockedElem.setAttribute('data-disabled', 'false');
                }
            }
        } catch (e) {
            
        }
    
    }

    init () { // создаем новый метод. Назовем init()
        if( this.btns.length > 0) { // если мы ничего не передадим this.btns = document.querySelectorAll(trigger); то получим пустой массив []
            const tag = document.createElement('script');

            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
            this.bindTrigers();
            this.bindCloseBtn();
        }
    }
}