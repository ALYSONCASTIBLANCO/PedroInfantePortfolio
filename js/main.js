//This function will render all header functionalities once the
//header is rendered.
function initHeader() {
//Props for menu
let propMenu={
    burger_menu: document.getElementById('burger-menu'),
    slide_menu: document.getElementById('slide-menu'),
    menu_active: false,
    elem_menu: document.querySelectorAll('#slide-menu .main-menu a')
}

//Methods for menu
  if (!propMenu.burger_menu || !propMenu.slide_menu) return;

  let metMenu = {
    start: function () {
      propMenu.burger_menu.addEventListener('click', metMenu.toggleMenu);
      propMenu.slide_menu.addEventListener('click', metMenu.stopClick);
      document.addEventListener('click', metMenu.removeMenu);
    },

    toggleMenu: function (e) {
      e.stopPropagation(); // Actions won't scale inmediately to the
      //document.
      propMenu.slide_menu.classList.toggle('active');
    },

    stopClick: function (e) {
      e.stopPropagation(); // Clicks inside the menu don't close it.
    },

    removeMenu: function () {
      propMenu.slide_menu.classList.remove('active');
    }
  };
metMenu.start();
}
