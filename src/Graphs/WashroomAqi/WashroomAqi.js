import React from 'react';
import BasicCard from '../../Components/BasicCard/BasicCard';
import HalfDonutChart from './HalfDonutChart';

const WashroomAqi = (props) => {
  const getContent = () => {
    return (
      <>
        <HalfDonutChart />
      </>
    );
  };

  return <BasicCard content={getContent()} title="Washroom AQI" />;
};

export default WashroomAqi;
