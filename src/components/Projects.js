import React from "react";
import "../styles/Projects.css";
import "../fonts/Fonts.css";
import CardsProjects from "./CardsProjects";

function Projects() {
  return (
    <div className="main">
      <h1>Nos médias & projets</h1>
      <CardsProjects />
    </div>
  );
}

export default Projects;
