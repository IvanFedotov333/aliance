// Burger-menu

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

// Swiper-slider

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

// Modal-windows

let currentModal; // текущее модальное окно
let modalDialog; // диалоговое окно
let alertModal = document.querySelector("#alert-modal"); // окно предупреждения

const modalButtons = document.querySelectorAll("[data-toggle=modal]");
// все кнопки-переключатели модальных окон
modalButtons.forEach((button) => {
  // прослушивание клика по переключателю
  button.addEventListener("click", (event) => {
    event.preventDefault();
    // определение текущего окна
    currentModal = document.querySelector(button.dataset.target);
    // открытие текущего окна
    currentModal.classList.toggle("is-open");
    // назначение нового диалогового окна
    modalDialog = currentModal.querySelector(".modal-dialog");
    // прослушивание события клика внутри диалогового окна и в пустой области
    currentModal.addEventListener("click", (event) => {
      // если клик в пустую область
      if (!event.composedPath().includes(modalDialog)) {
        // закрываем окно
        currentModal.classList.remove("is-open");
      }
    });
  });
});
// прослушивание события клика по кнопке
document.addEventListener("keydown", (event) => {
  // если кнопка = Esc и текущее окно открыто
  if (event.key == "Escape" && currentModal.classList.contains("is-open")) {
    // закрываем это окно
    currentModal.classList.toggle("is-open");
  }
});

// const modal = document.querySelector(".modal");
// const modalDialog = document.querySelector(".modal-dialog");

// document.addEventListener("click", (event) => {
//   const toggleButton = event.target.closest('[data-toggle="modal"]');
//   if (toggleButton) {
//     event.preventDefault();
//     const parentModal = toggleButton.closest(".modal");
//     if (parentModal) {
//       parentModal.classList.toggle("is-open");
//     } else {
//       const consultModal = document.getElementById("modal-consultation");
//       if (consultModal) {
//         consultModal.classList.add("is-open");
//       }
//     }
//     return;
//   }
//   const openModals = document.querySelectorAll(".modal.is-open");
//   openModals.forEach((openModal) => {
//     const dialog = openModal.querySelector(".modal-dialog");
//     if (dialog && !event.composedPath().includes(dialog)) {
//       event.preventDefault();
//       openModal.classList.remove("is-open");
//     }
//   });
// });
// document.addEventListener("keydown", (event) => {
//   if (event.key === "Escape") {
//     const openModals = document.querySelectorAll(".modal.is-open");
//     openModals.forEach((modal) => modal.classList.remove("is-open"));
//   }
// });
// document
//   .getElementById("modal-success-btn")
//   ?.addEventListener("click", function () {
//     document.getElementById("modal-success").classList.remove("is-open");
//     window.location.href = "./";
//   });

// Feedback-form

const forms = document.querySelectorAll("form"); // собираем все формы
forms.forEach((form) => {
  const phoneInput = form.querySelector('[name="userphone"]');
  if (phoneInput) {
    phoneInput.addEventListener("focus", function initMask() {
      Inputmask("+7 (999) 999-99-99", {
        showMaskOnHover: false,
        clearMaskOnLostFocus: false,
      }).mask(this);
      this.removeEventListener("focus", initMask);
    });
  }
  const validation = new JustValidate(form, {
    errorFieldCssClass: "is-invalid",
  });
  validation
    .addField("[name=username]", [
      {
        rule: "required",
        errorMessage: "Укажите имя",
      },
      {
        rule: "maxLength",
        value: 50,
        errorMessage: "Максимально 50 символов",
      },
    ])
    .addField("[name=userphone]", [
      {
        rule: "required",
        errorMessage: "Укажите номер телефона",
      },
    ])
    .onSuccess((event) => {
      const thisForm = event.target; // наша форма
      const formData = new FormData(thisForm); // данные из нашей формы
      const ajaxSend = (formData) => {
        fetch(thisForm.getAttribute("action"), {
          method: thisForm.getAttribute("method"),
          body: formData,
        }).then((response) => {
          if (response.ok) {
            thisForm.reset();
            if (currentModal && currentModal.classList.contains("is-open")) {
              currentModal.classList.remove("is-open");
            }
            alertModal.classList.add("is-open");
            currentModal = alertModal;
            modalDialog = currentModal.querySelector(".modal-dialog");
            // прослушивание события клика внутри диалогового окна и в пустой области
            currentModal.addEventListener(
              "click",
              function overlayHandler(event) {
                // если клик в пустую область
                if (!event.composedPath().includes(modalDialog)) {
                  // закрываем окно
                  currentModal.classList.remove("is-open");
                  currentModal.removeEventListener("click", overlayHandler);
                }
              },
            );
          } else {
            alert("Ошибка. Текст ошибки: " + response.statusText);
          }
        });
      };
      ajaxSend(formData);
    });
});
document.getElementById("modal-success-btn")?.addEventListener("click", function () {
  document.getElementById("alert-modal").classList.remove("is-open");
  window.location.href = "./";
});