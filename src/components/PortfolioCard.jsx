import React from 'react';
import '../styles/PortfolioCard.css';
import { Link } from 'react-router-dom';
import trackerImage from '/src/images/runTracker.png';
import jsQuiz from '/src/images/jsQuiz.png';
import passGen from '/src/images/passGen.png';
import planner from '/src/images/planner.png';
import dateNight from '/src/images/dateNight.png';
import more from '/src/images/moretocome.png';
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

function Portfolio() {
  return (
    <>
    <header className="title">Portfolio</header>
    <div className="portfolioCard">
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Run Tracker</Accordion.Header>
        <Accordion.Body>
            <Link to="https://run-tracker-aa4292a38872.herokuapp.com/" target="_blank"><img src={ trackerImage }></img></Link>
            <Link to="https://github.com/Joey2522/fitness-tracker" target="_blank"><Button variant="outline-primary">GitHub Repo</Button></Link>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>JavaScript Quiz</Accordion.Header>
        <Accordion.Body>
            <Link to="https://joey2522.github.io/Challenge-4-Code-Quiz/" target="_blank"><img src={ jsQuiz }></img></Link>
            <Link to="https://github.com/Joey2522/Challenge-4-Code-Quiz" target="_blank"><Button variant="outline-primary">GitHub Repo</Button></Link>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>JavaScript Password Generator</Accordion.Header>
        <Accordion.Body>
            <Link to="https://joey2522.github.io/Challenge-3-JavaScrip-Password-Generator/" target="_blank"><img src={ passGen }></img></Link>
            <Link to="https://github.com/Joey2522/Challenge-3-JavaScrip-Password-Generator" target="_blank"><Button variant="outline-primary">GitHub Repo</Button></Link>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Daily Planner</Accordion.Header>
        <Accordion.Body>
            <Link to="https://joey2522.github.io/Challenge-5-Daily-Planner/" target="_blank"><img src={ planner }></img></Link>
            <Link to="https://github.com/Joey2522/Challenge-5-Daily-Planner" target="_blank"><Button variant="outline-primary">GitHub Repo</Button></Link>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Date Night Recipe Generator</Accordion.Header>
        <Accordion.Body>
            <Link to="https://joey2522.github.io/Team-X-Force/" target="_blank"><img src={ dateNight }></img></Link>
            <Link to="https://github.com/Joey2522/Team-X-Force" target="_blank"><Button variant="outline-primary">GitHub Repo</Button></Link>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>More To Come!</Accordion.Header>
        <Accordion.Body>
            <img src={ more }></img>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </>
  );
}

export default Portfolio;
