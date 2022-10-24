import React from 'react';
import BasicCard from '../../Components/BasicCard/BasicCard';
import HalfDonutChart from './HalfDonutChart';

const humidityIndicator = (props) => {
  const getContent = () => {
    return (
      <>
        <HalfDonutChart />
      </>
    );
  };

  return <BasicCard content={getContent()} />;
};

export default humidityIndicator;
