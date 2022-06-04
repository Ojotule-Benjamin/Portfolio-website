import React from "react";
import Contact from "./component/contactsection/Contact";
import { Navbar } from "./component/navbar/Navbar";
import Projectsection from "./component/projectsection/Projectsection";
import Worksection from "./component/worksection/Worksection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Worksection />
      <Projectsection />
      <Contact />
    </div>
  );
};
export default App;
