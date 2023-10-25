// const images = document.querySelectorAll('.container .promo-wrap .slider img');
// const slider = document.querySelector('.slider');
// // const pagination = document.querySelector('.pagination');

// let count = 0;
// let width;
// // const pagination = [];

// function init(){
//     console.log('reside');
//     width = document.querySelector('.container').offsetWidth;
//     slider.style.width = width*images.length + 'px';
//     images.forEach( item => {
//         item.style.width = width + 'px';
//         item.style.height = 'auto';
//     });
//     rollSlider();
// }

// window.addEventListener('resize', init);
// init();

// // const pagination = [];

// // function createPaginationDost(){
// //     const div = document.createElement('div');
// //     div.className = "pagination";
// //     button.appenChild(div);
// //     pagination.push(div)
// // }
// // function addPagination(){
// //     // slider.forEach(createPaginationDost);
// //     pagination[0].classList.add("active");
// //     console.log(pagination);
// // }
// // addPagination();

// document.querySelector('.slider-prev').addEventListener('click', function(){
//     count--;
//     if (count < 0) {
//         count = images.length - 1;
//     }
//     rollSlider();
// });

// document.querySelector('.slider-next').addEventListener('click', function(){
//     count++;
//     if (count >= images.length) {
//         count = 0;
//     }
//     rollSlider();
// });

// function rollSlider(){
//     slider.style.transform = 'translate(-'+ count * width + 'px)';
// }

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
  speed: 800, // Продолжительность анимации в миллисекундах
  effect: 'fade', // Эффект перехода (например, 'fade', 'slide', 'cube', и другие)
  fadeEffect: {
    crossFade: true // Плавное переключение слайдов
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
