import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../App';
import logo from './../Images/ppp-removebg-preview.png';
import './Header.css'

const Header = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar></Navbar>
        <img src={logo} width={30} height={30} />
        <Navbar.Brand className='mx-2' href="#home">Programming-Languages</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"><Link to='/courses'>Courses</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to=''>FAQ</Link></Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
          </Nav>
          <Nav className='handleDarkMode'>
         
              <label htmlFor="">{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
              <ReactSwitch className='switch' onChange={toggleTheme} checked={theme === "dark"}></ReactSwitch>
  
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
          <Nav>

            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;