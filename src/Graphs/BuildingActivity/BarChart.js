import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = () => {
  const config = {
    chart: {
      type: 'column',
    },
    legend: {
      enabled: true,
    },
    title: null,
    xAxis: {
      categories: [
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
      ],
      tickLength: 0,
      lineWidth: 2,
    },
    yAxis: {
      gridLineColor: '#EBEEF1',
      title: null,
    },
    plotOptions: {
      series: {
        pointPadding: 0,
      },
    },
    series: [
      {
        data: [
          29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
          295.6, 654.4,
        ],
        name: 'Day',
      },
      {
        data: [
          148.5, 26.4, 69.9, 61.5, 295.6, 354.4, 176.0, 135.6, 194.1, 71.5,
          295.6, 254.4,
        ],
        name: 'Night',
      },
    ],
    colors: ['#FF7011', '#9AAABB'],
    labels: {
      enabled: false,
    },
  };
  return <HighchartsReact highcharts={Highcharts} options={config} />;
};

export default BarChart;
