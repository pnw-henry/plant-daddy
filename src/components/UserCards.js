import React from "react";

function UserCards({ plant, onDelete }) {
  const { id, name, image } = plant;
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
        <h1>{name}</h1>
        <img src={image} alt={name} />
        <br></br>
        <button className="delete-button" onClick={handleDelete}>
          Remove
        </button>
      </li>
    </div>
  );
}

export default UserCards;
