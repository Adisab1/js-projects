const squares = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitposition = null;
let currentTime = 60;
let timeId = null;
let countDownTimerID = null;

// show initial time
timeLeft.textContent = currentTime;

// pick random square
function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("emoji");
  });

  let randomSq = squares[Math.floor(Math.random() * squares.length)];
  randomSq.classList.add("emoji");
  hitposition = randomSq.id;
}

// click event
squares.forEach((square) => {
  square.addEventListener("click", () => {
    if (square.id === hitposition) {
      result++;
      score.textContent = result;
      hitposition = null;
    }
  });
});

// move emoji
function moveEmoji() {
  timeId = setInterval(randomSquare, 700);
}
moveEmoji();

// countdown timer
function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime <= 0) {
    clearInterval(countDownTimerID);
    clearInterval(timeId);
    alert(`Game Over! Your Final Score is ${result}`);
  }
}

// start countdown
countDownTimerID = setInterval(countDown, 1000);
