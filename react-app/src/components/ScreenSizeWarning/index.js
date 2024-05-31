import React from "react";
import "./ScreenSizeWarning.css";

const ScreenSizeWarning = () => {
  return (
    <>
      <div className="screensize-warning-container">
        <i className="fas fa-exclamation-triangle"></i>
        <span className="warning-text">{`Looks like you are utlizing this app using a screen size of ${window.innerWidth}px by ${window.innerHeight}px. Please note this application is specifically designed for an Arduino 7" touchscreen with a screen size of 480px by 800px.`}</span>
      </div>
    </>
  );
};

export default ScreenSizeWarning;
