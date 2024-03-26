import { Outlet } from 'react-router-dom';
import style from './App.css';
import Nav from './components/Navbar';
import AboutMe from './components/AboutCard';


function App() {
  return (
    <div className="background">
      <Nav/>
      <AboutMe />
    </div>
  );
}

export default App;