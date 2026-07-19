const body = document.body;
const imgs = document.querySelectorAll(".img");
const arrowBtns = document.querySelectorAll(".arrow-btn");

let activeImg = 0;

function activeImages() {
  imgs.forEach((img) => {
    img.classList.remove("active");
    img.classList.remove("animateTransition");
  });

  imgs[activeImg].classList.add("active");
  imgs[activeImg].classList.add("animateTransition");
}

function setImage() {
  body.style.backgroundImage = imgs[activeImg].style.backgroundImage;
}

// initialize
activeImages();
setImage();

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("right-arrow")) {
      activeImg++;
      if (activeImg >= imgs.length) activeImg = 0;
    }

    if (btn.classList.contains("left-arrow")) {
      activeImg--;
      if (activeImg < 0) activeImg = imgs.length - 1;
    }

    setImage();
    activeImages();
  });
});
