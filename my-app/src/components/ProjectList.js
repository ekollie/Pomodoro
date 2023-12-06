import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({ handleSelect, handleDelete, addProject, projectList }) {
  return (
    <div id="projectList">
      <div id="listBanner">
        <p>Projects</p>
        <button onClick={addProject}>+</button>
      </div>
      {projectList.map((project) => (
        <ProjectCard
          handleSelect={handleSelect}
          handleDelete={handleDelete}
          key={project.id}
          {...project}
        />
      ))}
    </div>
  );
}

export default ProjectList;
