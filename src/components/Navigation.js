import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const linkStyles = {
    display: "inline",
    padding: "8px",
    margin: "0",
    background: "gray",
    textDecoration: "none",
    color: "white",
  };
  return (
    <div className="nav-bar">
      <div className="navigation">
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{ background: "green" }}
        >
          Home
        </NavLink>
        <NavLink
          to="/plantspace"
          exact
          style={linkStyles}
          activeStyle={{ background: "green" }}
        >
          A-Z Plants
        </NavLink>
        <NavLink
          to="/mylist"
          exact
          style={linkStyles}
          activeStyle={{ background: "green" }}
        >
          My List
        </NavLink>
        <NavLink
          to="/favorites"
          exact
          style={linkStyles}
          activeStyle={{ background: "green" }}
        >
          💚
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
