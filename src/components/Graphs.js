import React from "react";
import Chart from "react-apexcharts";

const computeRenderData = (gender,filter,employees) => {
  return [
    employees
      .filter((employee) => employee[filter] === gender)
      .reduce((prev, current, index) => {
        return (prev * index + current.workDays) / (index + 1);
      }, 0),
    Math.min(
      ...employees
        .filter((employee) => employee[filter] === gender)
        .map((employee) => employee.workDays)
    ),
    Math.max(
      ...employees
        .filter((employee) => employee[filter] === gender)
        .map((employee) => employee.workDays)
    ),
  ]
}
const Graphs = ({ employees }) => {
  const graph1 = {
    series: [
      {
        name: "Erkek",
        data: computeRenderData('male','gender',employees),
      },
      {
        name: "Kadın",
        data: computeRenderData('female','gender',employees),
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "65%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Ortalama işte kalma süresi",
          "En az işte kalma süresi",
          "En çok işte kalma süresi",
        ],
      },
      yaxis: {
        title: {
          text: "Gün sayısı",
        },
      },
      fill: {
        opacity: 1,
      },
    },
  };

  return (
    <div className="chartGroup">
      <div className="chartOne">
        <h1>Cinsiyete Göre İşte Kalma Süreleri</h1>
        <Chart
          options={graph1.options}
          series={graph1.series}
          type="bar"
          width={768}
          height={320}
        />
      </div>
    </div>
  );
};

export default Graphs;
