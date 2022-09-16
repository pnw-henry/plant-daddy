import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav-bar">
      <div className="navigation">
        <br></br>
        <NavLink
          exact
          to="/"
          className={(isActive) =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
          activeClassName="selected"
        >
          Home
        </NavLink>
        <NavLink
          to="/plantspace"
          className={(isActive) =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
          activeClassName="selected"
        >
          A-Z Plants
        </NavLink>
        <NavLink
          to="/mylist"
          className={(isActive) =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
          activeClassName="selected"
        >
          My List
        </NavLink>
        <NavLink
          to="/favorites"
          className={(isActive) =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
          activeClassName="selected"
        >
          Favorites
        </NavLink>
      </div>
      <br></br>
    </div>
  );
}

export default Navigation;
