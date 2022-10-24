import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import {
  List,
  HouseDoorFill,
  PersonBadge,
  ArrowLeftCircleFill,
  Building,
  Bluetooth,
} from 'react-bootstrap-icons';

const Sidebar = (props) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    const res = !open;
    setOpen(res);
  };

  return (
    <div className="bg-dark h-100" style={{ height: '100vh' }}>
      <div className="d-flex justify-content-center">
        {!open ? (
          <span className="align-self-center mt-3" onClick={handleClick}>
            <List color="#fff" size={25} />
          </span>
        ) : (
          <span className="align-self-center mt-3" onClick={handleClick}>
            <ArrowLeftCircleFill color="#fff" size={25} />
          </span>
        )}
      </div>
      <hr />
      <div>
        <Nav defaultActiveKey="/home" className="d-flex flex-column">
          <Nav.Link
            onClick={() => {
              navigate('/home');
            }}
          >
            {open ? (
              <div className="d-flex justify-content-start mx-2">
                <div>
                  <HouseDoorFill color="#FFF" size={25} />
                </div>
                <div className="text-light text-start align-self-center ms-2">
                  {' '}
                  Home
                </div>
              </div>
            ) : (
              <HouseDoorFill color="#FFF" size={25} />
            )}
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate('/account');
            }}
          >
            {open ? (
              <div className="d-flex justify-content-start mx-2">
                <div>
                  <PersonBadge color="#FFF" size={25} />
                </div>
                <div className="text-light text-start align-self-center ms-2">
                  Account
                </div>
              </div>
            ) : (
              <PersonBadge color="#FFF" size={25} />
            )}
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate('/home');
            }}
          >
            {open ? (
              <div className="d-flex justify-content-start mx-2">
                <div>
                  <Building color="#FFF" size={25} />
                </div>
                <div className="text-light text-start align-self-center ms-2">
                  Building
                </div>
              </div>
            ) : (
              <Building color="#FFF" size={25} />
            )}
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate('/home');
            }}
          >
            {open ? (
              <div className="d-flex justify-content-start mx-2">
                <div>
                  <Bluetooth color="#FFF" size={25} />
                </div>
                <div className="text-light text-start align-self-center ms-2">
                  Connection
                </div>
              </div>
            ) : (
              <Bluetooth color="#FFF" size={25} />
            )}
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
