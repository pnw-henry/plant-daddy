import React from "react";

function PlantCard({ plant }) {
  console.log(plant);
  const { name, image, light, watering, safety } = plant;
  console.log(image);

  return (
    <div>
      <li className="plant-card">
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>Light Needs: {light}</p>
        <p>Watering Needs: {watering}</p>
        <p>Pet Safety: {safety}</p>
      </li>
    </div>
  );
}

export default PlantCard;
