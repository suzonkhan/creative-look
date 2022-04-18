import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">
          Creative Look
        </Link>
        {/* <Navbar.Brand href="#home">Creative Look</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
            {/* <Link to="/checkout" className="nav-link">
              Checkout
            </Link> */}

            {user ? 
               <Button onClick={()=> signOut(auth)}> Logout </Button>
             : 
              <Link to="/login" className="nav-link">
                Login
              </Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
