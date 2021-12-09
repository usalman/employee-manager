import React from "react";
import Chart from "react-apexcharts";

const Graphs = ({ maleInfo, femaleInfo }) => {
  const graph1 = {
    series: [
      {
        name: "Erkek",
        data: [
          maleInfo.averageMaleWorkDays,
          maleInfo.minMaleWorkDays,
          maleInfo.maxMaleWorkDays,
        ],
      },
      {
        name: "Kadın",
        data: [
          femaleInfo.averageFemaleWorkDays,
          femaleInfo.minFemaleWorkDays,
          femaleInfo.maxFemaleWorkDays,
        ],
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

  const graph2 = {
    series: [
      {
        name: "Ortalama işte kalma süresi",
        data: [44, 55, 57, 34, 35],
      },
      {
        name: "En çok işte kalma süresi",
        data: [176, 285, 101, 34, 35],
      },
      {
        name: "En az işte kalma süresi",
        data: [176, 285, 101, 34, 35],
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
        categories: ["Destek", "Muhasebe", "Analiz", "Yazılım", "Yönetim"],
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
    <div>
      <Chart
        options={graph1.options}
        series={graph1.series}
        type="bar"
        width={500}
        height={320}
      />
      <Chart
        options={graph2.options}
        series={graph2.series}
        type="bar"
        width={800}
        height={320}
      />
    </div>
  );
};

export default Graphs;
