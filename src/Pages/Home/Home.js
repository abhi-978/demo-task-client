import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BuildingModel from '../../Graphs/BuildingModel/BuildingModel';
import PowerUsage from '../../Graphs/PowerUsage/PowerUsage';
import BuildingActivity from '../../Graphs/BuildingActivity/BuildingActivity';
import WashroomAqi from '../../Graphs/WashroomAqi/WashroomAqi';
import RandomSensorAlt from '../../Graphs/MeetingRoom/RandomSensorAlt';
import EnergySources from '../../Graphs/EnergySources/EnergySources';
import AlertBox from '../../InfoBoxes/AlertBox';
import EnergyConsumption from '../../Graphs/EnergyConsumption/EnergyConsumption';
import DeskBooking from '../../Graphs/DeskBooking/DeskBooking';
import ESGBox from '../../Graphs/ESG/ESGbox';
import FaultReports from '../../InfoBoxes/FaultReports';
import AQIDetails from '../../InfoBoxes/AQIDetails';
import Feedback from '../../InfoBoxes/Feedback';
import WashroomStatus from '../../Graphs/WashroomStatus/WashroomStatus';

const Home = (props) => {
  return (
    <Container
      fluid
      className="me-4 p-4"
      style={{ backgroundColor: '#D6D9DA' }}
    >
      <Row className="mb-3">
        <Col lg={5}>
          <BuildingModel />
        </Col>
        <Col lg={4}>
          <Row className="mb-3">
            <Col md={6} lg={6}>
              <PowerUsage />
            </Col>
            <Col md={6} lg={6}>
              <EnergySources />
            </Col>
          </Row>
          <Row>
            <Col>
              <EnergyConsumption />
            </Col>
          </Row>
        </Col>
        <Col lg={3}>
          <AlertBox />
        </Col>
      </Row>
      <Row className="mb-3 h-25">
        <Col lg={3}>
          <BuildingActivity />
        </Col>
        <Col lg={3}>
          <DeskBooking />
        </Col>
        <Col lg={3}>
          <ESGBox />
        </Col>
        <Col lg={3}>
          <FaultReports />
        </Col>
      </Row>
      <Row className="mb-3 h-25">
        <Col lg={3}>
          <RandomSensorAlt />
        </Col>
        <Col lg={3}>
          <AQIDetails />
        </Col>
        <Col lg={3}>
          <Row>
            <Col lg={6}>
              <WashroomStatus />
            </Col>
            <Col lg={6}>
              <WashroomAqi />
            </Col>
          </Row>
        </Col>
        <Col lg={3}>
          <Feedback />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
