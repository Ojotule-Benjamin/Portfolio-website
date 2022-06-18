import React from "react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <span className="Nav-logo">Ojochoko.</span>
      <div className="Nav-items">
        <ul>
          <li>HOME</li>
          <li>WORK</li>
          <li>ABOUT ME</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="nav-toggle">
        <div className="bar"></div>
      </div>
    </div>
    // <div className="navbarContainer">
    //   <h4 className="navbarTitle">Ojochoko.</h4>
    //   <nav className="nav-items">
    //     <ul className="navbarList">
    //       <li>HOME</li>
    //       <li>WORK</li>
    //       <li>ABOUT ME</li>
    //       <li>CONTACT</li>
    //     </ul>
    //   </nav>
    // </div>
  );
};
