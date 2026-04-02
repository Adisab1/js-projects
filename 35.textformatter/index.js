const inputField = document.getElementById("input-field");
const outputField = document.getElementById("output-field");
const buttons = document.querySelectorAll("button");

inputField.addEventListener("keyup", () => {
  outputField.innerHTML = inputField.value;
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("uppercase")) {
      outputField.innerHTML = outputField.innerHTML.toUpperCase();
    } else if (btn.classList.contains("lowercase")) {
      outputField.innerHTML = outputField.innerHTML.toLowerCase();
    } else if (btn.classList.contains("bold")) {
      outputField.style.fontWeight = "bold";
    } else if (btn.classList.contains("capitalize")) {
      outputField.innerHTML = outputField.innerHTML
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    } else if (btn.classList.contains("underline")) {
      outputField.style.textDecoration = "underline";
    } else if (btn.classList.contains("italic")) {
      outputField.style.fontStyle = "italic";
    }
  });
});
