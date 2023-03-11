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