import React from 'react';
import BasicCard from '../../Components/BasicCard/BasicCard';
import AreaChart from './AreaGraph';

const EnergyConsumption = (props) => {
  const getContent = () => {
    return <AreaChart />;
  };

  return (
    <BasicCard title="Energy Consumption History" content={getContent()} />
  );
};

export default EnergyConsumption;
