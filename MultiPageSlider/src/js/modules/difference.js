export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
        try {
            this.oldOfficer = document.querySelector(oldOfficer);
            this.newOfficer = document.querySelector(newOfficer);
            this.oldItems = this.oldOfficer.querySelectorAll(items);
            this.newItems = this.newOfficer.querySelectorAll(items);
           
            this.oldCounter = 0;
            this.newCounter = 0;
        } catch (e) {}

    }

    bindTrigers(cardOfice, cardNumb, cardItem) {
            cardOfice.querySelector('.plus').addEventListener('click', () => {
                if (cardNumb !== cardItem.length - 2) {
                    cardItem[cardNumb].style.display = 'flex';
                    cardNumb++;
                } else {
                    cardItem[cardNumb].style.display = 'flex';
                    cardItem[cardItem.length - 1].remove();
                }
            });
      


        // this.oldOfficer.querySelector('.plus').addEventListener('click', () => {
        //     if (this.oldCounter !== this.oldItems.length - 2) {
        //         this.oldItems[this.oldCounter].style.display = 'flex';
        //         this.oldCounter++;
        //     } else {
        //         this.oldItems[this.oldCounter].style.display = 'flex';
        //         this.oldItems[this.oldItems.length - 1].remove();
        //     }
        // });
        // this.newOfficer.querySelector('.plus').addEventListener('click', () => {
        //     if (this.newCounter !== this.newItems.length - 2) {
        //         this.newItems[this.newCounter].style.display = 'flex';
        //         this.newCounter++;
        //     } else {
        //         this.newItems[this.newCounter].style.display = 'flex';
        //         this.newItems[this.newItems.length - 1].remove();
        //     }
        // });
    }

    hideItems(cards) {
            cards.forEach((item, i, arr) => {
                if(i !== arr.length - 1 ) {
                    item.style.display = 'none';
                }
            });;
       

        // this.oldItems.forEach((item, i, arr) => {
        //     if(i !== arr.length - 1 ) {
        //         item.style.display = 'none';
        //     }
        // });;
        // this.newItems.forEach((item, i, arr) => {
        //     if(i !== arr.length - 1 ) {
        //         item.style.display = 'none';
        //     }
        // });;
    }

    init() {
        try {
            this.hideItems(this.oldItems);
            this.hideItems(this.newItems);
            
            this.bindTrigers(this.oldOfficer, this.oldCounter, this.oldItems);
            this.bindTrigers(this.newOfficer, this.newCounter, this.newItems);
        } catch (e) {
            
        }
    }

}