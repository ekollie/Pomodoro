import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

function Graph({ selectedSequences, selectedProject }) {
  const [color, setColor] = useState("green");
  return (
    <div id="graph">
      <Line
        data={{
          // x-axis label values
          labels: selectedSequences.map((sequence) => {
            return sequence.date;
          }),
          datasets: [
            {
              label: "Efficiency",
              // y-axis data plotting values
              data: selectedSequences.map((sequence) => {
                return sequence.efficiency;
              }),
              fill: true,
              borderWidth: 2,
              backgroundColor: "rgb(0, 255, 0, 0.1)",
              borderColor: `${selectedProject.category}`,
              responsive: true,
            },
          ],
        }}
      />
    </div>
  );
}

export default Graph;
