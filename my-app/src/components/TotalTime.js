import React from "react";

function TotalTime({ selectedSequences, selectedProject }) {
  const getTotalTime = () => {
    return selectedSequences
      .map((sequence) => sequence.duration_seconds)
      .reduce((sum, val) => sum + val, 0);
  };
  return (
    <div>
      <h1>{selectedProject.id < 0 ? "Global Stats" : selectedProject.name}</h1>
      <h2>
        {Math.floor(getTotalTime() / 60)}:
        {getTotalTime() % 60 < 10
          ? "0" + (getTotalTime() % 60)
          : getTotalTime() % 60}{" "}
        minutes in total
      </h2>
    </div>
  );
}

export default TotalTime;
