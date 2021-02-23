import React from 'react';
import { useSelector } from 'react-redux';
import './AboutTwo.css'

const AboutTwo = ({showAbout2, setShowAbout, setShowAbout2}) => {

    const user = useSelector(state => state.session.user);

    return (
        <>
            {showAbout2 && !user &&
            <>
                 <i className="fas fa-arrow-circle-left" onClick={() => {setShowAbout(true); setShowAbout2(false)}}></i>
                <img src="https://raw.githubusercontent.com/Sbutler8/converted-analog-to-digital-dash/main/WD.png" className="WD" alt=""></img>
            </>
            }
        </>
    )
}

export default AboutTwo;
