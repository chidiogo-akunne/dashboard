import React from 'react';
import ReactApexChart from 'react-apexcharts';

export default function ApexChart() {
    const state = {
    
      series: [{
        name: 'Keywords not approved weekly',
        data: [44, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'Keywords categorized weekly',
        data: [55, 32, 45, 32, 34, 52, 41]
      }],
      options: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0,
            opacityTo: 0,
            stops: [0, 90, 100]
          }
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      },
    
    
    };
    return (
      <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
    );
}