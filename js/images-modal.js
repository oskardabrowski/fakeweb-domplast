document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.generalPage__portfolio-images-img');
    const modal = document.querySelector('.generalPage__portfolio-modal');
    const modalImg = document.querySelector('.generalPage__portfolio-modal__window-img');
    const close = document.querySelector('.generalPage__portfolio-modal__window-close');
    images.forEach(element => {
        element.addEventListener('click', function(e) {
            const elem = e.target;
            const clone = elem.cloneNode(true);
            modal.style.display = 'block';
            modalImg.appendChild(clone);
        });
    });
    close.addEventListener('click', function() {
        modalImg.innerHTML = '';
        modal.style.display = 'none';
    });
});