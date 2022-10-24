import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChart = (props) => {
  const options = {
    colors: ['#01BAF2', '#F4F8F9'],
    chart: {
      type: 'pie',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    title: {
      text: 'Odour Level',
    },

    tooltip: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: 'Odour Level',
        colorByPoint: true,
        innerSize: '75%',
        data: [
          {
            name: 'Indoor',
            y: 47,
          },
          {
            name: 'Indoor',
            y: 53,
          },
        ],
      },
    ],
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />;
    </>
  );
};

export default PieChart;
