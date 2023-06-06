const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const logButton = document.querySelector(".btn");

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("show");
  logButton.classList.toggle("logout");
});
