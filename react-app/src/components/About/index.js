import React, { useState } from 'react';
import AboutTwo from '../AboutTwo/index';
import { Modal } from '../../context/Modal';
import './About.css'

const About = ({showAbout, setShowAbout}) => {

    const [showAbout2, setShowAbout2] = useState(false);

    return (
        <>
            {showAbout &&
            <>
                <div className="about-header">About</div>
                <p className="about-body">This application is for users who love the latest and greatest trends in today's automotive industry. This app is meant to mimic the conversion of an older cars analog dashboard to that of a newer digital dashboard. In order to do so realistically one would connect a raspberryPi and Arduino to the On Board Diagnostics (OBD) Port in their car via serial cable and read live data at a continuous rate.  </p>
                <i class="fas fa-arrow-circle-right" onClick={() => {setShowAbout2(true)}}></i>
            </>
            }
            {showAbout2 &&
            <>
                <Modal onClose={() => setShowAbout2(false)} name="about">
                    <AboutTwo setShowAbout={setShowAbout} showAbout2={showAbout2} setShowAbout2={setShowAbout2}/>
                </Modal>
            </>
            }
        </>
    )
}

export default About;
