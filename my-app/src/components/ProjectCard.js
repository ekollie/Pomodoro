import React, { useState } from "react";

function ProjectCard() {
  const handleClick = (e) => {
    // handler that checks for a click - nav link
  };

  return (
    <div onClick={handleClick} onCid="card">
      <p>Project card</p>
    </div>
  );
}

export default ProjectCard;
