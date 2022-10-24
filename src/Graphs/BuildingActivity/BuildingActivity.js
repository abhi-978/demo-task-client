import React from 'react';
import BasicCard from '../../Components/BasicCard/BasicCard';
import BarChart from './BarChart';

const BuildingActivity = (props) => {
  const getContent = () => {
    return (
      <div>
        <BarChart />
      </div>
    );
  };

  return <BasicCard content={getContent()} />;
};

export default BuildingActivity;
