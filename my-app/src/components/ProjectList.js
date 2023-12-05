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
  const handleDelete = (index) => {
    const updateComp = [...projectComponents];
    updateComp.splice(index, 1);
    setProjectComponents(updateComp);
  };

  return (
    <div id="projectList">
      <div id="listBanner">
        <p>Projects</p>
        <button onClick={handleButtonClick}>+</button>
      </div>
      {projectComponents.map((component, index) => (
        <div key={index}>
          {component}
          <button id="delete" onClick={() => handleDelete(index)}>
            Delete Project
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
