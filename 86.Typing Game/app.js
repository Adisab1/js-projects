const main = document.getElementById("main");
const typingArea = document.getElementById("typingArea");
const btn = document.getElementById("btn");

let startTime;
let currentSentence = "";

let allQuotes = [];

// API endpoint
const QUOTES_API = "https://api.adviceslip.com/advice";

// Fetch quotes from API on page load
async function fetchQuotes() {
  try {
    console.log("Fetching initial quote...");
    const response = await fetch(QUOTES_API);
    if (response.ok) {
      const data = await response.json();
      if (data.slip && data.slip.advice) {
        allQuotes.push(data.slip.advice);
        console.log("Initial quote loaded:", data.slip.advice);
      }
    }
  } catch (error) {
    console.error("API fetch error:", error);
  }
}

// Fetch multiple quotes when starting a game
async function getNewSentence() {
  console.log("Getting new sentence...");

  // Try to fetch a few quotes
  for (let i = 0; i < 3; i++) {
    try {
      console.log(`Fetch attempt ${i + 1}/3...`);
      const response = await fetch(QUOTES_API);

      if (response.ok) {
        const data = await response.json();
        if (data.slip && data.slip.advice) {
          // Check if quote is long enough
          if (data.slip.advice.length > 10) {
            if (!allQuotes.includes(data.slip.advice)) {
              allQuotes.push(data.slip.advice);
              console.log("Quote added:", data.slip.advice);
            }
          }
        }
      } else {
        console.error("API response not OK:", response.status);
      }
    } catch (error) {
      console.error(`Fetch attempt ${i + 1} failed:`, error);
    }
  }

  console.log("Total quotes available:", allQuotes.length);

  // Pick from fetched quotes
  if (allQuotes.length === 0) {
    main.textContent =
      "Unable to load quotes. Please check your internet connection and try again.";
    console.log("ERROR: No quotes available");
    return;
  }

  const randomIndex = Math.floor(Math.random() * allQuotes.length);
  currentSentence = allQuotes[randomIndex];
  console.log("Selected sentence:", currentSentence);
  main.textContent = currentSentence;
}

function startGame() {
  console.log("Starting game...");
  main.textContent = "Loading sentence...";
  typingArea.disabled = false;
  typingArea.value = "";
  typingArea.focus();

  getNewSentence()
    .then(() => {
      console.log("Sentence loaded. Current sentence:", currentSentence);

      // Check if sentence loaded successfully
      if (currentSentence && currentSentence.length > 5) {
        console.log("Game started with sentence:", currentSentence);
        btn.textContent = "DONE";
        btn.style.background =
          "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)";
        startTime = Date.now();
      } else {
        console.error("Failed to load sentence. Current:", currentSentence);
        btn.textContent = "START";
        typingArea.disabled = true;
        main.textContent = "Error loading quote. Try again.";
      }
    })
    .catch((err) => {
      console.error("Error in startGame:", err);
      btn.textContent = "START";
      typingArea.disabled = true;
    });
}

function calculateAccuracy(originalText, userText) {
  const originalWords = originalText.trim().split(/\s+/);
  const userWords = userText.trim().split(/\s+/);

  let correctWords = 0;

  for (let i = 0; i < originalWords.length; i++) {
    if (i < userWords.length && originalWords[i] === userWords[i]) {
      correctWords++;
    }
  }

  const accuracy = (correctWords / originalWords.length) * 100;
  return Math.round(accuracy);
}

function endGame() {
  console.log("Ending game...");
  typingArea.disabled = true;

  const endTime = Date.now();
  const totalTime = (endTime - startTime) / 1000;

  const userText = typingArea.value;
  const wordCount =
    userText.trim() === "" ? 0 : userText.trim().split(/\s+/).length;

  const wpm = Math.round((wordCount / totalTime) * 60);

  const accuracy = calculateAccuracy(currentSentence, userText);

  console.log("Results - Time:", totalTime, "WPM:", wpm, "Accuracy:", accuracy);

  main.innerHTML = `<strong>Results:</strong><br>Time: ${totalTime.toFixed(2)}s | Words: ${wordCount} | Speed: ${wpm} WPM | Accuracy: ${accuracy}%`;

  btn.textContent = "RESTART";
  btn.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
}

btn.addEventListener("click", function () {
  console.log("Button clicked. Button text:", btn.textContent.trim());

  if (
    btn.textContent.trim() === "START" ||
    btn.textContent.trim() === "RESTART"
  ) {
    console.log("Starting game...");
    startGame();
  } else if (btn.textContent.trim() === "DONE") {
    console.log("Ending game...");
    endGame();
  }
});

// Allow Ctrl+Enter to submit
typingArea.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && e.ctrlKey) {
    if (btn.textContent.trim() === "DONE") {
      console.log("Ctrl+Enter pressed - ending game");
      endGame();
    }
  }
});

// Initialize quotes on page load
console.log("Page loaded - fetching initial quotes");
fetchQuotes();
