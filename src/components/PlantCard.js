import React, { useState, useEffect } from "react";

function PlantCard({ plant, onFavoriteClick, onUnfavoriteClick }) {
  const { id, name, image, light, watering, safety, favorite } = plant;
  const API = `http://localhost:3001/plants/${id}`;
  let updatedFavorite;

  function handleFavClick() {
    updatedFavorite = true;
    console.log("name of fave", name);
    onFavoriteClick(plant);
  }

  function handleUnfavClick() {
    updatedFavorite = false;
    console.log("name of unfav", name);
    onUnfavoriteClick(plant);
  }

  fetch(API, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      favorite: updatedFavorite,
    }),
  });

  console.log("favorite value", plant.favorite);

  return (
    <div>
      <li className="plant-card">
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <br></br>
        <button onClick={handleFavClick}>Add to Favorites!</button>
        <button onClick={handleUnfavClick}>Remove from Favorites!</button>
        <p>Light Needs: {light}</p>
        <p>Watering Needs: {watering}</p>
        <p>Pet Safety: {safety}</p>
      </li>
    </div>
  );
}

export default PlantCard;
