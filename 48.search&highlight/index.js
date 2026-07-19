const btn = document.getElementById("searchBtn");
const input = document.getElementById("input");
const para = document.getElementById("p");

// save original paragraph
const originalText = para.innerHTML;

btn.onclick = function () {
  const word = input.value.trim();

  // reset highlights first
  para.innerHTML = originalText;

  if (word === "") return; // nothing typed → no highlight

  // highlight matches (case-insensitive)
  const regex = new RegExp(word, "gi");
  para.innerHTML = para.innerHTML.replace(
    regex,
    (match) => `<mark>${match}</mark>`,
  );
};
