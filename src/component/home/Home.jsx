import React from "react";
import Contact from "../contactsection/Contact";
import Projectsection from "../projectsection/Projectsection";
import Worksection from "../worksection/Worksection";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <Worksection />
        <Projectsection />
        <Contact />
      </div>
    </>
  );
};
export default Home;
