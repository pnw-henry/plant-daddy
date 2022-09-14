import React from "react";

function UserCards({ plant }) {
  return (
    <div>
      <li className="user-plant">
        <h1>{plant.name}</h1>
        <img src={plant.image} alt={plant.name} />
      </li>
    </div>
  );
}

export default UserCards;
