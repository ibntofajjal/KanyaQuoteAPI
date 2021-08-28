// ▓▒▒▒▒▒▒▒▒▒▒▒《 Fetching API 》▒▒▒▒▒▒▒▒▒▒▒▓
const loadQuotes = () => {
  fetch(`https://api.kanye.rest/`)
    .then((res) => res.json())
    .then((data) => displayQuote(data));
};

// ▓▒▒▒▒▒▒▒▒▒▒▒《 DISPLAYING THE FETHING DATA 》▒▒▒▒▒▒▒▒▒▒▒▓
const displayQuote = (quote) => {
  const quoteElement = document.getElementById("quote");
  quoteElement.innerText = quote.quote;
};
