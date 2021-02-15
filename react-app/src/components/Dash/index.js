import React, { useEffect, useState, useRef, useDebugValue } from "react";
import { useDispatch, useSelector } from 'react-redux';
import socketIOClient from "socket.io-client";
import DashSVG from "../../Icons/DashSVG";
import * as sessionActions from '../../store/session'
import * as webSocketActions from '../../store/websocket'
import './Dash.css'
import io from "socket.io-client"
import ldBar from '@loadingio/loading-bar';
import * as d3 from 'd3';
import Engine from "../../Icons/dashboard/Engine";
import Battery from "../../Icons/dashboard/Battery";
import Gas from "../../Icons/dashboard/Gas";
import Lights from "../../Icons/dashboard/Lights";
import Oil from "../../Icons/dashboard/Oil";
import TrunkOpen from "../../Icons/dashboard/TrunkOpen";

let endPoint = process.env.REACT_APP_BASE_URL;
var socket = io.connect(`${endPoint}`);

const Dash = ({...props}) => {
  const ProgressBar = require('progressbar.js')
  // const ldBar = require('react-loading-io');

  const dispatch = useDispatch();


  const [speed, setSpeed] = useState(0);
  const [engine, setEngine] = useState(null);
  const [battery, setBattery] = useState(null);
  const [gas, setGas] = useState(null);
  const [lights, setLights] = useState(null);
  const [oil, setOil] = useState(null);
  const [trunk, setTrunk] = useState(null);

  const [engineHidden, setEngineHidden] = useState(true);
  const [batteryHidden, setBatteryHidden] = useState(true);
  const [gasHidden, setGasHidden] = useState(true);
  const [lightsHidden, setLightsHidden] = useState(true);
  const [oilHidden, setOilHidden] = useState(true);

  const [path, setPath] = useState("");

  const [status, setStatus] = useState("");


  useEffect(() => {
    socket.emit('get_speed')

      // drawPath()
      // props.dataValue=speed
    console.log('SPEED IN effect',speed)
      // bar.setAttribute('data-value', 40)

  }, [])

    socket.on("connected", () => {
      console.log('Connected to Front End YAY')
      setStatus('connected')
  }, [socket]);

  socket.on("getting_speed", ({speed, engine, oil, gas, battery, lights}) => {
    // console.log('Getting_Speed Front End YAY: ', speed, engine, oil, gas, battery, lights)
    if (engine == 1) {
      setEngineHidden(false)
      setEngine(engine)
    }
    if (oil == 1) {
      setOilHidden(false)
      setOil(oil)
    }
    if (gas == 1) {
      setGasHidden(false)
      setGas(gas)
    }
    if (battery == 1) {
      setBatteryHidden(false)
      setBattery(battery)
    }
    if (lights == 1) {
      setLightsHidden(false)
      setLights(battery)
    }
    setSpeed(Math.ceil(0.1173 * speed)) //set max speed to 120 mph
  });

const turnOff = (e) => {
  console.log(e)
  // const icon = document.querySelector(`#${id}`)
}

const drawPath = () => {
  let path = d3.path();
  path.arc(0, 0, 40, 0, 2 * Math.PI)

  d3.select('#loading-path')
  .append('svg')
  .attr('d', path)
  .attr('fill', 'url(#linearColors)')
  .attr('stroke', 'white')
}


  return (
    <>
    <script src="https://d3js.org/d3-path.v2.min.js" charSet="utf-8"></script>
    <div id="loading-path"></div>
    <div className="warning-container">
      {engine &&
        <button id="engine" className="warnings" hidden={engineHidden} onClick={() => engineHidden ? setEngineHidden(false):setEngineHidden(true)}><Engine color="white"/></button>
      }
      {oil &&
        <button id="oil" className="warnings"  hidden={oilHidden} onClick={() => oilHidden ? setOilHidden(false):setOilHidden(true)}><Oil color="white"/></button>
      }
      {gas &&
        <button id="gas" className="warnings" hidden={gasHidden}  onClick={() => gasHidden ? setGasHidden(false):setGasHidden(true)}><Gas color="white"/></button>
      }
      {battery &&
        <button id="battery" className="warnings" hidden={batteryHidden}  onClick={() => batteryHidden ? setBatteryHidden(false):setBatteryHidden(true)}><Battery color="white"/></button>
      }
      {lights &&
        <button id="lights" className="warnings" hidden={lightsHidden}  onClick={() => lightsHidden ? setLightsHidden(false):setLightsHidden(true)}><Lights color="white"/></button>
      }
        {/* <button id="trunk" className="warnings" hidden={true}><TrunkOpen color="white"/></button> */}
    </div>
    {/* <button className="engine"><img src={require('../../Icons/dashboard/Engine.js')}></img></button> */}
    {/* <input value={message} onChange={e => onChange(e)}></input>
    <button onClick={() => onClick()}>Send Message</button> */}
      <link rel="stylesheet" type="text/css" href="https://loadingio.github.io/loading-bar/dist/loading-bar.css"/>
      <script src="https://loadingio.github.io/loading-bar/dist/loading-bar.js"></script>
      <script src="./dist/progressbar.min.js">{}</script>
      <script type="text/javascript" src="loading-bar.js"></script>
      {/* <div className="ldBar"></div> */}
      {/* <link rel="stylesheet" type="text/css" href="loading-bar.css"/> */}

      <DashSVG id="svg" speed={speed}/>
      <div id="speed">{speed}</div>

      {/* <svg viewBox="0 0 36 36" class="circular-chart">
      <path className="circle"
        fill="url(#linearColors)"
        stroke-dasharray="80, 100"
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <defs>
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
      </defs>
    </svg> */}
      {/* <svg id="loading-circle" width="250" height="250">
        <circle r="80" cx="125" cy="125" class="track"></circle>
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
        <circle r="80" cx="125" cy="125" class="progress"></circle>
      </svg> */}
      {/* <script type="text/javascript">
        {document.addEventListener('DOMContentLoaded', () => setProgress())}

      </script> */}

      <div className="ldBar" id="progress_bar"
            data-type={props.dataType}
            data-path=" M -90.5 98.3
            Q -115.8 72.7 -120.15 26.85 -124.5 -19.05 -94.6 -56.65 -64.7 -94.3 -25.95 -102.7 12.75 -111.15 45.15 -97.4 77.55 -83.65 101.5 -48.55 125.45 -13.45 119.6 28.95 113.75 71.3 95.15 98.95"
            data-stroke="data:ldbar/res,gradient(0,0,#e1ff16, #0bdfff)"
            data-stroke-width="20"
            data-max={98}
            data-value={20}
            >
        </div>

      {/* <div className="grid">
          <div id="">Speed Here:{speeds}</div>
          <div>Temp Here:{newTemps}</div>
          {buttonStatus ? 'ON':'OFF'}
          <button className="toggle-button" onClick={buttonChanged}>Toggle Button</button>
      </div> */}
    </>
  );
}

export default Dash;
