const menu = document.querySelector('.header-burger');
const links = document.querySelector('.menu-list') ;
const header = document.querySelector('.header');

function toggleMenu(){
  header.classList.toggle('burger-menu_active');
}

menu.addEventListener('click', (e) => {
  e.preventDefault();
  toggleMenu();
});

links.addEventListener('click', () => toggleMenu());