import React from "react";
import { useState } from "react";
import Title from "../components/Title";
import Quote from "../components/Quote";
import CharacterItem from "../components/CharacterItem";
import Logo from "../components/Logo";
import characters from "/src/data/characters.json";
import "/src/pages/Characters.css";

function Characters() {
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [open, setOpen] = useState(false);

  const handleCharacter = (character) => {
    setSelectedCharacter(character);
    setOpen(true);
  };

  return (
    <main className="Characters">
      <div className="Characters__heading">
        <Title text={"Characters"} />
        <Quote
          quote={'"Like a good leader, I\'m gonna get us some Ubers."'}
          reference={"NoHo Hank, Barry, Season 2: The Audition "}
        />
      </div>

      <div className="Characters__content">
        <section className="Characters__listing">
          <ul className="Characters__listing-list">
            {characters.map((item) => (
              <CharacterItem
                key={item.id}
                name={item.name}
                imgSrc={item.imgSrc}
                onClick={() => handleCharacter(item)}
              />
            ))}
          </ul>
          <Logo />
        </section>

        <section className={`Characters__details ${open ? "open" : ""}`}>
          <div className="Characters__details-content">
            <button
              className="Characters__details-btn"
              onClick={() => setOpen(false)}
            >
              <i className="ri-close-large-fill"></i>
            </button>
            <h2 className="Characters__details-name">
              {selectedCharacter.name}
            </h2>
            <p className="Characters__details-description">
              {selectedCharacter.description}
            </p>
            <img
              className="Characters__details-image"
              src={`/assets/characters/${selectedCharacter.imgSrc}`}
              alt=""
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Characters;
