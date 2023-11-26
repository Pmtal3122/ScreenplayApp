window.addEventListener('scroll', reveal);

function reveal() {
    let images = document.querySelectorAll('.imgBut');

    for (let i = 0; i < images.length; i++) {
        let windowHeight = window.innerHeight;
        let imageTop = images[i].getBoundingClientRect().top;
        let imagePoint = 150;

        if (imageTop < windowHeight - imagePoint) images[i].classList.add('scrollActive');
        else images[i].classList.remove('scrollActive');
    }
}