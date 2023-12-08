import React, { useState, useEffect } from "react";
import { Doughnut, Line, Radar, PolarArea } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

function Graph({ selectedSequences, selectedProject }) {
  const [currentGraph, setCurrentGraph] = useState("line");
  const [dayFreq, setDayFreq] = useState([0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    getDayOfWeekFreq();
  }, [selectedSequences]);

  const getRGB = (opacity = 1) => {
    switch (selectedProject.category) {
      case "writing":
        return `rgb(0, 171, 240, ${opacity})`; // Blue
      case "coding":
        return `rgb(222, 65, 64, ${opacity})`; // Red (seriously?? Coding is clearly a blue)
      case "creative":
        return `rgb(255, 255, 0, ${opacity})`; // Yellow
      default:
        return `rgb(255,255,255, ${opacity}`; // White
    }
  };

  const getDayOfWeekFreq = () => {
    const newFreq = [0, 0, 0, 0, 0, 0, 0];

    selectedSequences.forEach((sequence) => {
      const date = new Date(sequence.date);

      if (!isNaN(date.getTime())) {
        let dayOfWeek = date.getDay();
        newFreq[dayOfWeek]++;
      }
    });

    setDayFreq(newFreq);
  };
  const showLineGraph = () => {
    const lineGraphStyles = {
      width: "70vw",
      alignSelf: "flex-end",
      flexDirection: "column",
    };
    return (
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
              backgroundColor: getRGB(0.1),
              borderColor: getRGB(),
              responsive: true,
            },
          ],
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        }}
        style={lineGraphStyles}
      />
    );
  };

  // Not in use VVVV

  const showDoughnutGraph = () => {
    return (
      <Doughnut
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
              backgroundColor: getRGB(0.1),
              borderColor: getRGB(),
              responsive: true,
            },
          ],
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        }}
      />
    );
  };

  // ------------------ This isn't populating for some reason-----------------------
  const showRadarGraph = () => {
    const categories = ["Writing", "Coding", "Creative"];

    const datasets = categories.map((category) => {
      const categorySequences = selectedSequences.filter(
        (sequence) => sequence.category === category
      );
      const efficiencyValues = categorySequences.map(
        (sequence) => sequence.efficiency
      );

      const averageEfficiency =
        efficiencyValues.length > 0
          ? efficiencyValues.reduce((sum, efficiency) => sum + efficiency, 0) /
            efficiencyValues.length
          : 0;

      return {
        label: category,
        data: [averageEfficiency],
      };
    });

    return (
      <Radar
        data={{
          labels: ["Average Efficiency"],
          datasets: datasets.map((dataset) => ({
            label: dataset.label,
            data: dataset.data,
            fill: true,
            backgroundColor: getRGB(0.1),
            borderColor: getRGB(),
            pointBackgroundColor: "rgb(54, 162, 235)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(54, 162, 235)",
          })),
        }}
      />
    );
  };
  const showPolarAreaGraph = () => {
    const polarAreaGraphStyles = {
      width: "100%",
      alignSelf: "flex-end",
      flexDirection: "column",
    };

    return (
      <PolarArea
        data={{
          labels: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          datasets: [
            {
              label: "Most worked on days",
              data: dayFreq,
              fill: true,
              borderWidth: 2,
              backgroundColor: getRGB(0.1),
              borderColor: getRGB(),
              responsive: true,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
        style={polarAreaGraphStyles}
      />
    );
  };
  const handleSelect = (e) => {
    setCurrentGraph(e.target.value);
  };
  const showGraph = () => {
    switch (currentGraph) {
      case "line":
        return showLineGraph();
      // case "doughnut":
      //   return showDoughnutGraph();
      // case "radar":
      //   return showRadarGraph();
      case "polarArea":
        return showPolarAreaGraph();
    }
  };

  return (
    <div id="graph" style={{ width: "100%", alignSelf: "flex-end" }}>
      <div id="statsContainer"></div>
      {showGraph()}
      <div id="graph_select">
        <label for="graph">Graphs: </label>
        <select
          style={{ borderRadius: "4px", backgroundColor: getRGB(0.1) }}
          onChange={handleSelect}
          name="graph"
          value={currentGraph}
        >
          <option style={{ color: "black" }} value="line">
            Efficiency graph
          </option>
          {/* <option style={{ color: "black" }} value="doughnut">
            Doughnut Graph
          </option> */}
          {/* <option style={{ color: "black" }} value="radar">
            Radar Graph
          </option> */}
          <option style={{ color: "black" }} value="polarArea">
            Weekday frequency
          </option>
        </select>
      </div>
    </div>
  );
}

export default Graph;
