function tabs(tabsSelector, tabsContentSelector, tabsParentSelextor, activeClass) {
// function tabs() {
// Tabs

    // const tabs = document.querySelectorAll('.tabheader__item'),
    //         tabsParent = document.querySelector('.tabheader__items'),
    //         // tabsActive = document.querySelectorAll('.tabheader__item_active'),
    //         tabsContent = document.querySelectorAll('.tabcontent');
    const tabs = document.querySelectorAll(tabsSelector),
            tabsParent = document.querySelector(tabsParentSelextor),
            tabsContent = document.querySelectorAll(tabsContentSelector);



    function hideTabsContent() {
        tabsContent.forEach(tab => {
            // tab.style.display = 'none';
            tab.classList.add('hide');
            tab.classList.remove('show');
        });

        tabs.forEach(tab => {
            // tab.classList.remove('tabheader__item_active');
            tab.classList.remove(activeClass);
        });
    }


    function showTabContent(i = 0) {
        // tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        // tabs[i].classList.add('tabheader__item_active');
        tabs[i].classList.add(activeClass);
    }
    hideTabsContent();
    showTabContent();


    tabsParent.addEventListener('click', event => {
        const target = event.target;

        // if(target && target.classList.contains('tabheader__item')) {
        if(target && target.classList.contains(tabsSelector.slice(1))) {
            console.log(tabsSelector);
            
            tabs.forEach((item , i) => {
                if(target == item) {
                    hideTabsContent();
                    showTabContent(i);
                }
                // target.classList.add('tabheader__item_active');
            });
        }
    });

}

// module.exports = tabs;
export default tabs;