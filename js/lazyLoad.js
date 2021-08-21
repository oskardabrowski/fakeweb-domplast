document.addEventListener('DOMContentLoaded', function() {

    const css = `<style>
    .lazyAnimation {
        animation: lazyLoad 1.5s .5s linear normal forwards;
    }
    
    @keyframes lazyLoad {
        0% {
            opacity: 0;
        } 100% {
            opacity: 1;
        }
    }
    </style>`

    const head = document.querySelector('head');
    console.log(head);
    head.insertAdjacentHTML('beforeend',css);

    const lazyElements = document.querySelectorAll('.lazyload');
    console.log(lazyElements);
    lazyElements.forEach(el => {
        el.style.opacity = 0;
    });
    window.addEventListener('scroll', function() {
        lazyElements.forEach(el => {
            let scrolled = window.pageYOffset+window.screen.height-150;
            console.log(window.screen.height)
            if(scrolled > el.offsetTop && !el.classList.contains('lazyAnimation')) {
                el.classList.add('lazyAnimation');
            }
        });
    });
});
