import React, { useState, useEffect } from "react";
import TotalTime from "./TotalTime";
import Graph from "./Graph";
import AdditionalStats from "./AdditionalStats";

function Stats() {
  const [projectList, setProjectList] = useState([
    {
      project_id: 0,
      project_name: "",
      project_category: "",
      project_content: "",
    },
  ]);
  const [sequences, setSequences] = useState([
    {
      sequence_id: -1,
      project_id: -1,
      sample_data_one: -1,
      sample_data_two: -1,
      date: "2023-12-5",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:3000/sequences")
      .then((res) => res.json())
      .then((sequences) => {
        setSequences(sequences);
      });
  }, []);

  return (
    <div id="stats">
      <TotalTime sequences={sequences} />
      <Graph sequences={sequences} />
      <AdditionalStats />
    </div>
  );
}

export default Stats;
