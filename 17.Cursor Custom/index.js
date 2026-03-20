// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");

  // Update cursor position on mouse move
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
});
