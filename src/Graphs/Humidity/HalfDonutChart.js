import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HalfDonutChart = (props) => {
  const options = {
    colors: ['#01BAF2', '#F4F8F9'],
    chart: {
      type: 'pie',
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
    },
    title: {
      text: 'Humidity Level',
    },
    tooltip: {
      enabled: false,
    },

    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white',
          },
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '110%',
      },
    },
    series: [
      {
        type: 'pie',
        name: 'Level',
        innerSize: '75%',
        data: [73.86, 21.97],
      },
    ],
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />;
    </>
  );
};

export default HalfDonutChart;
