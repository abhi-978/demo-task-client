import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BuildingModel from '../../Graphs/BuildingModel/BuildingModel';
import PowerUsage from '../../Graphs/PowerUsage/PowerUsage';
import NoiseLevel from '../../Graphs/Noise/NoiseLevel';
import BuildingActivity from '../../Graphs/BuildingActivity/BuildingActivity';
import TemperatureChart from '../../Graphs/Temperature/TemperatureChart';
import RandomSensorData from '../../Graphs/RandomSensor/RandomSensorData';
import OdourLevel from '../../Graphs/OdourMeter/OdourLevel';
import HumidityIndicator from '../../Graphs/Humidity/HumidityIndicator';
import RandomSensorAlt from '../../Graphs/RandomSensor2/RandomSensorAlt';

const Home = (props) => {
  return (
    <Container fluid className="me-4 bg-secondary p-4">
      <Row className="mb-3">
        <Col lg={6}>
          <BuildingModel />
        </Col>
        <Col lg={3}>
          <PowerUsage />
        </Col>
        <Col lg={3}>
          <NoiseLevel />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg={4}>
          <TemperatureChart />
        </Col>
        <Col lg={5}>
          <RandomSensorData />
        </Col>
        <Col lg={3}>
          <HumidityIndicator />
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <BuildingActivity />
        </Col>
        <Col lg={5}>
          <RandomSensorAlt />
        </Col>
        <Col lg={2}>
          <OdourLevel />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
