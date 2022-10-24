import React from 'react';
import BasicCard from '../../Components/BasicCard/BasicCard';
import LineChart from './LineChart';

const RandomSensorAlt = (props) => {
  const getContent = () => {
    return (
      <>
        <LineChart />
      </>
    );
  };

  return <BasicCard content={getContent()} />;
};

export default RandomSensorAlt;
