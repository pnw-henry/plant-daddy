import React, { useState } from "react";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantSpace({ plants, onFavoriteClick, onUnfavoriteClick }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const sortedPlants = [...filteredPlants].sort((plant1, plant2) => {
    return plant1.name.localeCompare(plant2.name);
  });

  return (
    <div className="plantspace">
      <Search term={searchTerm} onSearch={setSearchTerm} />
      <PlantList
        plants={sortedPlants}
        onFavoriteClick={onFavoriteClick}
        onUnfavoriteClick={onUnfavoriteClick}
      />
    </div>
  );
}

export default PlantSpace;
