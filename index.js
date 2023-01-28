
// Create variables to store DOM nodes

const activeBtn = document.querySelector(".active");
const dropdownMenu = document.querySelector("#dropdown")
const navToggle = document.querySelector(".nav-toggle");

// Function

const toggleDropdown = () => {
  dropdownMenu.classList.toggle("show");
};

// Event listeners

activeBtn.addEventListener("click", (e) => {
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