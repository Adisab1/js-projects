const searchMeal = async (e) => {
  e.preventDefault();

  // SELECT ELEMENTS (using classes from your HTML)
  const input = document.querySelector(".input");
  const title = document.querySelector(".title");
  const info = document.querySelector(".info");
  const img = document.querySelector(".img");
  const ingredientOutput = document.querySelector(".ingredients");

  const showMealInfo = (meal) => {
    const { strMeal, strInstructions, strMealThumb } = meal;

    title.textContent = strMeal;
    info.textContent = strInstructions;
    img.style.backgroundImage = `url(${strMealThumb})`;

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`,
        );
      } else {
        break;
      }
    }

    // Render ingredients properly
    ingredientOutput.innerHTML = `
      <ul>
        ${ingredients.map((ing) => `<li class="ing">${ing}</li>`).join("")}
      </ul>
    `;
  };

  const showAlert = () => {
    title.textContent = "No meal found. Please try again.";
    info.textContent = "";
    img.style.backgroundImage = "none";
    ingredientOutput.innerHTML = "";
  };

  const fetchMealData = async (val) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`,
    );
    const data = await res.json();
    return data.meals;
  };

  const val = input.value.trim();

  if (val) {
    const meals = await fetchMealData(val);

    if (!meals) {
      showAlert();
      return;
    }

    showMealInfo(meals[0]); // show first result
  } else {
    alert("Please enter a meal name.");
  }
};

// EVENT LISTENERS
const form = document.querySelector(".input-container");
form.addEventListener("submit", searchMeal);

const magnifier = document.querySelector(".magnifier");
magnifier.addEventListener("click", searchMeal);
