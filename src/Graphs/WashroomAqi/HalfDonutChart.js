import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HalfDonutChart = (props) => {
  const options = {
    colors: ['#01BAF2', '#A9AFAE'],
    chart: {
      type: 'pie',
      width: 150,
      height: 300,
      marginBottom: 100,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: null,
    },
    tooltip: {
      enabled: false,
    },

    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false,
        },
        startAngle: -120,
        endAngle: 120,
        center: ['50%', '75%'],
        size: '120%',
      },
    },
    series: [
      {
        type: 'pie',
        name: ' AQI Level',
        innerSize: '75%',
        data: [73.86, 21.97],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HalfDonutChart;
