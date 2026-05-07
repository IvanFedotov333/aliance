const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo-svg use");
const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");

const lightModeOn = (event) => {
  navbar.classList.add("navbar-light");
  logo.href.baseVal = "img/sprite.svg#logo";
};
const lightModeOff = (event) => {
  navbar.classList.remove("navbar-light");
  logo.href.baseVal = "img/sprite.svg#logo-light";
};

const openMenu = (event) => {
  //фукнция открывания меню
  menu.classList.add("is-open"); //вешает класс "is-open"
  mMenuToggle.classList.add("close-menu");
  document.body.style.overflow = "hidden"; //прокрутка сайта под открытым меню запрещена
  lightModeOn();
};
const closeMenu = (event) => {
  //фукнция закрывания меню
  menu.classList.remove("is-open"); //удаляет класс "is-open"
  mMenuToggle.classList.remove("close-menu");
  document.body.style.overflow = ""; //прокрутка сайта под открытым меню доступна
  lightModeOff();
};

window.addEventListener("scroll", () => {
  window.scrollY > 1 ? lightModeOn() : lightModeOff();
});
mMenuToggle.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.contains("is-open") ? closeMenu() : openMenu();
});
