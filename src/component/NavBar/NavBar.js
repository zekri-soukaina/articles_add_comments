import { NavLink } from "react-router-dom";
import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navBar">
      <div>
        <NavLink to="/">
          <h2>Home</h2>
        </NavLink>
      </div>
      <div>
        <NavLink to="/about">
          <h2>About</h2>
        </NavLink>
      </div>
    </div>
  );
}
