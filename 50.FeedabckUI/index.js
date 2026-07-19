const ratingsContainer = document.querySelector(".ratings-container");
const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.parentNode.querySelector("small").innerText;
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
     <p class="heart">❤️</p>
  <h2 class="thank">Thank You!</h2>
  <p class="feedback">Feedback: ${selectedRating}</p>
  `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
