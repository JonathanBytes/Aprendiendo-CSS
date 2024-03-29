const button = document.querySelector(".button-three");
const mobileNav = document.querySelector(".mobile-nav")

button.addEventListener("click", () => {
  const currentState = mobileNav.getAttribute("data-visible");

  if (!currentState || currentState === "false") {
    button.setAttribute("aria-expanded", "true");
    mobileNav.setAttribute("data-visible", "true");
  } else {
    button.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("data-visible", "false");
  }
});