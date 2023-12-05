import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  const [projectComponents, setProjectComponents] = useState([]);

  const handleButtonClick = () => {
    setProjectComponents([
      ...projectComponents,
      <ProjectCard key={projectComponents.length} />,
    ]);
  };

  return (
    <div id="projectList">
      <div id="listBanner">
        <p>Projects</p>
        <button onClick={handleButtonClick}>+</button>
      </div>
      {projectComponents.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
    </div>
  );
}

export default ProjectList;
