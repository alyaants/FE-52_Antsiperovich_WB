new Swiper(".swiper", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Настройка плавности переключения
  speed: 800,
  effect: 'slide',

  autoplay: {
    delay: 4000, // Задержка между сменой слайдов (5 секунд)
  },

  // fadeEffect: {
  //   crossFade: true // Плавное переключение слайдов
  // },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
