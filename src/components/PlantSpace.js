import React from "react";
import PlantList from "./PlantList";

function PlantSpace({ plants, onFavoriteClick, onUnfavoriteClick }) {
  return (
    <div className="plantspace">
      <PlantList
        plants={plants}
        onFavoriteClick={onFavoriteClick}
        onUnfavoriteClick={onUnfavoriteClick}
      />
    </div>
  );
}

export default PlantSpace;
