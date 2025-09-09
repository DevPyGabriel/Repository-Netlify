const menu = document.querySelector('.nav-item');
const button = document.querySelector('.menu-button-open');

button.addEventListener('click', () => {
    menu.classList.toggle('visible');
});

menu.addEventListener('transitionend', () => {
    if (!menu.classList.contains('visible')) {
        menu.style.visibility = 'hidden';
    }
});

button.addEventListener('click', () => {
    if (menu.classList.contains('visible')) {
        menu.style.visibility = 'visible';
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menu.style.visibility = 'visible';
        menu.classList.remove('visible');
    } else {
        menu.style.visibility = menu.classList.contains('visible') ? 'visible' : 'hidden';
    }
});