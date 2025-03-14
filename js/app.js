const nav = document.querySelector('.burger-menu')
const burger = document.querySelector('.navToggle')

burger.addEventListener("click", function (e) {
  nav.classList.toggle('menu-open')
});