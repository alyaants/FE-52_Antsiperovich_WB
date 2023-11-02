new Swiper(".swiper", {

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  speed: 800,
  effect: 'slide',

  autoplay: {
    delay: 5000, 
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
