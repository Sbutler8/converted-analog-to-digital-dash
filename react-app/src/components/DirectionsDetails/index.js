import React from 'react';
import { useSelector } from 'react-redux';
import './DirectionsDetails.css';

const DirectionsDetails = ({setShowDetails}) => {

    const duration = useSelector(state => {
        if (state.map.tripInfo) {
            return state.map.tripInfo.duration;
        }
    });
    const distance = useSelector(state => {
        if (state.map.tripInfo) {
            return state.map.tripInfo.distance;
        }
    });

    return (
        <>
            {duration &&
                <div className="directions-details-container">
                    <div className="trip-info-header">Trip Info</div>
                    <div className="trip-info-fields">Duration: {duration}</div>
                    <div className="trip-info-fields">Distance: {distance}</div>
                    <button className="trip-details-button" onClick={() => setShowDetails(true)}>Details</button>
                </div>
            }
        </>
    );
}

export default DirectionsDetails;
