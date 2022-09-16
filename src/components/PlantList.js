import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onFavoriteClick, onUnfavoriteClick }) {
  const plantCards = plants.map((plant) => {
    return (
      <PlantCard
        key={plant.id}
        plant={plant}
        onFavoriteClick={onFavoriteClick}
        onUnfavoriteClick={onUnfavoriteClick}
      />
    );
  });

  return (
    <div className="plantlist">
      <ul className="single-cards">{plantCards}</ul>
    </div>
  );
}

export default PlantList;
