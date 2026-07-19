const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const resultsContainer = document.getElementById("search-results");

// theme toggler elements
const themeToggler = document.getElementById("theme-toggler");
const body = document.body;

async function searchWikipedia(query) {
  const encodedQuery = encodeURIComponent(query);
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodedQuery}&format=json&origin=*`;

  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const json = await response.json();
  return json.query.search; // return only results
}

function displayResults(results) {
  resultsContainer.innerHTML = "";

  if (results.length === 0) {
    resultsContainer.innerHTML = "<p>No results found.</p>";
    return;
  }

  results.forEach((result) => {
    const url = `https://en.wikipedia.org/wiki/${encodeURIComponent(result.title)}`;

    const resultItem = document.createElement("div");
    resultItem.classList.add("result-item");

    resultItem.innerHTML = `
            <h3><a href="${url}" target="_blank">${result.title}</a></h3>
            <p>${result.snippet}...</p>
        `;

    resultsContainer.appendChild(resultItem);
  });
}

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = searchInput.value.trim();

  if (!query) return;

  resultsContainer.innerHTML = "<p>Loading...</p>";

  try {
    const results = await searchWikipedia(query);
    displayResults(results);
  } catch (error) {
    console.error("Error fetching data:", error);
    resultsContainer.innerHTML =
      "<p>Sorry, an error occurred. Please try again.</p>";
  }
});

// theme toggler
themeToggler.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
});
