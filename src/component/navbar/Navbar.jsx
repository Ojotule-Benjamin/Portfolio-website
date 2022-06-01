import React from "react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <h4 className="navbarTitle">Ojochoko.</h4>
      <ul className="navbarList">
        <li>
          <a href="#home">HOME</a>
          <a href="#home">WORK</a>
          <a href="#home">ABOUT ME</a>
          <a href="#home">CONTACT</a>
        </li>
      </ul>
    </div>
  );
};
