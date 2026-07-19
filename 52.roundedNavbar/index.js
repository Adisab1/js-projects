const navbarBtn = document.querySelector(".navbar-btn");
const navbarWrapper = document.querySelector(".navbar-wrapper");

navbarBtn.addEventListener("click", () => {
  navbarWrapper.classList.toggle("change");
});
