const myObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        entry.isIntersecting ? entry.target.classList.add('animate') : entry.target.classList.remove('animate');
    });
});

const elements = document.querySelectorAll('section');

elements.forEach((element) => myObserver.observe(element));