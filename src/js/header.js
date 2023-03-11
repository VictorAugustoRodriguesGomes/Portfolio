var homeAfter = document.querySelector('home');
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var introduction = document.getElementById('introduction');
    header.classList.toggle('sticky', window.scrollY > 0);
    introduction.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

function efeitoMenu() {
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

const fieldLeft = document.getElementById('fieldLeft');
const slidesSelectedWithImageListFieldLeft = fieldLeft.getElementsByTagName('div');

const slidesWithImageList = document.getElementById('slidesWithImageList');
const slidesSelectedWithImageList = slidesWithImageList.getElementsByTagName('div');

const cardSlidesBar = document.getElementById('cardSlidesBar');
const slidesSelectedBar = cardSlidesBar.getElementsByTagName('div');

const fieldSlidesText = document.getElementById('fieldSlidesText');
const slidesSelectedText = fieldSlidesText.getElementsByTagName('div');

var index = 0;
let timeSlides = 1;
setInterval(function run() {
    if (timeSlides != 30) {

    } else {
        timeSlides = 0;
        slidesSelectedWithImageList[index].classList.remove('active');
        slidesSelectedBar[index].classList.remove('active');
        slidesSelectedWithImageListFieldLeft[index].classList.remove('active');
        slidesSelectedText[index].classList.remove('active');
        index = (index + 1) % 5;
        slidesSelectedWithImageList[index].classList.add('active');
        slidesSelectedBar[index].classList.add('active');
        slidesSelectedWithImageListFieldLeft[index].classList.add('active');
        slidesSelectedText[index].classList.add('active');
    }
    timeSlides++
}, 1000);

function intro0() {
    slidesSelectedWithImageList[index].classList.remove('active');
    slidesSelectedBar[index].classList.remove('active');
    slidesSelectedWithImageListFieldLeft[index].classList.remove('active');
    slidesSelectedText[index].classList.remove('active');
    index = 0;
    timeSlides = 0;
    slidesSelectedWithImageList[index].classList.add('active');
    slidesSelectedBar[index].classList.add('active');
    slidesSelectedWithImageListFieldLeft[index].classList.add('active');
    slidesSelectedText[index].classList.add('active');
}

function intro1() {
    slidesSelectedWithImageList[index].classList.remove('active');
    slidesSelectedBar[index].classList.remove('active');
    slidesSelectedWithImageListFieldLeft[index].classList.remove('active');
    slidesSelectedText[index].classList.remove('active');
    index = 1;
    timeSlides = 0;
    slidesSelectedWithImageList[index].classList.add('active');
    slidesSelectedBar[index].classList.add('active');
    slidesSelectedWithImageListFieldLeft[index].classList.add('active');
    slidesSelectedText[index].classList.add('active');
}

function intro2() {
    slidesSelectedWithImageList[index].classList.remove('active');
    slidesSelectedBar[index].classList.remove('active');
    slidesSelectedWithImageListFieldLeft[index].classList.remove('active');
    slidesSelectedText[index].classList.remove('active');
    index = 2;
    timeSlides = 0;
    slidesSelectedWithImageList[index].classList.add('active');
    slidesSelectedBar[index].classList.add('active');
    slidesSelectedWithImageListFieldLeft[index].classList.add('active');
    slidesSelectedText[index].classList.add('active');
}

function intro3() {
    slidesSelectedWithImageList[index].classList.remove('active');
    slidesSelectedBar[index].classList.remove('active');
    slidesSelectedWithImageListFieldLeft[index].classList.remove('active');
    slidesSelectedText[index].classList.remove('active');
    index = 3;
    timeSlides = 0;
    slidesSelectedWithImageList[index].classList.add('active');
    slidesSelectedBar[index].classList.add('active');
    slidesSelectedWithImageListFieldLeft[index].classList.add('active');
    slidesSelectedText[index].classList.add('active');
}

function intro4() {
    slidesSelectedWithImageList[index].classList.remove('active');
    slidesSelectedBar[index].classList.remove('active');
    slidesSelectedWithImageListFieldLeft[index].classList.remove('active');
    slidesSelectedText[index].classList.remove('active');
    index = 4;
    timeSlides = 0;
    slidesSelectedWithImageList[index].classList.add('active');
    slidesSelectedBar[index].classList.add('active');
    slidesSelectedWithImageListFieldLeft[index].classList.add('active');
    slidesSelectedText[index].classList.add('active');
}