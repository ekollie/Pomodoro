import React from "react";

function TotalTime({ sequences }) {
  const getTotalTime = () => {
    return sequences
      .map((sequence) => sequence.duration_seconds)
      .reduce((sum, val) => sum + val, 0);
  };
  return (
    <div>
      <h1>Total Time</h1>
      <h2>
        {Math.floor(getTotalTime() / 60)}:
        {getTotalTime() % 60 < 10
          ? "0" + (getTotalTime() % 60)
          : getTotalTime() % 60}
      </h2>
    </div>
  );
}

export default TotalTime;
