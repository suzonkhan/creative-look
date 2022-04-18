import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
        <Link className='navbar-brand' to="/">Creative Look</Link>
          {/* <Navbar.Brand href="#home">Creative Look</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              
              <Link to="/" className='nav-link'>Home</Link>
              <Link to="/checkout" className='nav-link'>Checkout</Link>
              <Link to="/registration" className='nav-link'>Registration</Link>
               
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;