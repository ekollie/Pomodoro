import React, { useState, useEffect } from "react";
import ProjectList from "./ProjectList";
import ProjectName from "./ProjectName";
import Stats from "./Stats";
import { NavLink } from "react-router-dom";

function MainPage() {
  // Initial Fetch
  useEffect(() => {
    fetch(url + "/projects")
      .then((res) => res.json())
      .then((projects) => {
        setProjectList(projects);
      });
    fetch(url + "/sequences")
      .then((res) => res.json())
      .then((sequences) => {
        setSequences(sequences);
        setSelectedSequences(sequences);
      });
  }, []);

  // States
  const url = "http://localhost:3001";
  const [projectList, setProjectList] = useState([
    {
      id: -1,
      name: "Loading name",
      category: "Loading Category",
      content: "Loading Content",
    },
  ]);
  const [selectedSequences, setSelectedSequences] = useState([
    {
      id: -1,
      project_id: 0,
      efficiency: 0,
      duration_seconds: 0,
      date: "No data",
    },
  ]);
  const [sequences, setSequences] = useState([
    {
      id: -1,
      project_id: 0,
      efficiency: 0,
      duration_seconds: 0,
      date: "No data",
    },
  ]);
  const [selectedProject, setSelectedProject] = useState({
    id: -1,
    name: "",
    category: "",
    content: "",
  });
  const [globalStatsActive, setGlobalStatsActive] = useState(true);

  // Handler Functions
  const addProject = () => {
    fetch(url + "/projects", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: "new project",
        category: "new category",
        content: "",
      }),
    })
      .then((res) => res.json())
      .then((newProject) => {
        setProjectList((prev) => [...prev, newProject]);
      });
  };

  const handleDelete = (e) => {
    if (
      window.confirm("Would you like to delete this project and all its data?")
    ) {
      fetch(url + `/projects/${e.target.value}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          fetch(url + "/projects")
            .then((res) => res.json())
            .then((projects) => {
              setProjectList(projects);
            })
            .then(() => {
              sequences
                .filter((sequence) => {
                  return sequence.project_id == e.target.value;
                })
                .forEach((sequence) => {
                  fetch(url + `/sequences/${sequence.id}`, {
                    method: "DELETE",
                  }).then((res) => {
                    if (res.ok) {
                      console.log("delete successful");
                    } else {
                      alert("error deleting project");
                    }
                  });
                });
            });
        } else {
          alert("Delete failed", res);
        }
      });
    }
  };

  const handleSelect = (e) => {
    setSelectedSequences(() => {
      let sequenceArr = sequences.filter((sequence) => {
        return sequence.project_id == e.target.value;
      });
      if (sequenceArr.length == 0) {
        return [
          {
            id: -1,
            project_id: 0,
            efficiency: 0,
            duration_seconds: 0,
            date: "2023-12-5",
          },
        ];
      } else {
        return sequenceArr;
      }
    });
    setSelectedProject(() => {
      setGlobalStatsActive(false);
      return projectList
        .filter((project) => {
          return project.id == e.target.value;
        })
        .pop();
    });
    console.log(selectedProject);
  };

  const showGlobalStats = () => {
    setSelectedSequences(sequences);
    setGlobalStatsActive(true);
    setSelectedProject({
      id: -1,
      name: "",
      category: "white",
      content: "",
    });
  };

  return (
    <div class="container">
      <div class="header">
        <ProjectName selectedProject={selectedProject} />
      </div>
      <div class="project_list" id="container">
        <ProjectList
          projectList={projectList}
          handleSelect={handleSelect}
          handleDelete={handleDelete}
          addProject={addProject}
          showGlobalStats={showGlobalStats}
        />
        <div class="stats" id="statsContainer">
          <Stats
            globalStatsActive={globalStatsActive}
            selectedSequences={selectedSequences}
            selectedProject={selectedProject}
            projectList={projectList}
            sequences={sequences}
          />
        </div>
        {/* <NavLink to="./snake">Snake</NavLink>
            <NavLink to="./texteditor">TextEditor</NavLink> */}
      </div>
    </div>
  );
}

export default MainPage;
