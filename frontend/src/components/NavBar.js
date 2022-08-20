import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Container className="mt-3">
      <Nav className="justify-content-between">
        <Nav.Item>
          <Link to="/register">
            <Button>Register</Button>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/logout">
            <Button>Logout</Button>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/profile">
            <Button>Profile</Button>
          </Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default NavBar;
