// Random Quote Generator
const quoteBtn = document.getElementById("quoteBtn");
const quoteOutput = document.getElementById("quoteOutput");
const authorOutput = document.getElementById("authorOutput");
const arrayofQuotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
];

quoteBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * arrayofQuotes.length);
  const randomQuote = arrayofQuotes[randomIndex];
  quoteOutput.textContent = `"${randomQuote.quote}"`;
  authorOutput.textContent = `- ${randomQuote.author}`;
});
