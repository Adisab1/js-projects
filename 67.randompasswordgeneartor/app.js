const genBtn = document.querySelector(".btn1");
const copyBtn = document.querySelector(".btn2");

genBtn.addEventListener("click", () => genPassword());
copyBtn.addEventListener("click", () => copyPassword());

function genPassword() {
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?/~`";

  let passwordLength = 10;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  document.getElementById("password").value = password;
}
function copyPassword() {
  let input = document.getElementById("password");

  input.select();
  input.setSelectionRange(0, 99999); // for mobile

  navigator.clipboard.writeText(input.value);

  alert("Copied!");
}
