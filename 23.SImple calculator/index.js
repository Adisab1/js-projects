const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const num1 = document.querySelector("#num1").value;
  const num2 = document.querySelector("#num2").value;
  const operator = document.querySelector("#selectOp").value;
  const result = document.querySelector(".result");

  switch (operator) {
    case "add":
      result.innerHTML = Number(num1) + Number(num2);
      break;

    case "subtract":
      result.innerHTML = Number(num1) - Number(num2);
      break;

    case "multiply":
      result.innerHTML = Number(num1) * Number(num2);
      break;

    case "divide":
      result.innerHTML = Number(num1) / Number(num2);
      break;

    default:
      result.innerHTML = "Invalid operator";
  }
});
