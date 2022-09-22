import React, { useState, useEffect } from "react";
import UserList from "./UserList";

function UserPlants() {
  const [plantName, setPlantName] = useState([]);
  const [plantImage, setPlantImage] = useState([]);
  const [plantLight, setPlantLight] = useState([]);
  const [plantWater, setPlantWater] = useState([]);
  const [plantSafety, setPlantSafety] = useState([]);
  const [userPlants, setUserPlants] = useState([]);

  const API = "http://localhost:3001/userplants";

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((plants) => {
        setUserPlants(plants);
      });
  }, []);

  function handleDelete(id) {
    const updatedUserPlants = userPlants.filter((plant) => plant.id !== id);
    setUserPlants(updatedUserPlants);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newPlant = {
      name: plantName,
      image: plantImage,
      light: plantLight,
      water: plantWater,
      safety: plantSafety,
    };

    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((r) => r.json())
      .then(() => {
        fetch(API)
          .then((r) => r.json())
          .then((plants) => {
            setUserPlants(plants);
          });
      });
  }

  return (
    <div className="user-plants">
      <div className="form-container">
        <h2>Add your own plant!</h2>
        <form className="new-plant-form" onSubmit={handleSubmit}>
          <input
            name="plant"
            type="text"
            placeholder="Name"
            className="plant-name"
            value={plantName}
            onChange={(e) => setPlantName(e.target.value)}
          />
          <br></br>
          <input
            name="image"
            type="text"
            placeholder="Add image URL"
            className="plant-image"
            value={plantImage}
            onChange={(e) => setPlantImage(e.target.value)}
          />
          <br></br>
          <input
            name="light"
            type="text"
            placeholder="Light Requirements"
            className="plant-light"
            value={plantLight}
            onChange={(e) => setPlantLight(e.target.value)}
          />
          <br></br>
          <input
            name="water"
            type="text"
            placeholder="Water Requirements"
            className="plant-water"
            value={plantWater}
            onChange={(e) => setPlantWater(e.target.value)}
          />
          <br></br>
          <input
            name="safety"
            type="text"
            placeholder="Pet Safety"
            className="plant-safety"
            value={plantSafety}
            onChange={(e) => setPlantSafety(e.target.value)}
          />
          <br></br>
          <button type="submit" className="submit-button">
            Add Plant!
          </button>
        </form>
      </div>
      <div className="user-plants-list">
        <UserList plants={userPlants} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default UserPlants;
