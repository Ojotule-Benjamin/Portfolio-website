import React from "react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <h4 className="navbarTitle">Ojochoko.</h4>
      <nav>
        <ul className="navbarList">
          <li>HOME</li>
          <li>WORK</li>
          <li>ABOUT ME</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </div>
  );
};
