import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
