import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  console.log(plants);
  const plantCards = plants.map((plant) => {
    return <PlantCard key={plant.id} plant={plant} />;
  });

  return (
    <div className="plantlist">
      <ul className="single-cards">{plantCards}</ul>
    </div>
  );
}

export default PlantList;
