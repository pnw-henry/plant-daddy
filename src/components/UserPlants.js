import React, { useState, useEffect } from "react";
import UserList from "./UserList";

function UserPlants() {
  const [plantForm, setPlantForm] = useState({
    name: "",
    image: "",
    light: "",
    water: "",
    safety: "",
  });
  const [userPlants, setUserPlants] = useState([]);

  const API = "http://localhost:3001/userplants";

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((plants) => {
        setUserPlants(plants);
      });
  }, []);

  function handleChange(e) {
    setPlantForm({
      ...plantForm,
      [e.target.name]: e.target.value,
    });
  }

  function handleDelete(id) {
    const updatedUserPlants = userPlants.filter((plant) => plant.id !== id);
    setUserPlants(updatedUserPlants);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newPlant = {
      name: plantForm.name,
      image: plantForm.image,
      light: plantForm.light,
      water: plantForm.water,
      safety: plantForm.safety,
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
            name="name"
            type="text"
            placeholder="Name"
            className="plant-name"
            value={plantForm.name}
            onChange={handleChange}
          />
          <br></br>
          <input
            name="image"
            type="text"
            placeholder="Add image URL"
            className="plant-image"
            value={plantForm.image}
            onChange={handleChange}
          />
          <br></br>
          <input
            name="light"
            type="text"
            placeholder="Light Requirements"
            className="plant-light"
            value={plantForm.light}
            onChange={handleChange}
          />
          <br></br>
          <input
            name="water"
            type="text"
            placeholder="Water Requirements"
            className="plant-water"
            value={plantForm.water}
            onChange={handleChange}
          />
          <br></br>
          <input
            name="safety"
            type="text"
            placeholder="Pet Safety"
            className="plant-safety"
            value={plantForm.safety}
            onChange={handleChange}
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
