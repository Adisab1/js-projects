const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal");

open.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

close.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

// Close when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show-modal");
  }
});
