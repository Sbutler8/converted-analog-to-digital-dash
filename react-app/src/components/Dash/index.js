import React, { useEffect, useState } from "react";
import DashSVG from "../../Icons/DashSVG";
import './Dash.css'
import io from "socket.io-client"
import * as d3 from 'd3';
import Engine from "../../Icons/dashboard/Engine";
import Battery from "../../Icons/dashboard/Battery";
import Gas from "../../Icons/dashboard/Gas";
import Lights from "../../Icons/dashboard/Lights";
import Oil from "../../Icons/dashboard/Oil";

let endPoint = process.env.REACT_APP_BASE_URL;
var socket = io.connect(`${endPoint}`);

const Dash = () => {
  let path = d3.path();

  const [speed, setSpeed] = useState(0);
  const [engineHidden, setEngineHidden] = useState(true);
  const [batteryHidden, setBatteryHidden] = useState(true);
  const [gasHidden, setGasHidden] = useState(true);
  const [lightsHidden, setLightsHidden] = useState(true);
  const [oilHidden, setOilHidden] = useState(true);
  const [toggle, setToggle] = useState(false)

  let [pathArc, setPathArc] = useState(path.arc(-85,-458, 118,0*(Math.PI/180), speed * .0485));


  useEffect(() => {
    if (!toggle) {
      setSpeed(0);
      socket.disconnect()
    } else {
      socket.connect()
    }
  }, [toggle])

  socket.on("connected", () => {
    console.log('Connected to Front End YAY')
    socket.emit('get_speed')
  }, [socket]);

  socket.on("getting_speed", ({speed, engine, oil, gas, battery, lights}) => {

    if (engine == 1) {
      setEngineHidden(false)
    }
    if (oil == 1) {
      setOilHidden(false)
    }
    if (gas == 1) {
      setGasHidden(false)
    }
    if (battery == 1) {
      setBatteryHidden(false)
    }
    if (lights == 1) {
      setLightsHidden(false)
    }
    setSpeed(Math.ceil(0.1173 * speed)) //set max speed to 100 mph
  });

  return (
    <>
    <script src="https://d3js.org/d3-path.v2.min.js" charSet="utf-8"></script>
    <div className="toggle-arduino-container">
        <input type="checkbox" id="switch"  className="checkbox" value={toggle} onClick={() => toggle ? setToggle(false):setToggle(true)}/>
        <label for="switch" className="toggle"></label>
    </div>
    <div id="loading-path">
    <svg id="svg-container">
      <path id="svg-path" transform={'rotate(131)'} d={path}></path>
    </svg>
    </div>
    <div className="warning-container">

        <button id="engine" className="warnings" hidden={engineHidden} onClick={() => engineHidden ? setEngineHidden(false):setEngineHidden(true)}><Engine color="white"/></button>
        <button id="oil" className="warnings"  hidden={oilHidden} onClick={() => oilHidden ? setOilHidden(false):setOilHidden(true)}><Oil color="white"/></button>
        <button id="gas" className="warnings" hidden={gasHidden}  onClick={() => gasHidden ? setGasHidden(false):setGasHidden(true)}><Gas color="white"/></button>
        <button id="battery" className="warnings" hidden={batteryHidden}  onClick={() => batteryHidden ? setBatteryHidden(false):setBatteryHidden(true)}><Battery color="white"/></button>
        <button id="lights" className="warnings" hidden={lightsHidden}  onClick={() => lightsHidden ? setLightsHidden(false):setLightsHidden(true)}><Lights color="white"/></button>
    </div>

      <DashSVG id="svg" speed={speed}/>
      <div id="speed">{speed}</div>

      <svg viewBox="0 0 36 36" className="circular-chart">
        <defs>
          <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
            <stop offset="5%" stopColor="#e1ff16"></stop>
            <stop offset="25%" stopColor="#caff00"></stop>
            <stop offset="40%" stopColor="#b1ff00"></stop>
            <stop offset="60%" stopColor="#94ff00"></stop>
            <stop offset="80%" stopColor="#70ff00"></stop>
            <stop offset="100%" stopColor="#54ff4a"></stop>
            <stop offset="5%" stopColor="#35ff6e"></stop>
            <stop offset="25%" stopColor="#00fe8b"></stop>
            <stop offset="40%" stopColor="#00faba"></stop>
            <stop offset="60%" stopColor="#00f3df"></stop>
            <stop offset="80%" stopColor="#00eaf6"></stop>
            <stop offset="100%" stopColor="#0bdfff"></stop>
          </linearGradient>
        </defs>
    </svg>

    </>
  );
}

export default Dash;
