const btn = document.querySelectorAll(".btn");
const body = document.querySelector("body");

btn.forEach((button) => {
  button.addEventListener("click", () => {
    const number = button.value; // ✅ get clicked button's value
    changeBackgroundColor(number);
  });
});

function changeBackgroundColor(number) {
  body.className = ""; // remove existing background classes

  // Add the new color class
  switch (number) {
    case "purple":
    case "blue":
    case "green":
    case "yellow":
    case "red":
    case "black":
    case "white":
      body.classList.add(number);
      break;
  }
}
