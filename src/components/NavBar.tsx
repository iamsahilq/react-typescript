import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

export const NavBar = () => {
  let navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const handleForward = () => {
    navigate(1);
  };
  return (
    <Navbar sticky="top" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link
              className="text-reset text-decoration-none p-2 rounded btn-primary m-1"
              to="/1"
            >
              Assignment 1
            </Link>
            <Link
              className="text-reset text-decoration-none p-2 rounded btn-primary m-1"
              to="/2"
            >
              Assignment 2
            </Link>
            <button
              className="btn btn-sm btn-danger p-1 m-1"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              className="btn-sm btn btn-success p-1 m-1"
              onClick={handleForward}
            >
              Next
            </button>
            <Link
              className="text-reset text-decoration-none p-2 rounded btn-primary m-1 float-end float-right"
              to="/login"
            >
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
