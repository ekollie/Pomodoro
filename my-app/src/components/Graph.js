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
      />
    );
  };
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
  const showRadarGraph = () => {
    return (
      <Radar
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
  const showPolarAreaGraph = () => {
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
      case "doughnut":
        return showDoughnutGraph();
      case "radar":
        return showRadarGraph();
      case "polarArea":
        return showPolarAreaGraph();
    }
  };

  return (
    <div id="graph">
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
            Line Graph
          </option>
          <option style={{ color: "black" }} value="doughnut">
            Doughnut Graph
          </option>
          <option style={{ color: "black" }} value="radar">
            Radar Graph
          </option>
          <option style={{ color: "black" }} value="polarArea">
            Polar Area Graph
          </option>
        </select>
      </div>
    </div>
  );
}

export default Graph;

// [Sunday, Monday, Tuesday, Wednesday, Friday, Saturday];

// (yearCode + monthCode + centuryCode + dateNumber - leapYearCode) mod 7

// yearCode = (YY + (YY / 4)) mod 7

// Month code
// 1 0
// 2 3
// 3 3
// 4 6
// 5 1
// 6 4
// 7 6
// 8 2
// 9 5
// 10 0
// 11 3
// 12 5

// century code 6

// year%400 == 0 || year%4 == 0 && year%100 !== 0

// let dates=
// selectedSequences.map((sequence)=>{
//   return sequence.date
// })

// let years =
// dates.map((date)=>{
//   return date.split("-")[0]
// })

// let yy =
// years.map((year)=>{
//   return year - 2000
// })

// let months = dates.map((date)=>{
//   return date.split("-")[1]
// })

// let monthCodes = months.map((month)=>{
//   switch(month){
//     case "01":
//       return 0
//     case "02":
//       return 3
//     case "03":
//       return 3
//     case "04":
//       return 6
//     case "05":
//       return 1
//     case "06":
//       return 4
//     case "07":
//       return 6
//     case "08":
//       return 2
//     case "09":
//       return 5
//     case "10":
//       return 0
//     case "11":
//       return 3
//     case "12":
//       return 5
//   }
// })
// let days=
// dates.map((date)=>{
//   return date.split("-")[2]
// })

// years.map((year)=>{
//   if()
// })
