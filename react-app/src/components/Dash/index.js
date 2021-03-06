import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import DashSVG from "../../Icons/DashSVG";
import './Dash.css'
import io from "socket.io-client"
import * as d3 from 'd3';
import Engine from "../../Icons/dashboard/Engine";
import Battery from "../../Icons/dashboard/Battery";
import Gas from "../../Icons/dashboard/Gas";
import Lights from "../../Icons/dashboard/Lights";
import Oil from "../../Icons/dashboard/Oil";
import ManualDropDownEmitters from "../ManualDropDownEmitters";
import DateTime from "../DateTime";
import Weather from "../Weather";

let endPoint = process.env.REACT_APP_BASE_URL;
var socket = io.connect(`${endPoint}`);

const Dash = () => {
  const dispatch = useDispatch();
  let path = d3.path();

  const [speed, setSpeed] = useState(0);
  const [engineHidden, setEngineHidden] = useState(true);
  const [batteryHidden, setBatteryHidden] = useState(true);
  const [gasHidden, setGasHidden] = useState(true);
  const [lightsHidden, setLightsHidden] = useState(true);
  const [oilHidden, setOilHidden] = useState(true);
  const [toggle, setToggle] = useState(false)
  const [sliderValue, setSliderValue] = useState(0)

  let [pathArc, setPathArc] = useState(path.arc(-80,-414, 113,0*(Math.PI/180), speed * .0485));
  // const [currentLocation, setCurrentLocation] = useState({})
  // const weather = useSelector(state => {
  //   if (state.weather.weather) {
  //     return state.weather.weather;
  //   }
  // })

  // const success = position => {
  //   const currentLocation = {
  //     lat: position.coords.latitude,
  //     lng: position.coords.longitude
  //   }
  //   setCurrentLocation(currentLocation);
  // };

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(success);
  // }, [])

  // setTimeout(dispatch(getCurrentWeather(currentLocation.lat, currentLocation.lng))); //fetch weather every 5 min

  useEffect(() => {
    if (!toggle) {
      setSpeed(0);
      socket.disconnect()
    } else {
      socket.connect()
      socket.emit('get_speed')
    }
  }, [toggle])

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
    <DateTime component='dash'/>
    <div className="weather">
    <Weather name='dash'/>
    </div>
    <div className="toggle-arduino-container">
        <input type="checkbox" id="switch"  className="checkbox" value={toggle} onClick={() => toggle ? setToggle(false):setToggle(true)}/>
        <label htmlFor="switch" className="toggle" style={toggle ? {backgroundColor:'rgb(23, 248, 3)'}:{backgroundColor:'#f81919'}}></label>
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
      <div id={speed == 100 ? "speed-100":
               (speed > 9 && speed < 100) ? "speed-2digit":"speed"}>{speed}</div>
      <svg>
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
    {!toggle &&
      <div className="manual-controls-container">
        <div className="speed-slide-container">
          <input type="range" min="0" max="100" value={sliderValue} onChange={(e) => {setSliderValue(e.target.value); setSpeed(e.target.value)}} className="slider" id="myRange" ></input>
        </div>
       <ManualDropDownEmitters engineHidden={engineHidden} setEngineHidden={setEngineHidden} oilHidden={oilHidden} setOilHidden={setOilHidden} gasHidden={gasHidden} setGasHidden={setGasHidden} batteryHidden={batteryHidden} setBatteryHidden={setBatteryHidden} lightsHidden={lightsHidden} setLightsHidden={setLightsHidden}/>
      </div>
    }
    </>
  );
}

export default Dash;
