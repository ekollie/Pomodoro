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
  const getRGB = (opacity = 1) => {
    switch (category) {
      case "coding":
        return `rgb(222, 65, 64, ${opacity})`;
      case "writing":
        return `rgb(0, 171, 240, ${opacity})`;
      case "creative":
        return `rgb(255, 255, 0, ${opacity})`;
      default:
        return `rgb(255,255,255,${opacity})`;
    }
  };
  const getColor = () => {
    switch (category) {
      case "coding":
        return `red`;
      case "writing":
        return `blue`;
      case "creative":
        return `yellow`;
      default:
        return `white`;
    }
  };

  return (
    <div>
      <div
        style={{
          boxShadow: `0px 1px 1px ${getColor()}, 1px 0px 10px white`,
          backgroundColor: getRGB(0.0),
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
