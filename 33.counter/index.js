//count ,save,increment,save

let countEl = document.getElementById("count");
let saveEl = document.getElementById("save");
let incrementBtn = document.querySelector(".increment-btn");
let saveBtn = document.querySelector(".save-btn");

let count = 0;
incrementBtn.addEventListener("click", function () {
  count++;
  countEl.textContent = count;
});

saveBtn.addEventListener("click", function () {
  let countStr = count + " ,";
  saveEl.textContent += countStr;

  countEl.textContent = 0;
  count = 0;
});
