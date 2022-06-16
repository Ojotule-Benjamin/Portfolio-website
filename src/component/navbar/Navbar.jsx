import "./navbar.css";
import passport from "./passport.jpg";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <nav>
        <img src={passport} alt="" className="image" />
        <h4 className="navbarTitle">Oluwatobi Olukayode</h4>
      </nav>
    </div>
  );
};
