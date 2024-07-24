import React from "react";
import { useState, useEffect } from "react";
import Title from "../components/Title";
import Quote from "../components/Quote";
import CharacterItem from "../components/CharacterItem";
import Logo from "../components/Logo";
import "/src/pages/Characters.css";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/src/data/characters.json")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
        setSelectedCharacter(data[0]);
        setLoading(false);
      });
  }, []);

  return (
    <main className="Characters">
      <div className="Characters__heading">
        <Title text={"Characters"} />
        <Quote
          quote={'"Like a good leader, I\'m gonna get us some Ubers."'}
          reference={"NoHo Hank, Barry, Season 2: The Audition "}
        />
      </div>

      {loading ? (
        <div className="Characters__loading">
          Waiting...
          <img
            className="Characters__loading-image"
            src="/assets/loading-waiting.png"
            alt="four men waiting on a bench"
          />
        </div>
      ) : (
        <div className="Characters__content">
          <section className="Characters__details">
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
          </section>

          <section className="Characters__listing">
            <ul className="Characters__listing-list">
              {characters.map((item) => (
                <CharacterItem
                  key={item.id}
                  name={item.name}
                  onClick={() => setSelectedCharacter(item)}
                />
              ))}
            </ul>
            <Logo />
          </section>
        </div>
      )}
    </main>
  );
}

export default Characters;
