const navbar = document.querySelector(".navbar");
const logoLight = document.querySelector(".logo-light");
const logo = document.querySelector(".logo");
const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");
const isFrontPage = document.body.classList.contains("front-page");

const preventTouchScroll = (event) => {
  event.preventDefault();
};

const lightModeOn = (event) => {
  navbar.classList.add("navbar-light");
};
const lightModeOff = (event) => {
  navbar.classList.remove("navbar-light");
};

const changeNavHeight = (height) => {
  navbar.style.height = height;
};

const openMenu = (event) => {
  //фукнция открывания меню
  menu.classList.add("is-open"); //вешает класс "is-open"
  mMenuToggle.classList.add("close-menu");
  document.body.style.overflow = "hidden"; //прокрутка сайта под открытым меню запрещена
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
  document.addEventListener("touchmove", preventTouchScroll, {
    passive: false,
  });
  lightModeOn();
};
const closeMenu = (event) => {
  //фукнция закрывания меню
  menu.classList.remove("is-open"); //удаляет класс "is-open"
  mMenuToggle.classList.remove("close-menu");
  document.body.style.overflow = "";
  document.body.style.position = "";
  document.body.style.width = ""; //прокрутка сайта под открытым меню
  // доступна

  document.removeEventListener("touchmove", preventTouchScroll, {
    passive: false,
  });
  changeNavHeight("5.875rem");
  if (isFrontPage && window.scrollY <= 1) {
    lightModeOff();
  } else if (!isFrontPage) {
  }
};

window.addEventListener("scroll", () => {
  if (!menu.classList.contains("is-open")) {
    window.scrollY > 1
      ? changeNavHeight("4.5rem")
      : changeNavHeight("5.875rem");
  }
  if (isFrontPage && !menu.classList.contains("is-open")) {
    window.scrollY > 1 ? lightModeOn() : lightModeOff();
  }
});
mMenuToggle.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.contains("is-open") ? closeMenu() : openMenu();
});

// Swiper
const swiperSteps = new Swiper(".steps-slider", {
  speed: 400,
  slidesPerView: 1,
  navigation: {
    nextEl: ".steps-button-next",
    prevEl: ".steps-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

const swiper = new Swiper(".features-slider", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
  speed: 400,
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
  },
});

const swiperBlog = new Swiper(".blog-slider", {
  direction: "horizontal",
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".blog-button-next",
    prevEl: ".blog-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
  },
});

const modal = document.querySelector(".modal");
const modalDialog = document.querySelector(".modal-dialog");

document.addEventListener("click", (event) => {
  if (
    event.target.dataset.toggle == "modal" ||
    event.target.parentNode.dataset.toggle == "modal" ||
    (!event.composedPath().includes(modalDialog) &&
      modal.classList.contains("is-open"))
  ) {
    event.preventDefault();
    modal.classList.toggle("is-open");
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    modal.classList.remove("is-open");
  }
});
