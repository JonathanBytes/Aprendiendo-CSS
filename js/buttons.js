const button = document.querySelector(".button-three");
const mobile = document.querySelector(".mobile-nav")

button.addEventListener("click", () => {
  const currentState = mobile.getAttribute("data-visible");

  if (!currentState || currentState === "false") {
    button.setAttribute("aria-expanded", "true");
    mobile.setAttribute("data-visible", "true");
  } else {
    button.setAttribute("aria-expanded", "false");
    mobile.setAttribute("data-visible", "false");
  }
});