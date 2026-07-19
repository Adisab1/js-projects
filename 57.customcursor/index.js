const innercursor = document.querySelector(".inner-cursor");
const outerrcursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);
function moveCursor(e) {
  let x = e.clientX;

  let y = e.clientY;
  innercursor.style.left = `${x}px`;
  innercursor.style.top = `${y}px`;
  outerrcursor.style.left = `${x}px`;
  outerrcursor.style.top = `${y}px`;
}
