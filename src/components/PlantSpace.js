import React, { useState } from "react";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantSpace({ plants, onFavoriteClick, onUnfavoriteClick }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="plantspace">
      <Search term={searchTerm} onSearch={setSearchTerm} />
      <PlantList
        plants={filteredPlants}
        onFavoriteClick={onFavoriteClick}
        onUnfavoriteClick={onUnfavoriteClick}
      />
    </div>
  );
}

export default PlantSpace;
