const result = document.querySelector(".result-btn");

result.addEventListener("click", decimal);

function decimal() {
  let decimal = document.getElementById("number").value;

  if (decimal === "") {
    alert("Please enter a number");
    return;
  }

  let binary = Number(decimal).toString(2);

  const container = document.querySelector(".output");
  container.textContent = binary;
}
