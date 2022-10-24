import React from 'react';
import BasicCard from '../../Components/BasicCard/BasicCard';
import PieChart from './PieChart';

const OdourLevel = (props) => {
  const getContent = () => {
    return (
      <>
        <PieChart />
      </>
    );
  };

  return <BasicCard content={getContent()} />;
};

export default OdourLevel;
