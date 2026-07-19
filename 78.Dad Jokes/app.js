//https://icanhazdadjoke.com/ is an API that provides random dad jokes in JSON format. You can use this API to fetch a random joke and display it on your webpage. Here's an example of how you can do this using JavaScript:

document.getElementById("btn").addEventListener("click", joke);

async function joke() {
  let config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();
  document.getElementById("content").innerHTML = data.joke;
}
