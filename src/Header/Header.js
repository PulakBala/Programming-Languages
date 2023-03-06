import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../App';
import { AuthContext } from '../UserContext/UserContext';
import logo from './../Images/ppp-removebg-preview.png';
import './Header.css'

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error));
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar></Navbar>
        {/* <img src={logo} width={30} height={30} /> */}
        <img src={logo} width={30} alt=''></img>
        <Navbar.Brand className='mx-2' href="#home"><Link to="/">Programming-Languages</Link></Navbar.Brand>
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

           
            <Nav.Link  href="#memes">
             <>
             {
              user?.uid ?
              <>
              <span>{user?.displayName}</span>
              <Button onClick={handleLogOut}>Log Out</Button>
              </>
              :
              <>
              <Link className='p-4' to='/login'>login</Link>
              <Link to='/signup'>sign up</Link>
              </>
             }
             </>
            </Nav.Link>
            <Nav.Link href="#deets">More deets</Nav.Link>
          </Nav>
          <Nav>



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;