import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './GPSPermission.css';

const GPSPermission = ({setShowGPSPermissionModal}) => {
    const history = useHistory();

    const [toggle, setToggle] = useState(false)
    const user = useSelector(state => state.session.user)

    const handleSubmit = () => {
        setShowGPSPermissionModal(false);
        if (toggle) {
            history.push('/map');
        }
    }

    return (
        <>
            <div className="gps-warning-container">
                <i className="fas fa-exclamation-triangle"></i>
                <span className="warning-text">Oops! looks like you have GPS services disabled would you like to enable them now?</span>
                <div className="toggle-container">
                    <input type="checkbox" id="switch"  className="checkbox" value={toggle} onClick={() => toggle ? setToggle(false):setToggle(true)}/>
                    <label for="switch" className="gps-toggle"></label>
                </div>
            </div>
            <button className="gps-submit-button" type="submit" onClick={handleSubmit}>OK</button>
        </>
    )

}

export default GPSPermission;
