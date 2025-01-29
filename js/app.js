const burger = document.querySelector('.header__mobil-burger');
const navLinks = document.querySelector('.header__mobil-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

var swiper = new Swiper(".mySwiper-partners", {
  slidesPerView: 'auto', // Автоматическая ширина слайдов
  spaceBetween: 50, // Расстояние между слайдами
  speed: 1500, // Скорость прокрутки
  autoplay: {
    delay: 0, // Бесконечный автоплей
    disableOnInteraction: false, // Не останавливать при взаимодействии
  },
  loop: true, // Включить бесконечную прокрутку
  loopedSlides: null, // Автоматически обрабатывать слайды для бесконечности
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-popup')) {
    const targetPopup = document.querySelector(event.target.dataset.target);
    if (targetPopup) {
      targetPopup.style.display = 'block';
    }
  }
});
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('closePopup')) {   
    const popup = event.target.closest('.popup');
    if (popup) {
      popup.style.display = 'none'; 
    }
  }
});
document.querySelector('.phone').addEventListener('input', function (e) {
  const input = e.target;
  let value = input.value;
  const validChars = /^[\d+]*$/;
  if (!validChars.test(value)) {
      value = value.replace(/[^+\d]/g, '');
  }
  if (value.indexOf('+') > 0) {
      value = value.replace(/\++/g, '');
  }
  if (value.charAt(0) !== '+' && /\D/.test(value)) {
      value = value.replace(/\D/g, '');
  }
  input.value = value;
});

const phoneInputs = document.querySelectorAll(".phone");

phoneInputs.forEach((input) => {
    window.intlTelInput(input, {
  initialCountry: "uz",
  separateDialCode: true,
  loadUtilsOnInit: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.7.0/build/js/utils.js",
  strictMode: true,
  autoPlaceholder: "off",
  formatOnDisplay: true,
  hiddenInput: () => ({phone: "phone"}),
    });
})
var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  effect: "creative",
  loop: true,
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  autoplay: {
        delay: 5000,
         disableOnInteraction: false,
  },
  navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
  },
  parallax: true,
});

var swiper = new Swiper(".products-mySwiper", {
  slidesPerView: 'auto', 
  spaceBetween: 30, 
  freeMode: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});
function toggleContent() {
  const content = document.getElementById('content');
  const button = document.querySelector('.products-description__btn');
  
  if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
      setTimeout(() => {
          content.style.maxHeight = content.scrollHeight + "px";
      }, 10);
      button.textContent = "Свернуть";
  } else {
      content.style.maxHeight = "0";
      setTimeout(() => {
          content.style.display = "none";
      }, 0);
      button.textContent = "Развернуть";
  }
}
const sidebar = document.querySelector('.sticky-sidebar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    sidebar.classList.add('scrolled');
  } else {
    sidebar.classList.remove('scrolled');
  }
});