import * as React from "react";

function SpeedometerLoadBar({ props }) {
  return (
    <svg id="loading-circle" width="360" height="250">
      <circle r="110" cx="125" cy="125" className="track"></circle>
      <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
        <stop offset="5%" stop-color="#e1ff16"></stop>
        <stop offset="25%" stop-color="#caff00"></stop>
        <stop offset="40%" stop-color="#b1ff00"></stop>
        <stop offset="60%" stop-color="#94ff00"></stop>
        <stop offset="80%" stop-color="#70ff00"></stop>
        <stop offset="100%" stop-color="#54ff4a"></stop>
        <stop offset="5%" stop-color="#35ff6e"></stop>
        <stop offset="25%" stop-color="#00fe8b"></stop>
        <stop offset="40%" stop-color="#00faba"></stop>
        <stop offset="60%" stop-color="#00f3df"></stop>
        <stop offset="80%" stop-color="#00eaf6"></stop>
        <stop offset="100%" stop-color="#0bdfff"></stop>
      </linearGradient>
      <circle r="110" cx="125" cy="125" className="progress"></circle>
      <path
        className="speedometer-fill"
        fill="#333"
        d="M352.65 177.65q5.7-47.8-20.4-88.65-26-40.8-72-56-46-15.1-91.15 2.45Q124 53 100.1 95.1q-23.9 42.15-15.7 89.55 8.25 47.5 44.65 79.35L146 244.55l-1.65-1.5q-.11-.07-.25-.2-.311-.28-.65-.6l-7.65-7.7q-.063-.102-.15-.2l-.4-.5q-.208-.195-.4-.45-.309-.328-.65-.7-.04-.051-.1-.15-.065-.051-.15-.15-18.982-22.218-24.15-52.1-6.65-38.4 12.7-72.55 19.4-34.1 55.95-48.3 36.55-14.25 73.75-2 37.3 12.3 58.4 45.4 21.1 33.1 16.5 71.75-4.6 38.75-32.8 66.05l17.9 18.55q34.75-33.7 40.45-81.55z"
        id="prefix__v"
      />
    </svg>
  );
}

export default SpeedometerLoadBar;
