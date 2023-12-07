import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectCard({
  content,
  name,
  id,
  handleDelete,
  handleSelect,
  category,
}) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/projects/${id}/texteditor`, {
      state: { name, id, content, category },
    });
  };

  return (
    <div>
      <div
        style={{ border: `2px solid ${category}` }}
        id="card"
        onClick={handleNavigate}
      >
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
