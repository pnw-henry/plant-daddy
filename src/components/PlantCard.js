import React, { useState } from "react";

function PlantCard({ plant, onFavoriteClick, onUnfavoriteClick }) {
  const { id, name, image, light, watering, safety, favorite } = plant;

  function handleFavClick() {
    plant.favorite = true;
    onFavoriteClick(plant);
  }

  function handleUnfavClick() {
    plant.favorite = false;
    onUnfavoriteClick(plant);
  }

  return (
    <div className="plant-card">
      <li className="plant-li">
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <br></br>
        <div className="button">
          {favorite ? (
            <button onClick={handleUnfavClick} className="favorite">
              ♡
            </button>
          ) : (
            <button onClick={handleFavClick} className="Unfavorite">
              💚
            </button>
          )}
        </div>
        <article>
          <p>Light Needs: {light}</p>
          <p>Watering Needs: {watering}</p>
          <p>Pet Safety: {safety}</p>
        </article>
      </li>
    </div>
  );
}

export default PlantCard;
