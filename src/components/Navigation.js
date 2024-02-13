import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';

const Navigation = ({setCategory}) => {
  return (
    <Navbar  bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><Badge className="p-3" bg="danger">
        News App
      </Badge></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setCategory("sports")}>Sports</Nav.Link>
            <Nav.Link onClick={() => setCategory("entertainment")}>Entertainment</Nav.Link>
            <Nav.Link onClick={() => setCategory("general")}>General</Nav.Link>
            <Nav.Link onClick={() => setCategory("health")}>Health</Nav.Link>
            <Nav.Link onClick={() => setCategory("business")}>Business</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Navigation
