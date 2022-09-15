import React from "react";
import PlantList from "./PlantList";

function Favorites({ plants, onUnfavoriteClick }) {
  return (
    <div className="Favorites">
      <PlantList plants={plants} onUnfavoriteClick={onUnfavoriteClick} />
    </div>
  );
}

export default Favorites;
