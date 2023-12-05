import React, { useState, useEffect } from "react";
import TotalTime from "./TotalTime";
import Graph from "./Graph";
import AdditionalStats from "./AdditionalStats";

function Stats() {
  const url = "http://localhost:3001";
  const [projectList, setProjectList] = useState([
    {
      id: 0,
      name: "",
      category: "",
      content: "",
    },
  ]);
  const [sequences, setSequences] = useState([
    {
      id: 0,
      project_id: 0,
      efficiency: 0,
      duration_seconds: 0,
      date: "2023-12-5",
    },
  ]);

  useEffect(() => {
    fetch(url + "/sequences")
      .then((res) => res.json())
      .then((sequences) => {
        setSequences(sequences);
      });
  });

  return (
    <div id="stats">
      <TotalTime sequences={sequences} />
      <Graph sequences={sequences} />
      <AdditionalStats />
    </div>
  );
}

export default Stats;
