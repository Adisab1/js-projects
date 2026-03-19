const btn = document.querySelector("#btn");
const hex = document.querySelector("#hexcode");

btn.addEventListener("click", () => {
  const color = getRandomColor(); // generate one random color
  document.body.style.backgroundColor = color; // apply to body
  hex.innerHTML = color; // display same color
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
