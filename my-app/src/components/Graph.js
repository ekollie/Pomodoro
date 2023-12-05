import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

function Graph() {
  const [sequences, setSequences] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/sequence")
      .then((res) => res.json())
      .then((sequences) => {
        setSequences(sequences);
      });
  }, []);

  return (
    <div>
      <Line
        data={{
          // x-axis label values
          labels: sequences.map((sequence) => {
            return sequence.date;
          }),
          datasets: [
            {
              label: "Efficiency",
              // y-axis data plotting values
              data: sequences.map((sequence) => {
                return sequence.sample_data_one;
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
