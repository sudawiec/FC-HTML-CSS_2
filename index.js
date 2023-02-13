// Create variables to store DOM nodes

// const dropdownMenu = document.querySelector("#dropdown");
// const horizontalNavBtn = document.querySelector("#horizontal-nav__item");
const menuToggleBtn = document.querySelector(".menu__toggle-btn");
const menuList = document.querySelector(".menu__item-list");

// Functions

// const toggleDropdown = () => {
//   dropdownMenu.classList.toggle("show");
//   horizontalNavBtn.classList.toggle("active");
// };

// Event listeners

// horizontalNavBtn.addEventListener("click", (e) => {
//   e.stopPropagation();
//   toggleDropdown();
// });

// document.documentElement.addEventListener("click", () => {
//   if (dropdownMenu.classList.contains("show")) {
//     toggleDropdown();
//   }
// });

menuToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("menu__toggle-btn--is-open");
  menuList.classList.toggle("menu__item-list--vertical");
  document.body.classList.toggle("no-scroll");
});
