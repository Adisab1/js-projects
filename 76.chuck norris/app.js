const displayJoke = document.getElementById("display-joke");
const button = document.getElementById("getJoke");

button.addEventListener("click", getRandomJoke);

async function getRandomJoke() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    displayJoke.textContent = data.value;
  } catch (error) {
    displayJoke.textContent = "Failed to fetch a joke. Please try again.";
    console.error(error);
  }
}
