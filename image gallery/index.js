const images = document.querySelectorAll(".img-gallery img");
const wrapper = document.getElementById("fullImg");
const imgWrapper = document.querySelector("#fullImg img");
const closeBtn = document.querySelector("#fullImg span");

function openModal(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
}

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModal(`images/Img${index + 1}.jpg`);
  });
});

closeBtn.addEventListener("click", () => {
  wrapper.style.display = "none";
});
