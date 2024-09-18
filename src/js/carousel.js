const carouselCard = document.getElementById('introductionCarouselCard');
const slidesCard = carouselCard.getElementsByClassName('card');

const carouselSelect = document.getElementById('introductionCarouselSelect');
const slidesSelect = carouselSelect.getElementsByTagName('figure');

const carouselBackground = document.getElementById('introductionBackground');
const slidesBackground = carouselBackground.getElementsByTagName('div');

const introductionControlsPause = document.querySelectorAll('.controlsPause');

let indexCarousel = 0;
let timeSlidesCarousel = 1;
let playOfPauseSlidesCarousel = 0;

const nextSlidesIntroduction = () => {
    slidesCard[indexCarousel].classList.remove('active');
    slidesSelect[indexCarousel].classList.remove('active');
    slidesBackground[indexCarousel].classList.remove('active');
    indexCarousel = (indexCarousel + 1) % 4;
    slidesCard[indexCarousel].classList.add('active');
    slidesSelect[indexCarousel].classList.add('active');
    slidesBackground[indexCarousel].classList.add('active');

};

setInterval(() => {
    if (playOfPauseSlidesCarousel === 0) {
        timeSlidesCarousel++;
        if (timeSlidesCarousel >= 30) {
            timeSlidesCarousel = 0;
            nextSlidesIntroduction();
        }
    }

}, 1000);

const slidesCarousel = (targetIndex) => {
    if (indexCarousel !== targetIndex) {
        slidesCard[indexCarousel].classList.remove('active');
        slidesSelect[indexCarousel].classList.remove('active');
        slidesBackground[indexCarousel].classList.remove('active');
        indexCarousel = targetIndex;
        timeSlidesCarousel = 0;
        slidesCard[indexCarousel].classList.add('active');
        slidesSelect[indexCarousel].classList.add('active');
        slidesBackground[indexCarousel].classList.add('active');

        if (playOfPauseSlidesCarousel == 1) slidesSelect[indexCarousel].style.setProperty('--animation-play-state', 'paused');
    }

}

const changeColor = (targetIndex) => {
    const color = {
        1: '#03A9F4',
        2: '#4CAF50',
        3: '#c98b4d',
        4: '#FF9800',
        5: '#FF5722'
    };

    document.documentElement.style.setProperty('--tertiary-color', color[targetIndex]);
}

introductionControlsPause.forEach((element) => {
    element.addEventListener('click', (event) => {
        playOfPauseSlidesCarousel = (playOfPauseSlidesCarousel + 1) % 2;

        if (playOfPauseSlidesCarousel == 1) {
            introductionControlsPause.forEach((el) => {
                el.classList.remove('bx-pause-circle');
                el.classList.add('bx-play-circle');
                el.style.color = getComputedStyle(document.getElementById('colorLine')).backgroundColor;
            });
            slidesSelect[indexCarousel].style.setProperty('--animation-play-state', 'paused');
        } else {
            introductionControlsPause.forEach((el) => {
                el.classList.remove('bx-play-circle');
                el.classList.add('bx-pause-circle');
                el.style.color = '#ffffff';
            });
            slidesSelect[indexCarousel].style.setProperty('--animation-play-state', 'running');
        }
    });

    element.addEventListener('mouseover', (event) => {
        element.style.color = getComputedStyle(document.getElementById('colorLine')).backgroundColor;;
    });

    element.addEventListener('mouseout', (event) => {
        playOfPauseSlidesCarousel == 1 ? element.style.color = getComputedStyle(document.getElementById('colorLine')).backgroundColor : element.style.color = '#ffffff';
    });

});