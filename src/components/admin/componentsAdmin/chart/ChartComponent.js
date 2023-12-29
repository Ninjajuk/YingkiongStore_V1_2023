import React from "react";
import LineChart from "./LineChart";


const ChartComponent = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July"
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total Sales",
        data: [100000, 150000, 200000, 250000, 180000, 220000, 300000],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1
      },
      {
        label: "Total investment",
        data: [75000, 75000, 90000, 80000, 60000, 70000, 100000],
        fill: false,
        borderColor: "rgb(54, 162, 235)",
        tension: 0.1
      },
      {
        label: "Total Profits",
        data: [25000, 75000, 110000, 170000, 120000, 150000, 200000],
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1
      }
    ]
  };

  return (
    <div className="container mx-2 p-6 ">
      <LineChart data={data} />
    </div>
  );
};

export default ChartComponent;
