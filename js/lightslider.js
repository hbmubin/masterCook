var swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true, // Enable continuous loop mode

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Autoplay
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
