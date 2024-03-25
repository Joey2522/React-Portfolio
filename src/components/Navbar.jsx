import Navbar from '/src/style/NavBar.css';

function BasicNav() {
  return (
    <navbar className="navbar">
      <h1 className="name">Joey Porter's Portfolio</h1>
      <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#mywork">My Work</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
    </navbar>
  );
}

export default BasicNav;