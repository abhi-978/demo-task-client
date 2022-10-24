import React from 'react';
import BasicCard from '../../Components/BasicCard/BasicCard';
import AreaRangeChart from './AreaRangeChart';

const RandomSensorData = (props) => {
  const getContent = () => {
    return (
      <>
        <AreaRangeChart />
      </>
    );
  };

  return <BasicCard content={getContent()} />;
};

export default RandomSensorData;
