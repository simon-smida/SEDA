gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".tab-horizontal").forEach((tab) => {
  gsap.from(tab, {
    scrollTrigger: {
      trigger: tab,
      start: "top center",
      end: "bottom center",
      scrub: true,
      // markers: true,
    },
    opacity: 0,
    y: 50,
    duration: 2,
  });
});

// // Select the SVG path
// const path = document.querySelector(".water");

// // Calculate the length of the path
// const length = path.getTotalLength();

// // Set initial dash array and offset
// gsap.set(path, {
//   strokeDasharray: length,
//   strokeDashoffset: length,
// });

// // Animate the path drawing
// gsap.to(path, {
//   strokeDashoffset: 0,
//   scrollTrigger: {
//     trigger: ".water",
//     start: "top center",
//     end: "bottom center",
//     scrub: true,
//     // markers: true, // Optional: remove if unnecessary
//   },
//   duration: 3,
// });

// const path2 = document.querySelector(".africa-island");

// // Calculate the length of the path
// const length2 = path2.getTotalLength();

// // Set initial dash array and offset
// gsap.set(path2, {
//   strokeDasharray: length,
//   strokeDashoffset: length,
// });

// // Animate the path drawing
// gsap.to(path2, {
//   strokeDashoffset: 0,
//   scrollTrigger: {
//     trigger: ".africa-island",
//     start: "top center",
//     end: "bottom center",
//     scrub: true,
//     // markers: true, // Optional: remove if unnecessary
//   },
//   duration: 3,
// });
// Create a timeline for paths

const africa_continent = document.querySelector(".africa-continent-1");
const pathLength = africa_continent.getTotalLength();

const africa_island = document.querySelector(".africa-island-1");
const africa_island_len = africa_island.getTotalLength();

// Set initial styles for the path
gsap.set(africa_continent, {
  strokeDasharray: pathLength,
  strokeDashoffset: pathLength,
});

gsap.set(africa_island, {
  strokeDasharray: africa_island_len,
  strokeDashoffset: africa_island_len,
});

// Create the scroll-triggered animation
// gsap.to(africa_continent, {
//   strokeDashoffset: 0,
//   duration: 2,
//   scrollTrigger: {
//     trigger: africa_continent,
//     start: "top center",
//     toggleActions: "play none none none",
//     // end: "bottom center",
//     // scrub: true,
//     markers: true,
//     onUpdate: (self) => console.log("Scroll progress:", self.progress),
//   },
// });

const pathTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".africa-map-1",
    start: "top 80%",
    toggleActions: "play none none none",
    onLeaveBack: () => pathTimeline.restart(),
  },
});

// Animate africa first
pathTimeline.to(
  africa_continent,
  {
    strokeDashoffset: 0,
    duration: 2,
    transformOrigin: "center center", // Transform from the center
    ease: "powe1.inOut",
  },
  0
);

pathTimeline.to(
  africa_island,
  {
    strokeDashoffset: 0,
    duration: 1,
    transformOrigin: "center center", // Transform from the center
    ease: "powe1.inOut",
  },
  0
);

pathTimeline.from(
  ".africa-dot-1",
  {
    scale: 0,
    transformOrigin: "center center", // Transform from the center
    duration: 0.5,
    ease: "powe1.inOut",
  },
  1
);

// const water_glass = document.querySelector(".water-glass");
// const water_glass_len = water_glass.getTotalLength();

// // Set initial styles for the path
// gsap.set(water_glass, {
//   strokeDasharray: water_glass_len,
//   strokeDashoffset: water_glass_len,
// });

// pathTimeline.to(
//   water_glass,
//   {
//     strokeDashoffset: 0,
//     duration: 1,
//     ease: "powe1.inOut",
//   },
// );

// const water = document.querySelector(".water");
// const water_len = water.getTotalLength();

// // Set initial styles for the path
// gsap.set(water, {
//   strokeDasharray: water_len,
//   strokeDashoffset: water_len,
// });

// pathTimeline.to(
//   water,
//   {
//     strokeDashoffset: 0,
//     duration: 1,
//     ease: "powe1.inOut",
//   },
//   0
// );

// const water_drop = document.querySelector(".water-drop");
// const water_drop_len = water_drop.getTotalLength();
// const water_drop_dash = document.querySelector(".water-drop-dash");
// const water_drop_dash_len = water_drop_dash.getTotalLength();

// // Set initial styles for the path
// gsap.set(water_drop, {
//   strokeDasharray: water_drop_len,
//   strokeDashoffset: water_drop_len,
// });
// gsap.set(water_drop_dash, {
//     strokeDasharray: water_drop_dash_len,
//     strokeDashoffset: water_drop_dash_len,
//   });

// pathTimeline
//   .to(water_drop, {
//     strokeDashoffset: 0,
//     duration: 1,
//     ease: "powe1.inOut",
//   })
//   .to(water_drop_dash, {
//     strokeDashoffset: 0,
//     duration: 1,
//     ease: "powe1.inOut",
//   });

document.querySelectorAll(".glass").forEach((water_svg) => {
  gsap.from(water_svg, {
    scrollTrigger: {
      trigger: ".water-food-processing",
      start: "top center",
      end: "bottom center",
      scrub: true,
      // markers: true,
    },
    opacity: 0,
    y: 20,
    duration: 2,
  });
});

document.querySelectorAll(".agro").forEach((hand) => {
  //   const hand = document.querySelector(".water-glass");
  const hand_len = hand.getTotalLength();

  // Set initial styles for the path
  gsap.set(hand, {
    strokeDasharray: hand_len,
    strokeDashoffset: hand_len,
    visibility: "hidden",
  });

  const animation = gsap.to(hand, {
    strokeDashoffset: 0,
    duration: 1,
    ease: "powe1.inOut",
    visibility: "visible",

    scrollTrigger: {
      trigger: ".green-agriculture",
      start: "top center",
        end: "bottom center",
    //   toggleActions: "play none none none",
    //   onLeaveBack: () => animation.restart(),
      scrub: true,
      // markers: true,
    },
    // opacity: 0,
    // y: 30,
    // duration: 2,
  });
});


document.querySelectorAll(".light-bulb path").forEach((bulb) => {
  gsap.from(bulb, {
    scrollTrigger: {
      trigger: ".sustainability",
      start: "top center",
      end: "bottom center",
      scrub: true,
      // markers: true,
    },
    opacity: 0,
    y: 20,
    duration: 2,
  });
});
// document.querySelectorAll(".glass").forEach((water_svg) => {
//   gsap.to(hand, {
//     strokeDashoffset: 0,
//     duration: 1,
//     ease: "powe1.inOut",
//     scrollTrigger: {
//       trigger: ".green-agriculture",
//       start: "top center",
//       end: "bottom center",
//       scrub: true,
//       // markers: true,
//     },
//     opacity: 0,
//     y: 30,
//     duration: 2,
//   });
// });
// pathTimeline.to(water_glass, {
//   strokeDashoffset: 0,
//   duration: 1,
//   ease: "powe1.inOut",
// });
// document.addEventListener("DOMContentLoaded", function () {
//   gsap.set(path, {
//     strokeDasharray: length,
//     strokeDashoffset: length,
//   });
//   gsap.from(".water", {
//     scrollTrigger: {
//       trigger: ".tab-horizontal", // Element that triggers the animation
//       start: "top center", // When the top of .box hits the center of the viewport
//       end: "bottom top", // When the bottom of .box hits the top of the viewport
//       scrub: true, // Smoothly animate as you scroll
//       markers: true, // Show markers for debugging
//     },
//     strokeDashoffset: 0,
//     opacity: 0,
//     y: 50,
//     duration: 2,
//     // stagger: 0.5,
//   });
// });
