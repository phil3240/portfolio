const burgerMenu = document.querySelector(".burgermenu");
const navMenu = document.querySelector(".nav_menu");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
  bar1.classList.toggle("active");
  bar2.classList.toggle("active");
  bar3.classList.toggle("active");
});
