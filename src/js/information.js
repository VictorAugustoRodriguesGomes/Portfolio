const myObserverInformation = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            imgProfile.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
            imgProfile.classList.remove('animate');
        }
    });
});

const imgProfile = document.getElementById('imgProfile');
const textProfile = document.getElementById('textProfile');
myObserverInformation.observe(textProfile);