import React from "react";
import TotalTime from "./TotalTime";
import Graph from "./Graph";
import AdditionalStats from "./AdditionalStats";

function Stats() {
  return (
    <div id="stats">
      <h1>Total Time</h1>
      <TotalTime />
      <br></br>
      <h1>Additional Stats</h1>
      <AdditionalStats />
      <br></br>
      <h1>Efficiency Graph</h1>
      <Graph />
    </div>
  );
}

export default Stats;
