const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('#nav-links a');
const currentUrl = window.location.href;

toggle.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('menu-open');
    });
});

navLinks.forEach(link => {
    if (currentUrl.includes(link.href)) {
        link.classList.add('active');
    }
})

function setHeroHeight() {
    const navBar = document.getElementById('navbar');
    const hero = document.getElementById('hero');
    const navHeight = navBar.offsetHeight;
    hero.style.height = `calc(100vh - ${navHeight}px)`;
}

window.addEventListener('load', setHeroHeight);
window.addEventListener('resize', setHeroHeight);