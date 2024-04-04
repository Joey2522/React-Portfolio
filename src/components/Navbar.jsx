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
        <li><HashLink to="/aboutMe#AboutMe" smooth>About Me</HashLink></li>
        <li><HashLink to="/portfolio#Portfolio" smooth>Portfolio</HashLink></li>
        <li><HashLink to="/contact#Contact" smooth>Contact</HashLink></li>
        <li><HashLink to="/resume#Resume" smooth>Resume</HashLink></li>
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
