import React, { useState, useEffect } from "react";

function AdditionalStats({
  selectedSequences,
  selectedProject,
  projectList,
  sequences,
}) {
  const getAverageEfficiency = () => {
    return (
      selectedSequences
        .map((sequence) => {
          return sequence.efficiency;
        })
        .reduce((sum, sequence) => {
          return sum + sequence;
        }, 0) / selectedSequences.length
    );
  };
  const getMostEfficientSequence = () => {
    return selectedSequences
      .map((sequence) => {
        return sequence.efficiency;
      })
      .sort((a, b) => a - b)
      .pop();
  };
  const getWordCount = () => { };
  const getMostRecentProject = () => { };

  return (
    <div>
      <h2>Average Efficiency: {getAverageEfficiency().toFixed(2)}%</h2>
      <h2>
        Most Efficient Sequence: {getMostEfficientSequence().toFixed(2)}% ||{" "}
        {
          selectedSequences
            .filter((sequence) => {
              return sequence.efficiency == getMostEfficientSequence();
            })
            .pop().date
        }
      </h2>
      {/* <h2>Current Word Count: {getWordCount()}</h2>
      <h2>Most recent project: {getMostRecentProject()}</h2> */}
      <div></div>
    </div>
  );
}

export default AdditionalStats;
