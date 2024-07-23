import React from "react";
import "/src/components/Quote.css";

function Quote({ quote, reference }) {
  return (
    <div className="Quote">
      <p className="Quote__text">{quote}</p>
      <p className="Quote__reference"> — {reference}</p>
    </div>
  );
}

export default Quote;
