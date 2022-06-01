import React from "react";
import "./projectsection.css";

const Projectsection = () => {
  return (
    <div className="projectdivcontainer">
      <h2 className="projectsTitle">Selected Projects</h2>
      <div className="projectsContainer">
        <img className="projectsImg" src="../../../asset/1.png" alt="" />
        <div className="projectsInnerContainer">
          <h3 id="projectsTitleInner">Feedback Owl</h3>
          <p>
            Feedback Owl was created to help independent developers get direct
            feedback from users who download their app and further manage the
            feedback received in a way that can be acted upon.
          </p>
          <button>
            <a href="#work">VIEW CASESTUDY</a>
          </button>
        </div>
      </div>

      <div className="projectsContainer">
        <img className="projectsImg" src="../../../asset/2.png" alt="" />
        <div className="projectsInnerContainer">
          <h3 id="projectsTitleInner">AM Realty</h3>
          <p>
            AM realty is a real estate firm in Nigeria that makes real estate
            investments simple and accessible to everyone by offering a low
            barrier to entry for people who want to acquire properties for
            either their personal use or investment purposes.
          </p>
          <button>
            <a href="#work">VIEW CASESTUDY</a>
          </button>
        </div>
      </div>

      <div className="projectsContainer">
        <img className="projectsImg" src="../../../asset/3.png" alt="" />
        <div className="projectsInnerContainer">
          <h3 id="projectsTitleInner">CurrentSee</h3>
          <p>
            CurrentSee is an app created to help people keep track of their
            money flow and stay on top of their expenses.
          </p>
          <button>
            <a href="#work">VIEW CASESTUDY</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projectsection;
