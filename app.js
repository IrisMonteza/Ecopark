import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';

// document.getElementById('app').innerHTML = `
// <div>
//   <button id="stop">stop</button>
//   <button id="start">start</button>
//   <button id="destroy">destroy</button>
// </div>
// <div class="swiper-container">
//     <!-- Additional required wrapper -->
//     <div class="swiper-wrapper">
//         <!-- Slides -->
//         <div class="swiper-slide" style="background-image:url(https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg)"></div>
//         <div class="swiper-slide" style="background-image:url(https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_960_720.jpg)"></div>
//         <div class="swiper-slide" style="background-image:url(https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg)"></div>
//         <div class="swiper-slide" style="background-image:url(https://cdn.pixabay.com/photo/2019/07/14/10/48/mosel-4336787_960_720.jpg)"></div>
//         <div class="swiper-slide" style="background-image:url(https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg)"></div>
//     </div>
//     <!-- If we need pagination -->
//     <div class="swiper-pagination"></div>

//     <!-- If we need navigation buttons -->
//     <div class="swiper-button-prev"></div>
//     <div class="swiper-button-next"></div>

//     <!-- If we need scrollbar -->
//     <!-- <div class="swiper-scrollbar"></div> -->
// </div>
// `;

const mySwiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// const startBtn = document.getElementById('start');
// startBtn.addEventListener('click', () => {
//   mySwiper.autoplay.start();
// });

// const stopBtn = document.getElementById('stop');
// stopBtn.addEventListener('click', () => {
//   mySwiper.autoplay.stop();
// });

// const destroyBtn = document.getElementById('destroy');
// destroyBtn.addEventListener('click', () => {
//   mySwiper.destroy();
// });
