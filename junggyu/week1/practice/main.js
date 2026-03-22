const contactDisplay = document.querySelector("#contact");
const navDisplay = document.querySelector("nav");

window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    navDisplay.style.transform = "translateY(-100%)";
  } else {
    navDisplay.style.transform = "translateY(0)";
  }
});

contactDisplay.addEventListener("mouseenter", () => {
    contactDisplay.textContent = "010-2414-5640";
});

contactDisplay.addEventListener("mouseleave", () => {
    contactDisplay.textContent = "연락처";
});