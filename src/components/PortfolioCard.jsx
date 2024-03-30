import React from 'react';
import '../styles/PortfolioCard.css';
import { Link } from 'react-router-dom';
import trackerImage from '../images/runTracker.png';
import jsQuiz from '../images/jsQuiz.png';
import "bootstrap/dist/css/bootstrap.min.css";


function Portfolio () {
    return (
        <>
        <div className="portfolioCard">
            <div>
            <div className="container">
                <div className="">
                <div className="col-xs-6 col-sm-4"><Link to="https://run-tracker-aa4292a38872.herokuapp.com/"><img src={ trackerImage } className="img-thumbnail"></img></Link></div>
                    <button className="btn btn-primary" role="button">Run Tracker GitHub Repo</button>
                <div className="col-xs-6 col-sm-4"><Link to="https://joey2522.github.io/Challenge-4-Code-Quiz/"><img src={ jsQuiz } className="img-thumbnail"></img></Link></div>
                    <button className="btn btn-primary" role="button">JS Quiz GitHub Repo</button>
                <div className="col-xs-6 col-sm-4"><Link to="https://run-tracker-aa4292a38872.herokuapp.com/"><img src={ trackerImage } className="img-thumbnail"></img></Link></div>
                <div className="col-xs-6 col-sm-4"><Link to="https://run-tracker-aa4292a38872.herokuapp.com/"><img src={ trackerImage } className="img-thumbnail"></img></Link></div>
                <div className="col-xs-6 col-sm-4"><Link to="https://run-tracker-aa4292a38872.herokuapp.com/"><img src={ trackerImage } className="img-thumbnail"></img></Link></div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}

export default Portfolio;