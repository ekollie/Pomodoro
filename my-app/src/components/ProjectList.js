import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useEffect } from 'react'

const url = 'http://localhost:3000/projects'
const newProject = {
  id: "",
  project_id: "",
  project_name: "New Project",
  project_category: "",
  project_content: "",
}

function ProjectList() {
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {

        setProjectComponents(data.map((project, index) => (
          <ProjectCard key={index} project={project} />

        )));
      })

      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const [projectComponents, setProjectComponents] = useState([]);



  const handleButtonClick = () => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProject),
    })
      .then(res => res.json())
      .then(data => {
        setProjectComponents([
          ...projectComponents,
          <ProjectCard key={projectComponents.length} project={data} />,
        ]);
      })



    setProjectComponents([
      ...projectComponents,
      <ProjectCard key={projectComponents.length} project={newProject} />,
    ]);

  };

  const handleDelete = (index) => {
    const updateComp = [...projectComponents];
    updateComp.splice(index, 1);
    setProjectComponents(updateComp);
    fetch(`${url}/${index}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers if needed
      },
    })


  };

  return (
    <div id="projectList">

      <div id="listBanner">
        <img src='./logo192.png' alt='logo' className='App-logo' />
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
