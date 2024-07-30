import React from "react";
import { useState } from "react";
import Title from "../components/Title";
import Quote from "../components/Quote";
import EpisodeItem from "../components/EpisodeItem";
import Logo from "../components/Logo";
import episodes from "/src/data/episodes.json";
import "/src/pages/Episodes.css";

function Episodes() {
  const [selectedEpisode, setSelectedEpisode] = useState(episodes[0]);

  return (
    <main className="Episodes">
      <div className="Episodes__heading">
        <Title text={"Episodes"} />
        <Quote
          quote={'"What?!"'}
          reference={"Barry Berkman, Barry, Season 2: What?!"}
        />
      </div>
      <section className="Episodes__content">
        <div className="Episodes__content__details">
          <h2 className="Episodes__content__details-title">
            "{selectedEpisode.title}"
          </h2>

          <ul className="Episodes__content__details-list">
            <li className="Episodes__content__details-list-item">
              <span>Season</span> {selectedEpisode.season}
            </li>
            <li className="Episodes__content__details-list-item">
              <span>Episode</span> {selectedEpisode.episode}
            </li>
            <li className="Episodes__content__details-list-item">
              <span>Directed by</span> {selectedEpisode.directedBy}
            </li>
            <li className="Episodes__content__details-list-item">
              <span>Written by</span> {selectedEpisode.writtenBy}
            </li>
            <li className="Episodes__content__details-list-item">
              <span>Original air date</span> {selectedEpisode.airDate}
            </li>
          </ul>

          <p className="Episodes__content__details-summary">
            {selectedEpisode.summary}
          </p>

          <img
            className="Episodes__content__details-image"
            src={`/assets/episodes/s${selectedEpisode.season}-e${selectedEpisode.episode}.png`}
            alt=""
          />
        </div>

        <div className="Episodes__content__listing">
          <ul className="Episodes__content__listing-list">
            {episodes.map((item) => (
              <EpisodeItem
                key={item.id}
                data={item}
                onClick={() => setSelectedEpisode(item)}
              />
            ))}
          </ul>
          <Logo />
        </div>
      </section>
    </main>
  );
}

export default Episodes;
