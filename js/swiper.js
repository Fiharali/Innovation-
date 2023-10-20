const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: false,
  },
  ///////////////////////////////////////
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  ///////////////////////////////////////
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },


 


});

