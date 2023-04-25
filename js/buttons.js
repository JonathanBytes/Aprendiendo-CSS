const button = document.querySelector(".button-three");
const btnContact = document.querySelector(".btn");
const nav = document.querySelector(".nav");
const mobile = document.querySelector(".mobile-nav")

button.addEventListener("click", () => {
  const currentState = button.getAttribute("data-state");

  if (!currentState || currentState === "closed") {
    button.setAttribute("data-state", "opened");
    button.setAttribute("aria-expanded", "true");
    mobile.style.display = "flex";
  } else {
    button.setAttribute("data-state", "closed");
    button.setAttribute("aria-expanded", "false");
    mobile.style.display = "none";
  }
});