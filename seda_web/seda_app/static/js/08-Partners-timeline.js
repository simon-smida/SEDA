gsap.registerPlugin(ScrollTrigger);

// 1. Select the Line element
// 2. Determine the start of the animation
// 3. Determine the end of the animation

// 1. Select all lines
const lines = document.querySelectorAll(".svg-timeline-line line");

lines.forEach( line => {
    gsap.fromTo(
        line,
        { attr: { y2: "0%" } },
        {
          attr: { y2: "100%" },
          ease: "none",
          scrollTrigger: {
            trigger: line.closest(".brand-timeline"),
            start: "top center", // Start animation when top of SVG reaches the top of the viewport
            end: "bottom center", // End animation when bottom of SVG reaches the top of the viewport
            scrub: true, // Smooth scrubbing, the animation will link to the scrollbar
            // markers: true,
          },
        }
      );    
})
