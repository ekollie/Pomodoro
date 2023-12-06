import React from "react";

function ProjectName({ selectedProject }) {
  return (
    <div>
      <div id="projectName">
        <h1>
          {selectedProject.id < 0 ? "Global Stats" : selectedProject.name}
        </h1>
      </div>
    </div>
  );
}
export default ProjectName;
