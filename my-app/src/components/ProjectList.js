import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({
  handleSelect,
  handleDelete,
  addProject,
  showGlobalStats,
  projectList,
}) {
  return (
    <div id="projectList">
      <div id="listBanner">
        <div id="clock-container">
          <img src="PomoLogoTomo.png" alt="logo" className="clock-background" />
          <img src="PomoLogoHour.png" alt="logo" className="clock-hour-hand"/>
          <img src="PomoLogoMin.png" alt="logo" className="clock-min-hand"/>
        </div>
        <p>Projects</p>
        <button onClick={addProject}>+</button>
        {/* <img
          onClick={showGlobalStats}
          src="Globe.png"
          alt="globe"
          height="50px"
          width="50px"
        /> */}
      </div>
      {projectList.map((project) => {
        return (
          <ProjectCard
            handleSelect={handleSelect}
            handleDelete={handleDelete}
            key={project.id}
            {...project}
          />
        );
      })}
    </div>
  );
}

export default ProjectList;
