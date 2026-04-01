const container = document.querySelector(".page-container");
const toggleBtn = document.querySelector(".toggle-btn");
const ul = document.querySelector(".nav-list");
const pages = document.querySelectorAll(".page");
const links = document.querySelectorAll(".link");
const overlay = document.querySelector(".overlay");

let pageIndex = 0;

// Toggle menu
toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  container.classList.toggle("active"); // enable/disable 3D effect
  ul.classList.toggle("show"); // show/hide menu
});

// Function to switch pages
function nextPage(index) {
  overlay.style.animation = "slide 1s linear";

  setTimeout(() => {
    pages[pageIndex].classList.remove("active");
    pages[index].classList.add("active");
    pageIndex = index;
    overlay.style.animation = "";
  }, 1000);
}

// Links click → switch page but stay in 3D mode
links.forEach((link, i) => {
  link.addEventListener("click", () => {
    nextPage(i);
    ul.classList.remove("show"); // hide menu
    toggleBtn.classList.remove("active"); // reset hamburger button
    // container.classList stays active → 3D view remains
  });
});

// Single click on page container → expand to full screen
container.addEventListener("click", () => {
  if (container.classList.contains("active")) {
    container.classList.remove("active"); // remove 3D rotation
  }
});
