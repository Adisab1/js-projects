// عناصر (elements)
let captcha = document.querySelector(".captcha");
let reloadBtn = document.querySelector(".reload-btn");
let inputField = document.querySelector(".input-area input");
let checkBtn = document.querySelector(".check-btn");
let statusTxt = document.querySelector(".status-text");

// characters for captcha
let allCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");

// generate captcha
function getCaptcha() {
  captcha.innerText = ""; // reset

  for (let i = 0; i < 6; i++) {
    let randomChar =
      allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += randomChar;
  }
}

// check captcha
checkBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let inputVal = inputField.value.trim();
  statusTxt.style.display = "block";

  if (inputVal === captcha.innerText) {
    statusTxt.style.color = "#4db2ec";
    statusTxt.innerText = "Nice, Captcha Matched ✅";

    setTimeout(() => {
      statusTxt.style.display = "none";
      inputField.value = "";
      getCaptcha();
    }, 2000);
  } else {
    statusTxt.style.color = "#ff0000";
    statusTxt.innerText = "Captcha not matched ❌ Try again";
  }
});

// reload captcha
reloadBtn.addEventListener("click", () => {
  getCaptcha();
  statusTxt.style.display = "none";
  inputField.value = "";
});

// generate first captcha on load
getCaptcha();
