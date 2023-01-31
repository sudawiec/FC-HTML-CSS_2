// Create variables to store DOM nodes

const dropdownMenu = document.querySelector("#dropdown");
const horizontalNavBtn = document.querySelector("#horizontal-nav__item");
const navToggle = document.querySelector(".nav-toggle");

// Functions

const toggleDropdown = () => {
  dropdownMenu.classList.toggle("show");
  horizontalNavBtn.classList.toggle("active");
};

// Event listeners

horizontalNavBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleDropdown();
});

document.documentElement.addEventListener("click", () => {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
  document.body.classList.toggle("no-scroll");
});
