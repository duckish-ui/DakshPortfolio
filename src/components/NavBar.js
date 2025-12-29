import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import logo from '../assets/img/logo1.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  // Check if we're on a detail page
  const isDetailPage = location.pathname.startsWith('/project/');

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href={isDetailPage ? "/#home" : "#home"}>
          <img src={logo} alt="Logo" className="site-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              href={isDetailPage ? "/#home" : "#home"}
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href={isDetailPage ? "/#about" : "#about"}
              className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('about')}
            >
              About
            </Nav.Link>
            <Nav.Link 
              href={isDetailPage ? "/#skills" : "#skills"}
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link 
              href={isDetailPage ? "/#projects" : "#projects"}
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              href={isDetailPage ? "/#research" : "#research"}
              className={activeLink === 'research' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('research')}
            >
              Research
            </Nav.Link>
            <Nav.Link 
              href={isDetailPage ? "/#extracurriculars" : "#extracurriculars"}
              className={activeLink === 'extracurriculars' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('extracurriculars')}
            >
              Extracurriculars
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href='https://www.linkedin.com/in/daksh-mamnani-6a69812a1' target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href='https://www.instagram.com/daksh.mamnani' target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <HashLink to='#connect'>
              <button className="vvd"><span>Let's Connect</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}