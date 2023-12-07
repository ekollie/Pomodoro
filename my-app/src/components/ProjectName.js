import React from "react";

function ProjectName({ selectedProject }) {
  return (
    <div>
      <div id="projectName">
        <h1>Pomodoro</h1>
        <img id="header-logo" src="PomoLogo.png" alt="logo"/>
        {/* <h3>
          {selectedProject.id < 0 ? "Global Stats" : selectedProject.name}
        </h3> */}
      </div>
    </div>
  );
}
export default ProjectName;
