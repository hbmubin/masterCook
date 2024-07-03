var swiper = new Swiper(".swiper-container-gallery", {
  slidesPerView: 5,
  spaceBetween: 0,
  loop: true,

  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  mousewheel: true,
  keyboard: true,
});
//       // When window width is >= 1024px
//    1920: {
//      slidesPerView: 6,

//    },
//    // When window width is >= 768px
//    768: {
//      slidesPerView: 3,

//    },

// 445: {
//      slidesPerView: 1,

//    },

//  },

//     // Other options...
// });
