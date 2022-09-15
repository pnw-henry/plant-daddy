import React from "react";
import UserCards from "./UserCards";

function UserList({ plants, onDelete }) {
  const plantCards = plants.map((plant) => {
    return <UserCards key={plant.id} plant={plant} onDelete={onDelete} />;
  });
  return (
    <div className="user-list">
      <ul className="single-cards">{plantCards}</ul>
    </div>
  );
}

export default UserList;
