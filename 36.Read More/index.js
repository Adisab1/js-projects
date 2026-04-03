const container = document.querySelector(".content-container-2");
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  container.classList.toggle("toggle");

  if (container.classList.contains("toggle")) {
    btn.textContent = "Read Less";
  } else {
    btn.textContent = "Learn More";
  }
});
