import React from 'react';
import './NoHardwareWarning.css';

const NoHardwareWarning = () => {

    return (
        <>
            <div className="screensize-warning-container">
                <i className="fas fa-exclamation-triangle"></i>
                <span className="warning-text">Oops! Heroku does not support hardware connected to your local COM ports. Please install and deploy the application locally using the GitHub ReadMe walk-through.</span>
                <a id="github" href="https://github.com/Sbutler8/converted-analog-to-digital-dash"><i className="fab fa-github"></i></a>
            </div>
        </>
    )
}

export default NoHardwareWarning;
