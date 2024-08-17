// const tl = gsap.timeline();

// // Animate circles
// tl.from(".africa-connected-animation circle", {
//   duration: 1,
//   scale: 0,
//   transformOrigin: "center",
//   stagger: 0.1,
//   ease: "power1.out",
//   onComplete: () => {
//     // After circles finish animating, start drawing the paths
//     tl.to(".africa-connected-animation path", {
//       duration: 2,
//       strokeDashoffset: 0,
//       ease: "power1.out",
//       stagger: 0.1,
//     });
//   }
// });
//  gsap.registerPlugin(ScrollTrigger);
//  gsap.from(".africa-connected-animation circle", {
//     scale: 0,
//     opacity: 0,
//     transformOrigin: "center center",
//     duration: 0.5,
//     stagger: 0.05,
//     scrollTrigger: {
//       trigger: ".africa-connected-container",
//       start: "top center",
//       toggleActions: "play none restart none",
//       markers: true,
//       end: "+=100%",         // How long to pin the element (can be a percentage or pixel value)
//     //   pin: true,             // Enable pinning
//     //   pinSpacing: true       // Retain the space after the element is unpinned
//     }
//   });

// //   // Animate paths - draw them from start to end
// //   gsap.from(".africa-connected-animation path", {
// //     strokeDasharray: 5,
// //     strokeDashoffset: 5,
// //     duration: 1.5,
// //     ease: "power2.inOut",
// //     stagger: 0.3,
// //     scrollTrigger: {
// //       trigger: ".africa-connected-container",
// //       start: "top 80%",
// //       toggleActions: "play none none none"
// //     }
// //   });

// // Function to animate drawing effect on SVG paths
// function drawSVG() {
//     const paths = document.querySelectorAll('.africa-connected-animation path');

//     paths.forEach((path) => {
//       const length = path.getTotalLength();

//       // Set up the initial state of the path
//       gsap.set(path, {
//         strokeDasharray: length,
//         strokeDashoffset: length,
//         visibility: "hidden"
//       });

//       // Animate the stroke
//       gsap.to(path, {
//         strokeDashoffset: 0,
//         duration: 1, // Adjust the duration as needed
//         autoAlpha: 1,
//         stagger: 0.1,
//         scrollTrigger: {
//           trigger: path, // Trigger each path individually
//           start: "top 80%", // Adjust this value based on when you want the animation to start
//           toggleActions: "play none restart none"
//         }
//       });
//     });
//   }

//   // Call the function to draw the SVG paths
//   drawSVG();

// gsap.registerPlugin(ScrollTrigger);
//   function animateSVG() {
//     const circles = document.querySelectorAll('.africa-connected-animation circle');
//     const paths = document.querySelectorAll('.africa-connected-animation path');

//     const timeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".africa-connected-animation",
//         start: "top 80%",
//         toggleActions: "play none none none",
//       }
//     });

//     // Animate circles first
//     timeline.from(circles, {
//       scale: 0, // Scale up effect
//       duration: 0.5,
//       stagger: 0.05, // Stagger animation for each circle
//       autoAlpha: 1, // Make sure circles are visible
//       transformOrigin: "center center", // Transform from the center
//       ease: "elastic.out(1, 0.5)"
//     });

//     // Animate paths after circles
//     paths.forEach((path) => {
//       const length = path.getTotalLength();

//       // Set initial stroke properties and visibility
//       gsap.set(path, {
//         strokeDasharray: length,
//         strokeDashoffset: length,
//         visibility: "hidden"
//       });

//       timeline.to(path, {
//         strokeDashoffset: 0,
//         duration: 0.5, // Adjust the duration as needed
//         autoAlpha: 1, // Make the path visible and start the drawing effect
//         ease: "power1.inOut"
//       },"-=0.5");
//     });
//   }

//   // Call the function to animate the SVG elements
//   animateSVG();

// gsap.registerPlugin(ScrollTrigger);

// function animateSVG() {
//   const circles = document.querySelectorAll(
//     ".africa-connected-animation circle"
//   );
//   const paths = Array.from(
//     document.querySelectorAll(".africa-connected-animation path")
//   );

//   const numGroups = 1;
//   const pathsPerGroup = Math.ceil(paths.length / numGroups);

//   // Create a container to hold the timelines
//   const groupTimelines = [];

//   // Randomly assign paths to groups
//   const shuffledPaths = paths.sort(() => Math.random() - 0.5);

//   // Create timelines for each group
//   for (let i = 0; i < numGroups; i++) {
//     const groupPaths = shuffledPaths.slice(
//       i * pathsPerGroup,
//       (i + 1) * pathsPerGroup
//     );
//     const groupTimeline = gsap.timeline();

//     groupPaths.forEach((path) => {
//       const length = path.getTotalLength();

//       // Set initial stroke properties
//       gsap.set(path, {
//         strokeDasharray: length,
//         strokeDashoffset: length,
//         visibility: "hidden",
//       });

//       // Add animation to the group timeline
//       groupTimeline.to(path, {
//         strokeDashoffset: 0,
//         visibility: "visible",
//         duration: 0.04,
//         ease: "power3.in",
//       });
//     });

//     groupTimelines.push(groupTimeline);
//   }

//   // Master timeline
//   const masterTimeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".africa-connected-animation",
//       start: "top 80%",
//       toggleActions: "play none none reverse",
//     },
//   });

//   // Animate circles first
//   masterTimeline.from(circles, {
//     scale: 0,
//     transformOrigin: "center center", // Transform from the center
//     duration: 0.05,
//     stagger: 0.03,
//     ease: "power1.inOut",
//   });

//   // Add each group timeline to the master timeline in sequence
//   groupTimelines.forEach((timeline, index) => {
//     const delay = index === 0 ? 0 : 0.04; // Adjust delay as needed
//     masterTimeline.add(timeline, `+=${delay}`);
//   });
// }

// // Call the function to animate the SVG elements
// animateSVG();

function animateSVG() {
  const circles = document.querySelectorAll(
    ".africa-connected-animation circle"
  );
  const paths = Array.from(
    document.querySelectorAll(".africa-connected-animation path")
  );

  // Shuffle paths array randomly
  const shuffledPaths = paths.sort(() => Math.random() - 0.5);

  // Create a timeline for paths
  const pathTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".africa-connected-animation",
      start: "top 80%",
      toggleActions: "play none none none",
      onLeaveBack: () => pathTimeline.restart(),
    },
  });

  // Animate circles first
  pathTimeline.from(circles, {
    scale: 0,
    transformOrigin: "center center", // Transform from the center
    duration: 0.1,
    stagger: 0.05,
    ease: "powe1.inOut",
  });

  // Animate paths
  shuffledPaths.forEach((path, index) => {
    const length = path.getTotalLength();

    // Set initial stroke properties
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      visibility: "hidden",
    });

    // Add animation to the timeline
    pathTimeline.to(
      path,
      {
        strokeDashoffset: 0,
        visibility: "visible",
        duration: 0.03,
        ease: "power1.inOut",
        // stagger: {
        //   amount: 0.01, // Stagger amount for each path animation
        //   from: "start",
        // },
      }
      //   `-=${index * 0.1}`
    ); // Stagger paths by index
  });
}

// Call the function to animate the SVG elements
animateSVG();
