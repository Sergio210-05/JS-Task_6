
const menuLinkArray = Array.from(document.querySelectorAll('a.menu__link'));
menuLinkArray.forEach((menu) => {
  const subMenu = menu.closest('.menu__item').querySelector('.menu_sub');
  if (subMenu !== null) {
    console.log(subMenu.onclick);
    menu.onclick = () => {
      const allSubMenu = Array.from(document.querySelectorAll('.menu_sub'));
      console.log(allSubMenu);
      allSubMenu.forEach((sMenu) => sMenu.className = 'menu menu_sub');
      subMenu.classList.add('menu_active');
      return false;
    }
  }
})