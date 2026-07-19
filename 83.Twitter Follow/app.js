// Select elements
const body = document.body;
const themer = document.querySelector(".themer");
const followButtons = document.querySelectorAll(".follow-button");

// THEME TOGGLE
themer.addEventListener("click", () => {
  if (body.classList.contains("light-theme")) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    themer.innerText = "Light Mode";
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    themer.innerText = "Dark Mode";
  }
});

// FOLLOW BUTTONS
followButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("followed")) {
      btn.classList.remove("followed");
      btn.innerText = "Follow";
    } else {
      btn.classList.add("followed");
      btn.innerText = "Unfollow";
    }
  });
});
