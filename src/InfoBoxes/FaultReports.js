import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BasicCard from '../Components/BasicCard/BasicCard';
import { CarFrontFill, CupHot, Lightning } from 'react-bootstrap-icons';

const FaultReports = (props) => {
  const faults = [
    {
      id: 1,
      title: 'Parking slots almost Full',
      category: 'vehicles',
    },
    {
      id: 2,
      title: 'Energy utilization increased by 20%',
      category: 'energy',
    },
    {
      id: 3,
      title: 'Coffee Machine refill',
      category: 'food',
    },
  ];

  const getContent = () => {
    return (
      <div>
        {faults.map((fault) => (
          <div key={fault.id} className="m-2">
            <Row>
              <Col xs={2} lg={2}>
                <div className="bg-dark rounded ps-2 py-2 d-flex">
                  {fault.category === 'energy' ? (
                    <Lightning color="#fff" />
                  ) : fault.category === 'food' ? (
                    <CupHot color="#fff" />
                  ) : (
                    <CarFrontFill color="#fff" />
                  )}
                </div>
              </Col>
              <Col xs={10} lg={10}>
                <div className="d-flex flex-column">
                  <div style={{ fontSize: '18px' }}>{fault.title}</div>
                  <div>a few minutes ago</div>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </div>
    );
  };

  return <BasicCard title="Fault Reports" content={getContent()} />;
};

export default FaultReports;
