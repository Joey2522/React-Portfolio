import { Outlet } from 'react-router-dom';
import style from './App.css';
import Nav from './components/Navbar';
import AboutMe from './components/AboutCard';
import Footer from './components/FooterCard';


function App() {
  return (
    <div className="background">
      <Nav/>
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;