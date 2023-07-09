
const menuLinkArray = Array.from(document.querySelectorAll('a.menu__link'));
let menuOpen = false;

menuLinkArray.forEach((menu) => {
  const subMenu = menu.closest('.menu__item').querySelector('.menu_sub');
  menu.open = false;
  if (subMenu !== null) {
    menu.onclick = () => {
      const allSubMenu = Array.from(document.querySelectorAll('.menu_sub'));
      allSubMenu.forEach((sMenu) => sMenu.className = 'menu menu_sub');
      if (menu.open) {
        menu.open = false;
        menuLinkArray.forEach((menu) => menu.open = false);
        subMenu.className = 'menu menu_sub';
        return false;
      } else {
        menuLinkArray.forEach((menu) => menu.open = false);
        menu.open = true;
        subMenu.classList.add('menu_active');
        return false;
      }

    }
  }
})