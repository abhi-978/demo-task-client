import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import hcmore from 'highcharts/highcharts-more.js';
import { data } from './data';

hcmore(Highcharts);

const AreaRangeChart = (props) => {
  const options = {
    chart: {
      type: 'arearange',
      zoomType: 'x',
      scrollablePlotArea: {
        minWidth: 600,
        scrollPositionX: 1,
      },
    },

    title: {
      text: 'Random Sensor',
    },

    xAxis: {
      type: 'datetime',
      accessibility: {
        rangeDescription: 'Range: Jan 1st 2017 to Dec 31 2017.',
      },
    },

    yAxis: {
      title: {
        text: null,
      },
    },

    tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: '°C',
      xDateFormat: '%A, %b %e',
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        name: 'Temperatures',
        data: data,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default AreaRangeChart;
