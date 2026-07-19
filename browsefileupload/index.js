const upload = document.getElementById("file");
const image = document.querySelector(".img img");
const close = document.querySelector(".icon .close");

// File selection
upload.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;

  image.src = URL.createObjectURL(file);
  image.classList.add("active");
  close.classList.add("exit");
});

// Close button
close.addEventListener("click", () => {
  image.classList.remove("active");
  close.classList.remove("exit");
  upload.value = ""; // reset input
});
