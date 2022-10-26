import React from 'react';
import BasicCard from '../Components/BasicCard/BasicCard';

const AQIDetails = (props) => {
  const data = [
    {
      id: 1,
      title: 'AIR PRESSURE',
      sensor: 'ABC sensor',
      value: 910,
      level: 'high',
    },
    {
      id: 2,
      title: 'TEMPERATURE',
      sensor: 'DEF sensor',
      value: 24,
      level: 'ok',
    },
    {
      id: 3,
      title: 'HUMIDITY',
      sensor: 'GHI sensor',
      value: 49,
      level: 'ok',
    },
    {
      id: 4,
      title: 'LUMENS',
      sensor: 'JKL sensor',
      value: 13,
      level: 'low',
    },
    {
      id: 5,
      title: 'CO2',
      sensor: 'MNO sensor',
      value: 949,
      level: 'ok',
    },
    {
      id: 6,
      title: 'AIR PRESSURE',
      sensor: 'PQR sensor',
      value: 48,
      level: 'low',
    },
  ];

  const getContent = () => {
    return (
      <div className="d-flex flex-wrap">
        {data.map((ele) => {
          const style = {
            color:
              ele.level === 'high'
                ? '#F3100C'
                : ele.level === 'low'
                ? '#D5D01E'
                : '#1FC212',
            fontSize: '24px',
            fontWeight: '500',
          };

          return (
            <div className="text-center col-lg-4 p-2 mt-4" key={ele.id}>
              <div className="" style={style}>
                {ele.value}
              </div>
              <div>{ele.sensor}</div>
              <div
                style={{
                  fontSize: '15px',
                  fontWeight: 'bold',
                  color: '#4F4F4D',
                }}
              >
                {ele.title}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return <BasicCard title="Air Quality Index" content={getContent()} />;
};

export default AQIDetails;
