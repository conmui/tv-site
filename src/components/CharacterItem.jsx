import React from "react";
import "/src/components/CharacterItem.css";

function CharacterItem({ name, onClick }) {
  return (
    <li className="CharacterItem">
      <button className="CharacterItem__btn" onClick={onClick}>
        {name}
        <span className="CharacterItem__btn-icon">
          <i className="ri-arrow-drop-right-fill"></i>
        </span>
      </button>
    </li>
  );
}

export default CharacterItem;
