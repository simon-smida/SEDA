document.querySelectorAll(".buttons-set button").forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

function handleButtonClick() {
  const contentId = this.getAttribute("project-location");
  const newContentElement = document.getElementById(contentId);
  const currentActiveElement = document.querySelector(
    ".projects-content.active"
  );

  if (currentActiveElement === newContentElement) {
    toggleContentOff(currentActiveElement);
  } else {
    switchContent(currentActiveElement, newContentElement);
  }
}

// Remove content from screen
function toggleContentOff(element) {
  gsap.to(element, {
    x: "-100vw",
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      element.style.display = "none";
      element.classList.remove("active");
    },
  });
}
// Switch content one for another
function switchContent(currentElement, newElement) {
  if (currentElement) {
    gsap.to(currentElement, {
      x: "-100vw",
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        currentElement.style.display = "none";
        currentElement.classList.remove("active");
        animateContentIn(newElement);
      },
    });
  } else {
    animateContentIn(newElement);
  }
}

// Animate content in
function animateContentIn(element) {
  element.style.display = "block";
  const displayedElem = element.getBoundingClientRect();
  const x_cord = displayedElem.x;
  const displayed_project_width = displayedElem.width;
  const flex_gap = 30;
    const offset = x_cord + displayed_project_width + flex_gap;
  console.log("Displayed Elem x:" + x_cord);
  console.log("Displayed Elem width:" + displayed_project_width);
  console.log(offset);
  const mapAfrica = document.querySelector(".map-wrapper");
  gsap.fromTo(
    element,
    {
      x: "-100vw",
      opacity: 0,
    },
    {
      x: "0%",
      opacity: 1,
      duration: 0.5,
      onStart: () => {
        element.classList.add("active");
      },
    }
  );
}
