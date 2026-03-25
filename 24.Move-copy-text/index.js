const copyText = document.querySelector("textarea[name=copyTxt]");
const finalText = document.querySelector("textarea[name=finalTxt]");
const moveBtn = document.querySelector(".moveBtn");
const copyBtn = document.querySelector(".copyBtn");

// Create a message element (so we don't break DOM)
const message = document.createElement("p");
message.style.color = "green";
document.body.appendChild(message);

// Copy button
copyBtn.addEventListener("click", () => {
  const text = copyText.value.trim();

  if (!text) {
    showMessage("Nothing to copy!");
    return;
  }

  navigator.clipboard
    .writeText(text)
    .then(() => showMessage("Text copied!"))
    .catch(() => showMessage("Copy failed!"));
});

// Move button (CUT + PASTE)
moveBtn.addEventListener("click", () => {
  const text = copyText.value.trim();

  if (!text) {
    showMessage("Nothing to move!");
    return;
  }

  finalText.value = text;
  copyText.value = ""; // clear source
  showMessage("Text moved!");
});

// Select text on click
copyText.addEventListener("click", function () {
  this.select();
});

finalText.addEventListener("click", function () {
  this.select();
});

// Message helper
function showMessage(msg) {
  message.textContent = msg;

  setTimeout(() => {
    message.textContent = "";
  }, 1000);
}
