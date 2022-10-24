import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../../Redux Files/Actions/tokenAction';
import { clearErrors } from '../../Redux Files/Actions/errorsAction';
import { setDefaultUser } from '../../Redux Files/Actions/userAction';
import { setRegistrationStatus } from '../../Redux Files/Actions/registerAction';
import { Clipboard2Data } from 'react-bootstrap-icons';

const Header = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const username = useSelector((state) => state.user.name);

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(setToken(''));
    dispatch(clearErrors());
    dispatch(setDefaultUser());
    dispatch(setRegistrationStatus());
    window.location.reload();
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark" className="w-100">
      <Container fluid className="ms-4">
        <Navbar.Brand
          onClick={() => {
            navigate('/home');
          }}
        >
          <span className="px-2">
            <Clipboard2Data color="white" size={28} />
          </span>
          Dashboard Demo
        </Navbar.Brand>
        {token && (
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate('/home');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/account');
              }}
            >
              Account
            </Nav.Link>
          </Nav>
        )}

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end me-3">
          {token ? (
            <>
              <Navbar.Text className="me-4">
                Signed in as:
                <span
                  onClick={() => {
                    navigate('/account');
                  }}
                  className="px-1 fs-6 text-info"
                >
                  {username}
                </span>
              </Navbar.Text>
              <Nav.Link className="me-4">
                <Button onClick={handleLogout}>Logout</Button>
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav className="me-4">
                <Nav.Link
                  onClick={() => {
                    navigate('/login');
                  }}
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate('/register');
                  }}
                >
                  Register
                </Nav.Link>
              </Nav>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
