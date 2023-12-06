import React from "react";

function TotalTime({ selectedSequences }) {
  const getTotalTime = () => {
    return selectedSequences
      .map((sequence) => sequence.duration_seconds)
      .reduce((sum, val) => sum + val, 0);
  };
  return (
    <div>
      <h1>Pomodoro electedS</h1>
      <h2>
        {Math.floor(getTotalTime() / 60)}:
        {getTotalTime() % 60 < 10
          ? "0" + (getTotalTime() % 60)
          : getTotalTime() % 60}{" "}
        minutes total
      </h2>
    </div>
  );
}

export default TotalTime;
