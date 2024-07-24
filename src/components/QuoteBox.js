import React from "react";

function QuoteBox({ quote, author, onNewQuote }) {
  const tweeturl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote}" - ${author}`
  )}`;

  return (
    <div id="quote-box">
      <p id="text">{quote}</p>
      <p id="author">{author}</p>
      <button id="new-quote" onClick={onNewQuote}>
        New Quote
      </button>
      <a
        id="tweet-quote"
        href={tweeturl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet Quote
      </a>
    </div>
  );
}

export default QuoteBox;
