import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/Navbar.css';
import mainPic from '/src/images/Porter-0111.jpg';



function Navbar () {
 return (
 <>
    <nav className="navbar" id="navMenu">
      <ul>
        <li><HashLink to="/about#AboutMe" style={{ textDecoration: 'none' }} smooth>About Me</HashLink></li>
        <li><HashLink to="/portfolio#Portfolio" style={{ textDecoration: 'none' }} smooth>Portfolio</HashLink></li>
        <li><HashLink to="/contact#Contact" style={{ textDecoration: 'none' }} smooth>Contact</HashLink></li>
        <li><HashLink to="/resume#Resume" style={{ textDecoration: 'none' }} smooth>Resume</HashLink></li>
      </ul>
    </nav>
    <Link to={''}><img src={ mainPic } alt="Handsom Man" class="picture"/></Link>
    <h1 className="webDev">Web Developer</h1>
    <h2 className="list">HTML - CSS - JAVASCRIPT - REACT - NODE</h2>
    <header className="name">Joey Porter</header>
  </>
 );
}

export default Navbar;
