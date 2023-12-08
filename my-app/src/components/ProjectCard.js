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
      state: { name, id, content },
    });
  };
  const getRGB = () => {
    switch (category) {
      case "red":
        return "rgb(255, 0, 0, 0.1)";
      case "blue":
        return "rgb(50, 50, 255, 0.1)";
      case "yellow":
        return "rgb(255, 255, 0, 0.1)";
      default:
        return "rgb(255,255,255,0.1)";
    }
  };
  return (
    <div>
      <div
        style={{
          boxShadow: `0px 1px 5px ${category}, 1px 0px 5px white`,
          backgroundColor: getRGB(),
        }}
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
