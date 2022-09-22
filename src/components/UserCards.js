import React from "react";

function UserCards({ plant, onDelete }) {
  const { id, name, image, light, water, safety } = plant;
  const API = `http://localhost:3001/userplants/${id}`;

  function handleDelete() {
    fetch(API, {
      method: "DELETE",
    });

    onDelete(id);
  }
  return (
    <div className="user-card">
      <li>
        <h2>
          <strong>{name}</strong>
        </h2>
        <img src={image} alt={name} />
        <article>
          <p>Light Needs: {light}</p>
          <p>Watering Needs: {water}</p>
          <p>Pet Safety: {safety}</p>
        </article>
        <br></br>
        <button className="delete-button" onClick={handleDelete}>
          Remove
        </button>
      </li>
    </div>
  );
}

export default UserCards;
