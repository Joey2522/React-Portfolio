import style from '../styles/Navbar.css';

function Navbar () {
 return (
 <>
    <nav className="navbar">
      <ul>
        <li><a href="aboutMe">About Me</a></li>
        <li><a href="portfolio">Portfolio</a></li>
        <li><a href="contact">Contact</a></li>
        <li><a href="resume">Resume</a></li>
      </ul>
    </nav>
    <img src="/src/images/profilePic.png" alt="Handsom Man" class="picture"/>
    <header className="name">Joey Porter</header>
  </>
 );
}

export default Navbar;