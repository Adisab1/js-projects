const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li");
const highlight = document.querySelector(".highlight");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  if (this.dataset.open === "close") {
    menu.style.clipPath = "circle(100% at 50% 50%)";
    this.dataset.open = "open";
  } else {
    menu.style.clipPath = "circle(20px at calc(100vw - 5vw) 31px)";
    this.dataset.open = "close";

    highlight.style.cssText = "";
  }
});

links.forEach((link) => {
  link.addEventListener("pointerover", function () {
    const rect = this.getBoundingClientRect();
    const parentRect = this.parentElement.getBoundingClientRect();

    highlight.style.width = rect.width + "px";
    highlight.style.height = rect.height + "px";

    highlight.style.left = rect.left - parentRect.left + "px";
    highlight.style.top = rect.top - parentRect.top + "px";
  });
});
