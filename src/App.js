import React from "react";
import { Navbar } from "./component/navbar/Navbar";
import Projectsection from "./component/projectsection/Projectsection";
import Worksection from "./component/worksection/Worksection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Worksection />
      <Projectsection />
    </div>
  );
};
export default App;
