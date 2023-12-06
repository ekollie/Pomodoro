import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextEditor from "./TextEditor";
// import routes from "./routes.js";

function ProjectCard({ content, name, id, handleDelete, handleSelect }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/projects/${id}/texteditor`, {
      state: { name, id, content },
    });
  };
  return (
    <div>
      <div id="card" onClick={handleNavigate}>
        <h3>{name}</h3>
      </div>
      <button value={id} id="delete" onClick={handleDelete}>
        Delete Project
      </button>
      <button value={id} onClick={handleSelect}>
        Stats
      </button>
    </div>
  );
}

export default ProjectCard;
