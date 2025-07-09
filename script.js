const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
});

function setHeroHeight() {
    const navBar = document.getElementById('navbar');
    const hero = document.getElementById('hero');
    const navHeight = navBar.offsetHeight;
    hero.style.height = `calc(100vh - ${navHeight}px)`;
}

window.addEventListener('load', setHeroHeight);
window.addEventListener('resize', setHeroHeight);