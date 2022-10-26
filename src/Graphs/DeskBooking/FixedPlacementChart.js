import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const FixedPlacementChart = (props) => {
  const options = {
    chart: {
      type: 'column',
      height: 300,
      width: 400,
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: [9, 10, 11, 12, 1, 2, 3, 4, 5],
    },
    yAxis: [
      {
        min: 0,
        title: {
          text: '',
        },
      },
      {
        title: {
          text: '',
        },
        // opposite: true,
      },
    ],
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'top',
      shadow: false,
    },
    tooltip: {
      shared: true,
    },
    plotOptions: {
      column: {
        grouping: false,
        shadow: false,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Booked',
        color: '#41FF17',
        data: [15, 12, 10, 8, 7, 14, 13, 12, 11],
        pointPadding: 0.34,
        pointPlacement: -0.2,
      },
      {
        name: 'Occupied',
        color: '#11ABE1',
        data: [10, 9, 11, 12, 8, 9, 10, 11, 10],
        pointPadding: 0.45,
        pointPlacement: -0.2,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default FixedPlacementChart;
