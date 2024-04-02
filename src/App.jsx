import Navbar from "./components/Navbar";
import Footer from "./components/FooterCard";
import { Outlet } from "react-router-dom";

import './styles/app.css';

function App() {
    return (
        <>
        <div className="background">
            <Navbar/>
                <main className="homeCard">
                    <Outlet/>
                </main>
            <Footer/>
        </div>
        </>
    )
}

export default App;