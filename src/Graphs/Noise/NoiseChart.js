import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// import HC_exporting from 'highcharts/modules/exporting';
// HC_exporting(Highcharts);

const NoiseChart = (props) => {
  const chartOptions = {
    chart: {
      type: 'pie',
      height: 250,
      margin: [0, 0, 0, 0],
    },
    title: {
      verticalAlign: '',
      floating: true,
      text: '',
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      padding: -10,
      symbolRadius: 0,
      itemMarginTop: 5,
      itemMarginBottom: 5,
      symbolPadding: 0,
      symbolWidth: 0,
      symbolHeight: 0,
      squareSymbol: false,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: false,
      },
    },
    series: [
      {
        data: props.chartData,
        size: '80%',
        innerSize: '50%,',
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default NoiseChart;
