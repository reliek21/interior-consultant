const menu = document.getElementById('menu-open'),
    nav_mobile = document.getElementById('nav-mobile'),
    section = document.getElementById('section'),
    footer = document.getElementById('footer'),
    menu_close = document.getElementById('menu-close');

menu.addEventListener('click', () => {
    nav_mobile.style.display = 'flex';
    footer.style.display = 'none';
    section.style.display = 'none'
});

menu_close.addEventListener('click', () => {
    nav_mobile.style.display = 'none';
    section.style.display = 'flex';
    footer.style.display = 'block';
});