import React from "react";

function ProjectName({ selectedProject }) {
  return (
    <div>
      <div id="projectName">
        <h1>
          {selectedProject[0].id < 0 ? "Global Stats" : selectedProject[0].name}
        </h1>
      </div>
    </div>
  );
}
export default ProjectName;
