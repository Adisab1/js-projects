const textInput = document.querySelector(".text-input");
const wordCountElement = document.querySelector(".word-count");
const letterCountElement = document.querySelector(".letter-count");
const spaceCountElement = document.querySelector(".space-count");

const checks = [hasAtLeastOneLetter, absenceofThreeConsecutiveCharacters];

// ✅ allow single-letter words too
function hasAtLeastOneLetter(text) {
  const letters = text.match(/[a-z]/gi) || [];
  return letters.length >= 1;
}

// ❌ block words like "heee", "aaa"
function absenceofThreeConsecutiveCharacters(text) {
  for (let i = 0; i < text.length - 2; i++) {
    if (text[i] === text[i + 1] && text[i] === text[i + 2]) {
      return false;
    }
  }
  return true;
}

textInput.addEventListener("input", () => {
  const value = textInput.value;

  // split into words
  const splitted = value
    .trim()
    .split(/[\s-]+/)
    .filter(Boolean);

  // count letters only
  const letterCount = (value.match(/[a-z]/gi) || []).length;

  // count each space individually
  const spaceCount = (value.match(/ /g) || []).length;

  let wordCount = 0;

  outer: for (const word of splitted) {
    for (const check of checks) {
      if (!check(word)) continue outer;
    }
    wordCount++;
  }

  wordCountElement.textContent = wordCount;
  letterCountElement.textContent = letterCount;
  spaceCountElement.textContent = spaceCount;
});
