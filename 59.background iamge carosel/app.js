const body = document.body;
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

const images = [
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1600",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600",

  "https://picsum.photos/id/10/1600/900",
  "https://picsum.photos/id/29/1600/900",
  "https://picsum.photos/id/1015/1600/900",
  "https://picsum.photos/id/1011/1600/900",
  "https://picsum.photos/id/1039/1600/900",
  "https://picsum.photos/id/1040/1600/900",
  "https://picsum.photos/id/42/1600/900",
  "https://picsum.photos/id/65/1600/900",
  "https://picsum.photos/id/96/1600/900",
  "https://picsum.photos/id/1043/1600/900",
];

let current = 0;

// show image
function showImage(index) {
  body.style.backgroundImage = `url('${images[index]}')`;
}

// next
rightBtn.addEventListener("click", () => {
  current = (current + 1) % images.length;
  showImage(current);
});

// previous
leftBtn.addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
});

// auto slide
setInterval(() => {
  current = (current + 1) % images.length;
  showImage(current);
}, 4000);

// init
showImage(current);
