import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <a id="github" href="https://github.com/Sbutler8/converted-analog-to-digital-dash"><i className="fab fa-github"></i></a>
            <a id="linkedin" href="https://www.linkedin.com/in/samantha-butler-410675178/"><i className="fab fa-linkedin"></i></a>
        </div>
    )
}

export default Footer;
