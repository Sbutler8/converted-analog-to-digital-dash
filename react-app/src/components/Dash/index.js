import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import DashSVG from "../../Icons/DashSVG";
import './Dash.css'
import io from "socket.io-client"

let endPoint = process.env.REACT_APP_BASE_URL;
var socket = io.connect(`${endPoint}`);

export default function ClientComponent() {
    const [speed, setSpeed] = useState("");
  const [newLED, setNewLED] = useState("");
  const [newTemp, setNewTemp] = useState("");
  const [messages, setMessages] = useState(['Hello and Welcome']);
  const [message, setMessage] = useState("");
  // const [newButton, setNewButton] = useState("");
  // const [ldBar, setNewBar] = useState({});

  const ENDPOINT = process.env.REACT_APP_ENDPOINT;

  useEffect(() => {
      getMessages();

    //   socket.on("connected", () => {
    //       console.log('Connected to Front End YAY')
    //       socket.emit('get_speed')
    //   }, [socket]);


    socket.on("FromSpeed", (data) => {
      setSpeed(data);
    }, [messages.length]);

    function getMessages() {
        socket.on('message', msg => {
            setMessages([...messages, msg]);
        });
    }


    const onClick = () => {
        if (message !== "") {
            socket.emit("message", message);
            setMessage("");
        } else {
            alert('Please add a message');
        }
    }



    function onChange (e) {
          setMessage(e.target.value);
      }

    // socket.on("FromNewLED", (data) => {
    //   setNewLED(data);
    // });

    // socket.on("FromNewTemp", (data) => {
    //   setNewTemp(data);
    // });

    // socket.on("FromButton", (data) => {
    //   setNewButton(data);
    // });

    // socket.emit("buttonChanged", newButton);

  }, [ENDPOINT]);


  let speeds;
  let newTemps;
  let newLEDs;
  let buttonStatus = false;

  if (speed.item === 'speed') {
    speeds = speed.msg;
  }

  // if (newTemp.item === 'temp') {
  //   newTemps = newTemp.msg;
  // }

  // if (newButton.item === 'press') {
  //   buttonStatus = newButton.msg;
  // }

  // function buttonChanged() {
  //   setNewButton(prevState => !prevState);
  // }

  // function setProgress() {
  //   window.addEventListener('DOMContentLoaded', () => {
  //     let progressBar1 = new ldBar("#progress_bar");
  //     document.getElementById("progress_bar").ldBar
  //     progressBar1.set(amt.toString())
  //   })

  // }


  function setProgress() {
    let progressCircle = document.querySelector(".progress");
        let radius = progressCircle.r.baseVal.value;
        //circumference of a circle = 2πr;
        let circumference = radius * 2 * Math.PI;
        progressCircle.style.strokeDasharray = circumference;

        //0 to 100
        setProgress(50);

        function setProgress(percent) {
            progressCircle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
        }
  }

  function trialSpeed() {

  }

  return (
    <>
    {messages.length > 0 &&
    messages.map(msg => (
        <p>{msg}</p>
    ))}
    {/* <input value={message} onChange={e => onChange(e)}></input>
    <button onClick={() => onClick()}>Send Message</button> */}
      <link rel="stylesheet" type="text/css" href="https://loadingio.github.io/loading-bar/dist/loading-bar.css"/>
      <script src="https://loadingio.github.io/loading-bar/dist/loading-bar.js"></script>
      <button id="speedometer-button" onClick={trialSpeed}>Start Speedometer</button>
      <DashSVG id="svg" speed={speeds}/>

      <div id="speed">{speeds}</div>
      <svg id="loading-circle" width="250" height="250">
        <circle r="100" cx="125" cy="125" class="track"></circle>
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
        <circle r="100" cx="125" cy="125" class="progress"></circle>
      </svg>
      <script type="text/javascript">
        {document.addEventListener('DOMContentLoaded', () => setProgress())}

      </script>

      {/* <div className="ldBar" id="progress_bar"
            data-type="stroke"
            data-path=" M -90.5 98.3
            Q -115.8 72.7 -120.15 26.85 -124.5 -19.05 -94.6 -56.65 -64.7 -94.3 -25.95 -102.7 12.75 -111.15 45.15 -97.4 77.55 -83.65 101.5 -48.55 125.45 -13.45 119.6 28.95 113.75 71.3 95.15 98.95"
            data-stroke="data:ldbar/res,gradient(0,0,#FFFF33, #FF8B0A)"
            data-stroke-width="20"
            data-max={98}
            ref={t => speeds}
            >
        </div>
        <link rel="stylesheet" type="text/css" href="loading-bar.css"/>
        <script type="text/javascript" src="loading-bar.js"></script> */}

        {/* <script type="text/javascript">
          { document.addEventListener('DOMContentLoaded', () => {
              let progressBar = document.getElementById("progress_bar").ldBar.set
              // progressBar.set({speeds})
          })
          }
        </script> */}

      {/* <div className="grid">
          <div id="">Speed Here:{speeds}</div>
          <div>Temp Here:{newTemps}</div>
          {buttonStatus ? 'ON':'OFF'}
          <button className="toggle-button" onClick={buttonChanged}>Toggle Button</button>
      </div> */}
    </>
  );
}
