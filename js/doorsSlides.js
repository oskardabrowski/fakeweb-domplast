document.addEventListener('DOMContentLoaded', function() {
    const doorsBtn = document.querySelectorAll('[partTarget]');
    const doorsParts = document.querySelectorAll('.doorsPart');
    doorsBtn.forEach(el => {
        el.addEventListener('click', async function() {
            doorsBtn.forEach(el => {
                el.classList.remove('elementActive');
            });
            const target = el.getAttribute('partTarget');
            const targetElement = document.querySelector(target);
            const lastElement = document.querySelector('.activePage');
            if(lastElement) {
                await lastElement.classList.remove('showShort');
                await lastElement.classList.add('hideShort');
                await lastElement.classList.add('dnone');
                await lastElement.classList.remove('activePage');
                await targetElement.classList.remove('dnone');
                await targetElement.classList.remove('hideShort');
                await targetElement.classList.add('showShort');
                await targetElement.classList.add('activePage');
            }
            el.classList.add('elementActive');
        })
    })
})