import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const MainMenu = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light" className='d-none d-md-block'>
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto social-icon-links">
              <Nav.Link href="#"><FaFacebookF></FaFacebookF></Nav.Link>
              <Nav.Link href="#"><FaInstagram></FaInstagram></Nav.Link>
              <Nav.Link href="#"><FaTwitter></FaTwitter></Nav.Link>
              <Nav.Link href="#"><FaLinkedinIn></FaLinkedinIn></Nav.Link>
              <Nav.Link href="#"><FaYoutube></FaYoutube></Nav.Link>
              <Nav.Link href="tel:8801623232323">
                <FaPhoneAlt></FaPhoneAlt> +8801623232323
              </Nav.Link>
            </Nav>
            <Nav className='ms-auto'>
              <Nav.Link href="#features">My Reviews</Nav.Link>
              <Nav.Link href="#features">Add Service</Nav.Link>
              <Nav.Link href="#features">Login</Nav.Link>
              <Nav.Link href="#pricing">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='py-3'>
        <Container>
          <Navbar.Brand href="#home">
            Justice Law Firm
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Practice Areas</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
            <Nav.Link href="#">
              <Button variant='primary' className=''>Schedule A Consulation</Button>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainMenu;