import React from "react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <h4 className="navbarTitle">Ojochoko.</h4>
      <nav>
        <ul className="navbarList">
          <li>
            <a href="/home">HOME</a>
            <a href="/work">WORK</a>
            <a href="/aboutme">ABOUT ME</a>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
