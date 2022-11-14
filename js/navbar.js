let burger = document.querySelector(".hamburger-btn"),
  menu = document.querySelector(".nav-list");

burger.addEventListener("click", function (e) {
  menu.classList.toggle("active");
});
