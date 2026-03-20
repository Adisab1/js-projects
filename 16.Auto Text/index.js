document.addEventListener("DOMContentLoaded", () => {
  const typedTextSpan = document.querySelector(".type-text");
  const words = ["Awesome", "Great", "Amazing", "Incredible"];
  const typingDelay = 150;
  const erasingDelay = 80;
  const newWordDelay = 1500;

  let wordIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < words[wordIndex].length) {
      typedTextSpan.textContent += words[wordIndex][charIndex];
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newWordDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = typedTextSpan.textContent.slice(0, -1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, typingDelay);
    }
  }

  // Start the typing animation
  if (words.length) {
    setTimeout(type, 500);
  }
});
