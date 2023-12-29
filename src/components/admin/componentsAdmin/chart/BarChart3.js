import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart3 = ({ data }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance) {
      chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        scales: {
          x: [
            {
              ticks: {
                callback: function (value, index, values) {
                  return value;
                }
              }
            }
          ]
        },
        responsive: true // Make the chart responsive
      }
    });

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);

  return (
    <div
      className="max-w-lg mx-auto mt-8"
      style={{ width: "100%", height: "100%" }}
    >
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default BarChart3;
