const game = {
  start: null,
};

const message = document.createElement("div");
message.classList.add("message");
message.textContent = "Click the box as fast as you can!";
document.body.prepend(message);

const box = document.createElement("div");
box.classList.add("box");

const output = document.querySelector(".output");
output.append(box);

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function addBox() {
  const container = output.getBoundingClientRect();

  const dim = [randomNumber(50) + 20, randomNumber(50) + 20];

  box.style.width = dim[0] + "px";
  box.style.height = dim[1] + "px";

  box.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  box.style.left = randomNumber(container.width - dim[0]) + "px";

  box.style.top = randomNumber(container.height - dim[1]) + "px";

  box.style.borderRadius = randomNumber(50) + "px";
}

// first box
addBox();

box.addEventListener("click", () => {
  const now = new Date().getTime();

  // first click starts timer
  if (!game.start) {
    game.start = now;
    message.textContent = "Game started! Click fast!";
  } else {
    const reactionTime = now - game.start;
    message.textContent = `⏱ ${reactionTime} ms`;

    // optional: convert to seconds
    // message.textContent = `⏱ ${(reactionTime / 1000).toFixed(2)} s`;
  }

  // reset start time for next click
  game.start = new Date().getTime();

  addBox();
});
