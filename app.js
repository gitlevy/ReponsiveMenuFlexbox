const logoMenu = document.querySelector('.logo_menu_img');
const contItems = document.querySelector('.cont_items');
const arrItems = document.querySelectorAll('.items');

logoMenu.addEventListener('click', () => {
    if(contItems.className === 'cont_items') {
        contItems.className += ' responsive';
        logoMenu.style.top = '10px';
        logoMenu.src = '/ressources/close.svg';
    } else {
        contItems.className = 'cont_items';
        logoMenu.style.top = '15px';
        logoMenu.src = '/ressources/menu.svg';
    }
})

arrItems.forEach(item => {
    item.addEventListener('click', () => {
        contItems.className = 'cont_items';
        logoMenu.src = '/ressources/menu.svg';
    })
})