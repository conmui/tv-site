import React from "react";
import EpisodeItem from "../components/EpisodeItem";

function SeasonItem({ season, episodeList }) {
  return (
    <li>
      Season {season}
      <ul>
        {episodeList.map((item) => (
          <EpisodeItem key={item.id} data={item} />
        ))}
      </ul>
    </li>
  );
}

export default SeasonItem;
