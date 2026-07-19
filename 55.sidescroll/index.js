const sliderContainer = document.querySelector(".slider-container");
const slidRight = document.querySelector(".right-slid");
const slidLeft = document.querySelector(".left-slid");

const upButton = document.getElementById("up-btn");
const downBtn = document.getElementById("down-btn");

const sliderLength = slidRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

upButton.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));

function changeSlide(direction) {
  const sliderHeight = sliderContainer.clientHeight;

  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex >= sliderLength) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = sliderLength - 1;
    }
  }

  slidRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  slidLeft.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
}
