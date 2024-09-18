let x = 0
let windowScroll = 0;
const background = document.getElementById('introductionBackground')
let initialWidth = background.offsetWidth;
let initialHeight = 100;

function adjustElementSize() {
    const scrollY = window.scrollY;
    initialHeight = background.offsetHeight;
    const newSize = initialWidth + scrollY * 0.2;
    background.style.width = `${newSize}px`;
    background.style.height = `${initialHeight}px`;
}

window.addEventListener('scroll', adjustElementSize);