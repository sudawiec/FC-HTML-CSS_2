// Create variables to store DOM nodes
const navToggle = document.querySelector(".nav-toggle");
// Event listeners
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
  document.body.classList.toggle("no-scroll");
});
