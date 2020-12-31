
const navbar1 = document.getElementById('navbar');


nav5.addEventListener('click', e => {
    if (navbar1.className === 'hamburger') {
        navbar1.className += ' responsive';
    } else {
        navbar1.className === 'hamburger';
    }
})