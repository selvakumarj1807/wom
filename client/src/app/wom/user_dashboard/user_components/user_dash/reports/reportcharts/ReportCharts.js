import React, { useState } from "react";
import Chart from "react-apexcharts";

function ReportCharts() {
  const [data, setData] = useState({
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 82, 56],
      },
      {
        name: "Revenue",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
      {
        name: "Customers",
        data: [15, 11, 32, 18, 9, 24, 11],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 4,
      },
      colors: ["#4154f1", "#2eca6a", "#ff771d"],
      fill: {
        type: "gardient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2024-04-14T00:00:00.000Z",
          "2024-04-14T00:00:00.000Z",
          "2024-04-14T00:00:00.000Z",
          "2024-04-14T00:00:00.000Z",
          "2024-04-14T00:00:00.000Z",
          "2024-04-14T00:00:00.000Z",
          "2024-04-14T00:00:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/mm/yy HH:mm",
        },
      },
    },
  });
  return (
    <Chart
      options={data.options}
      series={data.series}
      type={data.options.chart.type}
      height={data.options.chart.height}
      width={data.options.chart.width}
    />
  );
}

export default ReportCharts;
