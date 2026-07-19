let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  getPerson(getData);
});

function getPerson(callback) {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.error("Error fetching user:", error));
}

function getData(data) {
  let person = data.results[0];
  let name = person.name.first + " " + person.name.last;
  let email = person.email;
  let city = person.location.city;
  let country = person.location.country;
  let img = person.picture.large;
  let firstName = person.name.first;
  let lastName = person.name.last;
  let phone = person.phone;

  document.getElementById("name").textContent = name;
  document.getElementById("email").textContent = email;
  document.getElementById("location").textContent = city + ", " + country;
  document.getElementById("img").src = img;
  document.getElementById("first").textContent = firstName;
  document.getElementById("last").textContent = lastName;
  document.getElementById("phone").textContent = phone;
}
