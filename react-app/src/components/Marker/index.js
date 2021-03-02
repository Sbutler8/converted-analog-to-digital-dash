import React from 'react';
import './Marker.css'


const Marker = (props) => {

    const { color, name } = props;

    return (
        <div className="marker-container">
            <div className="pin bounce"
            style={{ backgroundColor: color, cursor: 'pointer'}}
            title={name}
          />
          <div className="pulse"></div>
        </div>

    );
}

export default Marker;
