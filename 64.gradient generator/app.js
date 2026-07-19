const color1 = document.querySelector(".c1");
const color2 = document.querySelector(".c2");
const gradientCont = document.querySelector("#gradient-cont");
const btn = document.querySelector(".randomColorBtn");

function makeColor() {
  return Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
}

function setGradient() {
  gradientCont.style.background = `linear-gradient(${color1.value}, ${color2.value})`;
}

function generateGradient() {
  color1.value = `#${makeColor()}`;
  color2.value = `#${makeColor()}`;
  setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", generateGradient);

// Initial gradient
setGradient();
