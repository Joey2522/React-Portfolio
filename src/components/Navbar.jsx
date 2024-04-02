import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Navbar.css';
import mainPic from '/src/images/profilePic.png';

function Navbar () {
 return (
 <>
    <nav className="navbar">
      <ul>
        <li><NavLink to="/aboutMe">About Me</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/resume">Resume</NavLink></li>
      </ul>
    </nav>
    <Link to={''}><img src={ mainPic } alt="Handsom Man" class="picture"/></Link>
    <header className="name">Joey Porter</header>
  </>
 );
}

export default Navbar;