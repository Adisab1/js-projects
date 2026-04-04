function getTab(el) {
  // Get current active tab and visible content
  const active = document.querySelector(".active");
  const visible = document.querySelector(".content-visible");

  // Get target content
  const tabContent = document.getElementById(
    el.getAttribute("href").split("#")[1],
  );

  // Remove current active/visible
  if (active) active.classList.remove("active");
  if (visible) visible.classList.remove("content-visible");

  // Add active/visible to clicked tab
  el.classList.add("active");
  tabContent.classList.add("content-visible");
}

// Listen for clicks
document.addEventListener("click", (e) => {
  if (e.target.matches(".tab-item a")) {
    e.preventDefault(); // Prevent default anchor jump
    getTab(e.target);
  }
});
