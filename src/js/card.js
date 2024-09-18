const elementos = document.querySelectorAll('.container-card-img-first');
let timeSlidesCarouselCard = 0;

const nextSlides = () => {

    for (let i = 0; i < elementos.length; i++) {
        const card = elementos[i];
        const slides = card.getElementsByTagName('img');
        const indexCarousel = Array.from(slides).findIndex(el => el.classList.contains('active'));

        slides[indexCarousel].classList.remove('active');
        const nextIndex = (indexCarousel + 1) % slides.length;
        slides[nextIndex].classList.add('active');
    }

};

setInterval(() => {
    if (timeSlidesCarouselCard === 2) {
        nextSlides();
        timeSlidesCarouselCard = 0;
    }
    timeSlidesCarouselCard++;

}, 1000);