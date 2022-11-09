import React, { useContext } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const MainMenu = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleSignOut = () => {
    logOut()
      .then(res => {
        toast.success('Logout successfully done!');
      }).catch(error => console.error(error));
  }
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
            </Nav>
            <Nav className='ms-auto'>
              {
                user && user.uid ?
                  <>
                    <NavLink className="nav-link" to="/reviews">My Reviews</NavLink>
                    <NavLink className="nav-link" to="/add-service">Add Service</NavLink>
                    <OverlayTrigger
                      placement='bottom'
                      overlay={
                        <Tooltip id='tooltip-bottom2'>
                          {user?.displayName}
                        </Tooltip>
                      }
                    >
                      <span style={{ cursor: "pointer" }} className="nav-link" title={user.displayName}>
                        {user.photoURL ? <img style={{ height: "25px", width: "25px" }} className="rounded-circle" src={user.photoURL} alt={user.displayName} /> : <FaUserCircle title={user.displayName}></FaUserCircle>}
                      </span>
                    </OverlayTrigger>
                    <span style={{ cursor: "pointer" }} className="nav-link" onClick={handleSignOut}>
                      Logout <FaSignOutAlt></FaSignOutAlt>
                    </span>
                  </>
                  :
                  <>
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                  </>
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='py-3'>
        <Container>
          <Navbar.Brand>
            <Link to='/' className='nav-link'>
              Justice Lawyer
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <NavLink className="nav-link" end to="/">Home</NavLink>
              <NavLink className="nav-link" to="/legal-services">Legal Services</NavLink>
              <NavLink className="nav-link" to="/blog">Blog</NavLink>
              <NavLink className="nav-link" to="/about">About</NavLink>
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </Nav>
            <Nav className='d-md-none'>
              {
                user && user.uid ?
                  <>
                    <NavLink className="nav-link" to="/reviews">My Reviews</NavLink>
                    <NavLink className="nav-link" to="/add-service">Add Service</NavLink>
                    <NavLink className="nav-link">{user.photoURL ? <img style={{ height: "25px", width: "25px" }} className="rounded-circle" src={user.photoURL} alt={user.displayName} /> : <FaUserCircle title={user.displayName}></FaUserCircle>} {user.displayName}</NavLink>
                    <span style={{ cursor: "pointer" }} className="nav-link" onClick={handleSignOut}>
                      Logout <FaSignOutAlt></FaSignOutAlt>
                    </span>
                  </>
                  :
                  <>
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                  </>
              }
            </Nav>
            <Nav.Link href="#">
              <button className='btn btn-danger rounded-1'>Schedule A Consulation</button>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainMenu;