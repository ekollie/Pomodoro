import React from "react";

function TotalTime({ selectedSequences, selectedProject }) {
  const getTotalTime = () => {
    return selectedSequences
      .map((sequence) => sequence.duration_seconds)
      .reduce((sum, val) => sum + val, 0);
  };
  return (
    <div>
      <span>
        {selectedProject.id < 0 ? "Global Stats" : selectedProject.name}
        {" || "}
      </span>
      <span>
        {Math.floor(getTotalTime() / 60)}:
        {getTotalTime() % 60 < 10
          ? "0" + (getTotalTime() % 60)
          : getTotalTime() % 60}{" "}
        minutes in total
      </span>
    </div>
  );
}

export default TotalTime;
