import React from "react";

import BarChart3 from "./BarChart3";

const BarChartComponents = () => {
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
        data: [100, 150, 200, 250, 180, 220, 300],
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        tension: 0.1
      },
      {
        label: "Total Orders",
        data: [50, 75, 90, 80, 60, 70, 100],
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        tension: 0.1
      },
      {
        label: "Total items",
        data: [130, 140, 150, 215, 135, 255, 160],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        tension: 0.1
      }
    ]
  };

  return (
    <div className="w-full h-full mx-2 p-6 ">
      <BarChart3 data={data} />
    </div>
  );
};

export default BarChartComponents;
