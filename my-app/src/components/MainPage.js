import React, { useState } from "react";
import ProjectList from "./ProjectList";
import ProjectName from "./ProjectName";
import Stats from "./Stats";
import ProjectCard from "./ProjectCard";
// import { NavLink } from "react-router-dom"

function MainPage() {
  const [selectedProject, setSelectedProject] = useState({});
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
  const handleSelect = (index) => {
    setSelectedProject([...projectComponents].splice(index, 1)[0]);
  };

  return (
    <div id="container">
      <ProjectName />
      <ProjectList
        projectComponents={projectComponents}
        handleSelect={handleSelect}
        handleDelete={handleDelete}
        handleButtonClick={handleButtonClick}
      />
      <Stats selectedProject={selectedProject} />
      {/* <NavLink to="./snake">Snake</NavLink>
            <NavLink to="./texteditor">TextEditor</NavLink> */}
    </div>
  );
}

export default MainPage;
