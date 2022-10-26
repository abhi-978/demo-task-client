import React from 'react';
import BasicCard from '../../Components/BasicCard/BasicCard';
import FixedPlacementChart from './FixedPlacementChart';

const DeskBooking = (props) => {
  const getContent = () => {
    return (
      <>
        <FixedPlacementChart />
      </>
    );
  };

  return <BasicCard title="Booked Desks" content={getContent()} />;
};

export default DeskBooking;
