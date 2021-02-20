import React from 'react';
import './AboutTwo.css'

const AboutTwo = ({showAbout2, setShowAbout, setShowAbout2}) => {

    return (
        <>
            {showAbout2 &&
            <>
                 <i class="fas fa-arrow-circle-left" onClick={() => {setShowAbout(true); setShowAbout2(false)}}></i>
                <img src="https://raw.githubusercontent.com/Sbutler8/converted-analog-to-digital-dash/main/WD.png" className="WD" alt=""></img>
            </>
            }
        </>
    )
}

export default AboutTwo;
