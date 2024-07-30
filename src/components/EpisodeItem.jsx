import React from "react";
import "/src/components/EpisodeItem.css";

function EpisodeItem({ data, onClick }) {
  return (
    <li>
      <button className="EpisodeItem__btn" onClick={onClick}>
        <span>
          Season {data.season} Episode {data.episode}
        </span>
        <span>"{data.title}"</span>
      </button>
    </li>
  );
}

export default EpisodeItem;
