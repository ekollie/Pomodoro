import React, { useState, useEffect } from "react";
import TotalTime from "./TotalTime";
import Graph from "./Graph";
import AdditionalStats from "./AdditionalStats";

function Stats({ selectedSequences, selectedProject, projectList, sequences }) {
  return (
    <div id="stats">
      <TotalTime
        selectedSequences={selectedSequences}
        selectedProject={selectedProject}
      />
      <Graph selectedSequences={selectedSequences} />
      <AdditionalStats
        selectedSequences={selectedSequences}
        selectedProject={selectedProject}
        projectList={projectList}
        sequences={sequences}
      />
    </div>
  );
}

export default Stats;
