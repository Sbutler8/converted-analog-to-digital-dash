import React from 'react';
import './GPSPermission.css';

const GPSPermission = () => {
    return (
        <>
            <div className="gps-warning-container">
                <i class="fas fa-exclamation-triangle"></i>
                <span class="warning-text">Oops! looks like you have GPS services disabled would you like to enable them now?</span>
                <div className="toggle-container">
                    <input type="checkbox" id="switch"  class="checkbox" />
                    <label for="switch" class="toggle"></label>
                </div>
            </div>
            <button className="gps-submit-button" type="submit">OK</button>
        </>
    )

}

export default GPSPermission;
