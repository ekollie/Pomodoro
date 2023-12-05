import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({
  handleSelect,
  handleDelete,
  handleButtonClick,
  projectComponents,
}) {
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
          <button onClick={handleSelect(index)}>Stats</button>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
