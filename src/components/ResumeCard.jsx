import React from 'react';
import '../styles/ResumeCard.css';
import { Link } from 'react-router-dom';
import CV from "../resume/JoeyPorter-Resume.pdf";
import Button from 'react-bootstrap/Button';
import { saveAs } from 'file-saver';


const saveFile = () => {
    FileSaver.saveAs(
        process.env.REACT_APP_CLIENT_URL + "../resume/CP-Resume.pdf"
    )
};

function Resume () {
    return (
        <>
        <header className="title" id="Resume">Resume</header>
        <div className="resumeCard">
        <h3>Download my resume below! <i class="fa-solid fa-hand-point-down"></i></h3>
            <i id="i" class="fa-solid fa-download"></i>
            <Link to={ CV } className="dlBtn" target="_blank" download>Click Here</Link>
        </div>
        </>
    );
}

export default Resume;
