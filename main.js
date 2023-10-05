"use strict";

const quoteIdEl = document.getElementById("quote-id");
const quoteEl = document.getElementById("quote");

function loadQuote() {
  const quoteId = Math.floor(Math.random() * 224);
  fetch(`https://api.adviceslip.com/advice/${quoteId}`)
    .then((resolve) => {
      return resolve.json();
    })
    .then((quote) => {
      quoteIdEl.innerText = quote.slip.id;
      quoteEl.innerText = quote.slip.advice;
      console.log(quote);
    })
    .catch(() => {
      alert("Error ⛔ - quote ID is wrong");
    });
}

loadQuote();
