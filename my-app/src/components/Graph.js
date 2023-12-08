import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

function Graph({ selectedSequences, selectedProject }) {
  const getRGB = () => {
    switch (selectedProject.category) {
      case "red":
        return "rgb(222, 65, 64, 0.1)";
      case "blue":
        return "rgb(0, 171, 240, 0.1)";
      case "yellow":
        return "rgb(255, 255, 0, 0.1)";
      default:
        return "rgb(255,255,255,0.1)";
    }
  };

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
              backgroundColor: getRGB(),
              borderColor: `${selectedProject.category}`,
              responsive: true,
            },
          ],
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        }}
      />
    </div>
  );
}

export default Graph;
