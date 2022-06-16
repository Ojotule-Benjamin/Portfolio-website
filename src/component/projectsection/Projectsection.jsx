import calculator from "./Calculator.png";
import musicLyrics from "./musicLyrics.png";
import "./projectsection.css";
import todo from "./todos.png";
import weatherApp from "./weatherApp.png";
import newYearCountdown from "./newYear.png";

const Projectsection = () => {
  return (
    <div className="projectdivcontainer">
      <h2 className="projectsTitle">Selected Projects</h2>
      <div className="projectsContainer">
        <img className="projectsImg" src={musicLyrics} alt="" />
        <div className="projectsInnerContainer">
          <h3 id="projectsTitleInner">Music Lyrics App</h3>
          <p>
            {" "}
            Music Lyrics app was created to help users search for lyrics for
            their favorite music.
          </p>
          <button>
            <a href="#work">VIEW APPLICATION</a>
          </button>
        </div>
      </div>

      <div className="projectsContainer" id="projectItem2">
        <img className="projectsImg" src={weatherApp} alt="" />
        <div className="projectsInnerContainer">
          <h3 id="projectsTitleInner">Weather App</h3>
          <p>
            This application was created to help users check the weather
            condition of a particular place at any point in time.
          </p>
          <button>
            <a href="#work">VIEW APPLICATION</a>
          </button>
        </div>
      </div>

      <div className="projectsContainer">
        <img className="projectsImg" src={calculator} alt="" />
        <div className="projectsInnerContainer">
          <h3 id="projectsTitleInner">Basic Calculator App</h3>
          <p>
            This is a simple basic calculator similar to a small handheld
            calculator. Use this basic calculator for math with addition,
            subtraction, division and multiplication.
          </p>
          <button>
            <a href="#work">VIEW APPLICATION</a>
          </button>
        </div>
      </div>
      <div className="projectsContainer">
        <img className="projectsImg" src={todo} alt="" />
        <div className="projectsInnerContainer">
          <h3 id="projectsTitleInner">Todo App</h3>
          <p>
            Become focused, organized, and calm with this todo list application.
            Add your tasks.Organize your life everyday.
          </p>
          <button>
            <a href="#work">VIEW APPLICATION</a>
          </button>
        </div>
      </div>
      <div className="projectsContainer">
        <img className="projectsImg" src={newYearCountdown} alt="" />
        <div className="projectsInnerContainer">
          <h3 id="projectsTitleInner">New Year Countdown App</h3>
          <p>
            This application help user countdown to the New Year. Showing days,
            hours, minutes and seconds ticking down to 0.
          </p>
          <button>
            <a href="#work">VIEW APPLICATION</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projectsection;
