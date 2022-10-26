import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { chartData } from './chartData';

const AreaChart = (props) => {
  const chartOptions = {
    colors: ['#03CC40', '#4693C8'],
    chart: {
      type: 'area',
      height: 300,
      width: 430,
    },
    accessibility: {
      description: 'Energy usage comparison',
    },
    title: {
      text: '',
    },
    xAxis: {
      allowDecimals: false,
    },
    yAxis: {
      allowDecimals: false,
    },
    plotOptions: {
      area: {
        pointStart: 0,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true,
            },
          },
        },
      },
    },
    series: [chartData.electricity, chartData.dg],
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default AreaChart;
