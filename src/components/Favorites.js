import React from "react";
import PlantList from "./PlantList";

function Favorites({ plants, onUnfavoriteClick }) {
  console.log("favorite list inside favorite", plants);
  return (
    <div className="Favorites-cards">
      <PlantList plants={plants} onUnfavoriteClick={onUnfavoriteClick} />
    </div>
  );
}

export default Favorites;
