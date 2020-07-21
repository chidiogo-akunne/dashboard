import React from 'react';
import ReactApexChart from 'react-apexcharts';

export default function DonutChart(){
  const State = {
    series: [55, 77, 99],
    options: {
      chart: {
        width: 400,
        type: 'donut',
      },
      labels: ['Assigned', 'Approved', 'Unassigned'],
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            labels: {
              show: true,
              name: {
                color: 'black'
              },
              value: {
                color: 'black'
              },
              total: {
                show: true,
                label: 'Total keywords',
                color: 'black'
              }
            }
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: '100%'
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      legend: {
        position: 'bottom',
      }
    }
  }
  
  return(
    <ReactApexChart options={State.options} series={State.series} type='donut' width={400} height={400} />
  )
}
