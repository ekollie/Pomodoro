import React from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

function Graph({ selectedSequences }) {
  return (
    <div>
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
              fill: false,
              borderWidth: 4,
              backgroundColor: "white",
              borderColor: "red",
              responsive: true,
            },
          ],
        }}
      />
    </div>
  );
}

export default Graph;
