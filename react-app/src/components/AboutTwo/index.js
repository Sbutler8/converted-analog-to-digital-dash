import React, { useState } from 'react';
import './AboutTwo.css'

const AboutTwo = ({showAbout2, setShowAbout, setShowAbout2}) => {

    return (
        <>
            {showAbout2 &&
            <>
                 <i class="fas fa-arrow-circle-left" onClick={() => {setShowAbout(true); setShowAbout2(false)}}></i>
                <img src="./WD.png" className="WD"></img>

            </>
            }
        </>
    )
}

export default AboutTwo;
