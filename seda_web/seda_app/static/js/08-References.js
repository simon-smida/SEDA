var swiper2 = new Swiper(".swiper2", {
  // effect: 'fade',
  slidesPerView: 1,

  spaceBetween: 30,
  navigation: {
    nextEl: ".refs-right-button",
    prevEl: ".refs-left-button",
  },
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
});
// const ref_swiper = new Swiper(".swiper-references", {
//     // Optional parameters
//     // loop: true,
//     slidesPerView: 1,
//     // If we need pagination
//     pagination: {
//       // el: '.swiper-pagination',
//       el: ".custom-pagi",
//       clickable: true,
//     },

//     // Navigation arrows
//     navigation: {
//       nextEl: "#refs-nextButton",
//       prevEl: "#refs-prevButton",
//     },
//   });
