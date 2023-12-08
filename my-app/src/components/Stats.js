import React from "react";
import TotalTime from "./TotalTime";
import Graph from "./Graph";
import AdditionalStats from "./AdditionalStats";

function Stats({
  selectedSequences,
  selectedProject,
  projectList,
  sequences,
  globalStatsActive,
}) {
  return (
    <div>
      <div className="total_time">
        <TotalTime
          selectedSequences={selectedSequences}
          selectedProject={selectedProject}
        />
      </div>
      <div className="additional_stats">
        <AdditionalStats
          globalStatsActive={globalStatsActive}
          selectedSequences={selectedSequences}
          selectedProject={selectedProject}
          projectList={projectList}
          sequences={sequences}
        />
      </div>
      <div className="chart">
        <Graph
          selectedSequences={selectedSequences}
          selectedProject={selectedProject}
        />
      </div>
    </div>
  );
}

export default Stats;
