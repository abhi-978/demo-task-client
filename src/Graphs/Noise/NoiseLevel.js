import React from 'react';
import NoiseChart from './NoiseChart';
import BasicCard from '../../Components/BasicCard/BasicCard';

const NoiseLevel = (props) => {
  const data = [
    {
      y: 80,
      name: 'Building 1',
    },
    {
      y: 25,
      name: 'Building 2',
    },
    {
      y: 35,
      name: 'Building 3',
    },
  ];

  const getHeader = () => {
    return (
      <>
        <p className="text-center fs-5">Usage Ratio</p>
      </>
    );
  };

  return (
    <BasicCard header={getHeader()} content={<NoiseChart chartData={data} />} />
  );
};

export default NoiseLevel;
