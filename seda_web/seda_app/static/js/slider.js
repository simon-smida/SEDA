const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  effect: "coverflow",
  // centeredSlides: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1, // Number of slides for small screens (e.g., mobile)
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2, // Number of slides for medium screens (e.g., tablets)
      spaceBetween: 30 
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3, // Number of slides for large screens (e.g., desktops)
      spaceBetween: 30
    },
  },

  // If we need pagination
  pagination: {
    // el: '.swiper-pagination',
    el: ".custom-pagination-1",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: "#nextButton",
    prevEl: "#prevButton",
  },
});
