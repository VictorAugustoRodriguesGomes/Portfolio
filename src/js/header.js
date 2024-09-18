let menuActive = 0;
let navBarIndex = 0;
let windowScrollHeader = 0;

const homeAfter = document.querySelector('home');

const menu = document.getElementById("menu");
const li = menu.getElementsByTagName('li');

const introduction = document.getElementById('introduction');
const information = document.getElementById('information');
const projects = document.getElementById('projects');
const formation = document.getElementById('formation');
const skills = document.getElementById('skills');
const contact = document.getElementById('contact');

let introductionCoordenadas = 0;
let informationCoordenadas = 0;
let projectsCoordenadas = 0;
let formationCoordenadas = 0;
let skillsCoordenadas = 0;
let contactCoordenadas = 0;

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    header.classList.toggle('sticky', window.scrollY > 0);
    header.classList.toggle('top', window.scrollY == 0);

    menuToggle.classList.remove('active', window.scrollY == 0);
    menu.classList.remove('active', window.scrollY == 0);

    introductionCoordenadas = introduction.getBoundingClientRect();
    informationCoordenadas = information.getBoundingClientRect();
    projectsCoordenadas = projects.getBoundingClientRect();
    formationCoordenadas = formation.getBoundingClientRect();
    skillsCoordenadas = skills.getBoundingClientRect();
    contactCoordenadas = contact.getBoundingClientRect();

    if (introductionCoordenadas.y <= 50) {
        li[navBarIndex].classList.remove('active');
        navBarIndex = 0;
        li[navBarIndex].classList.add('active');
    }

    if (informationCoordenadas.y <= 50) {
        li[navBarIndex].classList.remove('active');
        navBarIndex = 1;
        li[navBarIndex].classList.add('active');
    }

    if (projectsCoordenadas.y <= 50) {
        li[navBarIndex].classList.remove('active');
        navBarIndex = 2;
        li[navBarIndex].classList.add('active');
    }

    if (formationCoordenadas.y <= 50) {
        li[navBarIndex].classList.remove('active');
        navBarIndex = 3;
        li[navBarIndex].classList.add('active');
    }

    if (skillsCoordenadas.y <= 50) {
        li[navBarIndex].classList.remove('active');
        navBarIndex = 4;
        li[navBarIndex].classList.add('active');
    }

    if (contactCoordenadas.y <= 50) {
        li[navBarIndex].classList.remove('active');
        navBarIndex = 5;
        li[navBarIndex].classList.add('active');
    }

    window.scrollY > windowScrollHeader && menuActive != 1 ? header.classList.remove('up') : header.classList.add('up');
    windowScrollHeader = window.scrollY;
});

function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    menuActive = (menuActive + 1) % 2;
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

function efeitoMenu() {
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');

}