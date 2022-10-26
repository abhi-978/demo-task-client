import React, { useState } from 'react';
import BasicCard from '../Components/BasicCard/BasicCard';
import { StarFill } from 'react-bootstrap-icons';

const Feedback = (props) => {
  const [rating, setRating] = useState(new Array(5).fill(0));
  const getContent = () => {
    const handleClick = (i) => {
      const arr = [...rating];
      arr[i] === 0 ? arr.splice(i, 1, 1) : arr.splice(i, 1, 0);
      setRating(arr);
    };

    return (
      <div>
        <div className="d-flex flex-column mt-4 text-center">
          <div className="d-flex">
            {rating
              .sort((a, b) => b - a)
              .map((ele, i) => (
                <div className="px-2" key={i}>
                  <StarFill
                    color={ele === 0 ? '#060605' : '#F7F74C'}
                    size={28}
                    onClick={() => {
                      handleClick(i);
                    }}
                  />
                </div>
              ))}
          </div>
          <div className="m-3 fs-4">
            {rating.reduce((acc, ele) => (acc += ele), 0)}
          </div>
          <div className="fs-4">Average Rating</div>
        </div>
      </div>
    );
  };

  return <BasicCard title="Feedback" content={getContent()} />;
};
export default Feedback;
