import React from 'react';
import BasicCard from '../../Components/BasicCard/BasicCard';
import SplineChart from './SplineChart';

const TemperatureChart = (props) => {
  const getContent = () => {
    return (
      <>
        <SplineChart />
      </>
    );
  };

  return <BasicCard content={getContent()} />;
};

export default TemperatureChart;
