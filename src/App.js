import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">CONDORS COMMUNITY</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Post</Nav.Link>
      <Nav.Link href="#pricing">Feeds</Nav.Link>
      <NavDropdown title="People" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Find</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Make Post</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Activity</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Profile</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      Groups
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}

export default App;
