import React from "react";
import "./styles.scss";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import "animate.css";

const lineLabels = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];
const lineStat = [
  8, 10, 10, 12, 11, 15, 15, 12, 14, 10, 11, 12, 12, 10, 10, 11, 12, 11, 11, 14,
  13, 13, 10, 10, 10, 11, 12, 14, 13, 13,
];

let width, height, gradient;
function getGradient(ctx, chartArea) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, "rgba(239, 54, 54, 0.08");
    gradient.addColorStop(1, "rgba(239, 54, 54, 1");
  }

  return gradient;
}

const dataLine = {
  labels: lineLabels,
  datasets: [
    {
      label: "Views",
      borderColor: (context) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          return;
        }
        return getGradient(ctx, chartArea);
      },
      backgroundColor: "rgba(239, 54, 54, 0.02",
      fill: "origin",
      data: lineStat,
      pointRadius: 0,
      borderWidth: 1.5,
      pointHoverRadius: 9,
      tension: 0.1,
    },
  ],
};

const lineOptions = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: "rgba(33, 33, 33, 0.8)",
    },
  },
  maintainAspectRatio: false,
  hoverBackgroundColor: "rgba(239, 54, 54, 0.9)",
  hoverBorderColor: "rgba(239, 54, 54, 0.08)",
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
        tickLength: 12,
      },
    },
    y: {
      grid: {
        drawBorder: false,
        color: "#fafafa",
      },
    },
  },
};

const ChartLine = ({ className }) => {
  return (
    <div className={"chart-line shadow py-4 px-3 " + className}>
      <Chart type="line" options={lineOptions} data={dataLine} />
    </div>
  );
};

ChartLine.propTypes = {};

export default ChartLine;
