var swiper = new Swiper(".swiper-container-product", {
  slidesPerView: 5, // Default value
  spaceBetween: 0,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    // when window width is >= 320px
    367: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    400: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 5,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 6,
    },
    // you can add more breakpoints if needed
  },
});
