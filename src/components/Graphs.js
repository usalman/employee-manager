import React from 'react'
import Chart from 'react-apexcharts'

const Graphs = () => {

  const foo = {
    series: [{
      name: 'Erkek',
      data: [44, 55, 57]
    }, {
      name: 'Kadın',
      data: [176, 285, 101]
    },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '65%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Ortalama işte kalma süresi', 'En az işte kalma süresi', 'En çok işte kalma süresi'],
      },
      yaxis: {
        title: {
          text: 'Gün sayısı'
        }
      },
      fill: {
        opacity: 1
      },      
    },
  };

  const bar = {
    series: [{
      name: 'Ortalama işte kalma süresi',
      data: [44, 55, 57, 34, 35]
    }, {
      name: 'En çok işte kalma süresi',
      data: [176, 285, 101, 34, 35]
    }, {
      name: 'En az işte kalma süresi',
      data: [176, 285, 101, 34, 35]
    },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '65%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Destek', 'Muhasebe', 'Analiz', 'Yazılım', 'Yönetim'],
      },
      yaxis: {
        title: {
          text: 'Gün sayısı'
        }
      },
      fill: {
        opacity: 1
      },      
    },
  };
  
  return (
    <div>
      <Chart options={foo.options} series={foo.series} type="bar" width={500} height={320}/>
      <Chart options={bar.options} series={bar.series} type="bar" width={800} height={320}/>
    </div>
  )
}

export default Graphs

// const bar = {
          
//   series: [{
//     name: 'Inflation',
//     data: [2.3, 3.1, 4.0, 10.1, 4.0]
//   }],
//   options: {
//     chart: {
//       height: 350,
//       type: 'bar',
//     },
//     plotOptions: {
//       bar: {
//         borderRadius: 10,
//         dataLabels: {
//           position: 'top', // top, center, bottom
//         },
//       }
//     },
//     dataLabels: {
//       enabled: true,
//       formatter: function (val) {
//         return val + "%";
//       },
//       offsetY: -20,
//       style: {
//         fontSize: '12px',
//         colors: ["#304758"]
//       }
//     },
    
//     xaxis: {
//       categories: ["Jan", "Feb", "Mar", "Apr", "May"],
//       position: 'top',
//       axisBorder: {
//         show: false
//       },
//       axisTicks: {
//         show: false
//       },
//       crosshairs: {
//         fill: {
//           type: 'gradient',
//           gradient: {
//             colorFrom: '#D8E3F0',
//             colorTo: '#BED1E6',
//             stops: [0, 100],
//             opacityFrom: 0.4,
//             opacityTo: 0.5,
//           }
//         }
//       },
//       tooltip: {
//         enabled: true,
//       }
//     },
//     yaxis: {
//       axisBorder: {
//         show: false
//       },
//       axisTicks: {
//         show: false,
//       },
//       labels: {
//         show: false,
//         formatter: function (val) {
//           return val + "%";
//         }
//       }
    
//     },
//     title: {
//       text: 'Meslek Grubuna Göre',
//       floating: true,
//       offsetY: 330,
//       align: 'center',
//       style: {
//         color: '#444'
//       }
//     }
//   },


// };