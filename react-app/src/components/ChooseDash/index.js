import React from "react";
import './ChooseDash.css'

const ChooseDash = () => {

  return (
    <>
    <div id="header">Choose A Dashboard For Your Trip</div>
    <button className="profilePic" style={{backgroundImage: 'url(' + require('../../public/dash.png') + ')'}}></button>
    </>
  );
}

export default ChooseDash;
