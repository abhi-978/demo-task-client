import React, { useState, useEffect } from 'react';
import BasicCard from '../../Components/BasicCard/BasicCard';

const PowerUsage = (props) => {
  const [rnum, setRum] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      let res = (Math.random() * 25 + 25).toFixed(2);
      setRum(res);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getHeader = () => {
    return (
      <>
        <p className="text-center fs-5">Current Power Usage</p>
      </>
    );
  };

  const getContent = () => {
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="mt-5">
            <p className="fs-2 text-center">{rnum}</p>
            <p className=" fs-4 text-center">KWH</p>
          </div>
        </div>
      </>
    );
  };

  return <BasicCard header={getHeader()} content={getContent()} />;
};

export default PowerUsage;
