let toggler = document.getElementById("switch");
toggler.addEventListener("click", () => {
  if (toggler.checked) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});
