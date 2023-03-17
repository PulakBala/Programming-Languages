import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../App';
import { AuthContext } from '../UserContext/UserContext';
import logo from './../Images/ppp-removebg-preview.png';
import Tippy from '@tippyjs/react';
import './Header.css'

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error));
  }

  const handleMouseEnter = () =>{
    console.log(user.displayName);
  }
  return (
    <Navbar className='sticky-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
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
            <Nav.Link href="#deets">
             {
              user?.photoURL ?
              <>
             <Tippy className='mt-4' content={user?.displayName}>
             <Image
              style={{height: '30px'}} roundedCircle
              src={user.photoURL}
              onMouseEnter={handleMouseEnter}
              ></Image>
             </Tippy>
              </>
              :
              <>
                <FaUser></FaUser>
              </>
             }
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