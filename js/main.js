const navbar = document.querySelector(".navbar");
const logoLight = document.querySelector(".logo-light");
const logo = document.querySelector(".logo");
const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");

const lightModeOn = (event) => {
  navbar.classList.add("navbar-light");
  logo.style.display = "block";
  logoLight.style.display = "none";
};
const lightModeOff = (event) => {
  navbar.classList.remove("navbar-light");
  logo.style.display = "none";
  logoLight.style.display = "block";
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

// Swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
  speed: 400,
  autoHeight: true,
  breakpoints: {
    "@0.32": {
      slidesPerView: 1,
    },
    "@0.576": {
      slidesPerView: 2,
      centeredSlides: true,
    },
    "@0.768": {
      slidesPerView: 3,
    },
    "@1.024": {
      slidesPerView: 4,
    },
    "@1.44": {
      slidesPerView: 5,
    },
  },
});
