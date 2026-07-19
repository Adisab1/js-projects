// const result = document.getElementById("result");
// const filter = document.getElementById("filter");
// const listItems = [];

// getData();

// filter.addEventListener("input", (e) => filterData(e.target.value));

// async function getData() {
//   const res = await fetch("https://randomuser.me/api?results=50");
//   const { results } = await res.json();

//   result.innerHTML = "";

//   results.forEach((user) => {
//     const li = document.createElement("li");
//     listItems.push(li);

//     li.innerHTML = `
//         <img src="${user.picture.large}" alt="${user.name.first}" />
//         <div class="user-info">
//             <h4>${user.name.first}  ${user.name.last}</h4>
//             <p>${user.location.city}, ${user.location.country} </p>
//         </div>
//     `;

//     result.appendChild(li);
//   });
// }

// function filterData(searchTerm) {
//   listItems.forEach((item) => {
//     if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
//       item.classList.remove("hide");
//     } else {
//       item.classList.add("hide");
//     }
//   });
// }

// // Toggler
// let toggler = document.getElementById("switch");

// toggler.addEventListener("click", () => {
//   console.log(toggler.checked);
//   if (toggler.checked === true) {
//     document.body.style.backgroundColor = "rgb(17, 17, 17)";
//     document.querySelector(".header").style.backgroundColor = "crimson";
//   } else {
//     document.body.style.backgroundColor = "white";
//     document.querySelector(".header").style.backgroundColor = "black";
//   }
// });
const result = document.getElementById("result");
const filter = document.getElementById("filter");
const toggler = document.getElementById("switch");
const header = document.querySelector(".header");

let users = [];

getData();

/* INPUT EVENT */
filter.addEventListener("input", (e) => {
  filterData(e.target.value);
});

/* FETCH USERS */
async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const data = await res.json();

  result.innerHTML = "";
  users = [];

  data.results.forEach((user) => {
    const li = document.createElement("li");

    const name = `${user.name.first} ${user.name.last}`.toLowerCase();
    const location =
      `${user.location.city} ${user.location.country}`.toLowerCase();

    li.innerHTML = `
      <img src="${user.picture.large}" />
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `;

    result.appendChild(li);

    users.push({
      element: li,
      name,
      location,
    });
  });
}

/* FILTER FUNCTION */
function filterData(searchTerm) {
  const term = searchTerm.toLowerCase().trim();

  users.forEach((user) => {
    let match = false;

    if (term === "") {
      match = true;
    } else if (term.length <= 2) {
      // STRICT: startsWith only
      match = user.name.startsWith(term) || user.location.startsWith(term);
    } else {
      // FLEXIBLE: includes for longer input (FIXED)
      match = user.name.includes(term) || user.location.includes(term);
    }

    user.element.style.display = match ? "flex" : "none";
  });
}

/* TOGGLE THEME */
toggler.addEventListener("change", () => {
  if (toggler.checked) {
    document.body.style.backgroundColor = "#111";
    header.style.backgroundColor = "crimson";
    header.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    header.style.backgroundColor = "black";
    header.style.color = "whitesmoke";
  }
});
