import React from "react";

function AdditionalStats({
  selectedSequences,
  selectedProject,
  projectList,
  sequences,
  globalStatsActive,
}) {
  const getAverageEfficiency = () => {
    return (
      selectedSequences
        .filter((sequence) => {
          return sequence.efficiency !== null;
        })
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
  const getWordCount = () => {
    if (globalStatsActive) {
      return projectList
        .map((project) => project.content)
        .reduce((sum, project) => {
          return project.length + sum;
        }, 0);
    }
    return selectedProject.content.split(" ").length;
  };
  const getMostRecentProject = () => {};

  return (
    <div>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          padding: 0,
          justifyContent: "center"
        }}
      >
        <li style={{ marginRight: "20px" }}>
          Average Efficiency: {getAverageEfficiency().toFixed(2)}%
        </li>
        <li style={{ marginRight: "20px" }}>
          Most Efficient Sequence:{" "}
          {getMostEfficientSequence() !== null
            ? getMostEfficientSequence().toFixed(2) + "%"
            : "N/A"}{" "}
          on{" "}
          {selectedSequences.length > 0
            ? selectedSequences
                .filter(
                  (sequence) =>
                    sequence.efficiency === getMostEfficientSequence()
                )
                .pop().date
            : "N/A"}
        </li>
        <li>Word Count: {getWordCount()}</li>
      </ul>
      {/* <h2>Current Word Count: {getWordCount()}</h2>
      <h2>Most recent project: {getMostRecentProject()}</h2> */}
      <div></div>
    </div>
  );
}

export default AdditionalStats;
