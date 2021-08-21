document.addEventListener('DOMContentLoaded', function() {
    const BTN = document.querySelector('.menu__btn');
    const menuBtn = document.querySelector('.menu__btn-container');
    let container, container1, container2, container3, menuHome, isOpen, scripter;
    container = document.querySelector('.menu__btn-container');
    container1 = document.querySelector('.menu__btn-container-1');
    container2 = document.querySelector('.menu__btn-container-2');
    container3 = document.querySelector('.menu__btn-container-3');
    menuHome = document.querySelector('.menu__buttons');
    isOpen = false;
    scripter = document.querySelector('.scripter');
    console.log(scripter);

    BTN.addEventListener('click', function() {
        if(isOpen === false) {
            container.classList.add('centerEl');
            container1.classList.add('rotateAddEl');
            container2.classList.add('hideEl');
            container3.classList.add('rotateMinusEl');
            isOpen = true;
        } else {
            container.classList.remove('centerEl');
            container1.classList.remove('rotateAddEl');
            container2.classList.remove('hideEl');
            container3.classList.remove('rotateMinusEl');
            isOpen = false;
        }
    });

    const targets = document.querySelectorAll('[dataTarget]');
    const close = document.querySelectorAll('#close');

    targets.forEach(el =>{
        el.addEventListener('click', function() {
            const targetElementId = el.getAttribute('dataTarget');
            const thisElement = document.querySelector(targetElementId);
            if(!thisElement.classList.contains('active')){
                thisElement.classList.add('active');
                thisElement.classList.remove('moveRight');
                thisElement.classList.add('moveLeft');
            } else {
                thisElement.classList.remove('active');
                thisElement.classList.remove('moveLeft');
                thisElement.classList.add('moveRight');
            }
        });
    });

    close.forEach(el => {
        el.addEventListener('click', function() {
            const parent = el.parentElement;
            parent.classList.remove('active');
            parent.classList.remove('moveLeft');
            parent.classList.add('moveRight');
        });
    });

    const pages = document.querySelectorAll('[pageTarget]');
    pages.forEach(el => {
        el.addEventListener('click', function() {
            window.scrollTo(0, 0);
            const pageTarget = el.getAttribute('pageTarget');
            const oldPage = document.querySelector('.activePageWin');
            const newPage = document.querySelector(pageTarget);

            oldPage.classList.remove('showShort');
            oldPage.classList.add('hideShort');
            oldPage.classList.remove('activePageWin');
            oldPage.classList.add('dnone');
            newPage.classList.remove('dnone');
            newPage.classList.remove('hideShort');
            newPage.classList.add('showShort');
            newPage.classList.add('activePageWin');

            container.classList.remove('centerEl');
            container1.classList.remove('rotateAddEl');
            container2.classList.remove('hideEl');
            container3.classList.remove('rotateMinusEl');
            isOpen = false;


            const menu = document.querySelector('#generalMenu');
            menu.classList.remove('active');
            menu.classList.remove('moveLeft');
            menu.classList.add('moveRight');
        });
    });

});


