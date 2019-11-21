import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar,Nav, Form,FormControl } from 'react-bootstrap';
import '../Access/Registration';



 
class NavBars extends Component {
  render() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">My Project</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        <Nav>
          <Nav.Link href="../Access/Registration">Sign up</Nav.Link>
          <Nav.Link href="#login">Log in</Nav.Link>
          </Nav>
    
      </Navbar>
    );
  }
}
 
export default NavBars;