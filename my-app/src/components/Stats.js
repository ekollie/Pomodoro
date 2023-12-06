import React, { useState, useEffect } from "react";
import TotalTime from "./TotalTime";
import Graph from "./Graph";
import AdditionalStats from "./AdditionalStats";

function Stats({ selectedSequences }) {
  return (
    <div id="stats">
      <TotalTime selectedSequences={selectedSequences} />
      <Graph selectedSequences={selectedSequences} />
      <AdditionalStats />
    </div>
  );
}

export default Stats;
