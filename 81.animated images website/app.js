let btns = document.querySelectorAll(".btn");
let banner = document.getElementById("banner");

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // Change image
    banner.src = `images/${index}.jpg`;

    // Add animation
    banner.classList.add("zoom");

    setTimeout(() => {
      banner.classList.remove("zoom");
    }, 500);

    // Remove active class from all buttons
    btns.forEach((b) => {
      b.classList.remove("active");
    });

    // Add active class to clicked button
    btn.classList.add("active");
  });
});
