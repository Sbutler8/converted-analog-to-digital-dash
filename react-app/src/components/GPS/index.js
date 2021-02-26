
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import MapSVG from '../../Icons/MapSVG';
import Map from '../Map';
import DateTime from '../DateTime';
import io from "socket.io-client"
import './GPS.css';
import { getCurrentWeather } from '../../store/weather';
import DirectionsDetails from '../DirectionsDetails';
import Weather from '../Weather';
// import DirectionsMap from '../DirectionsMap';

let endPoint = process.env.REACT_APP_BASE_URL;
var socket = io.connect(`${endPoint}`);

const GPS = () => {
    const dispatch = useDispatch();
    const [speed, setSpeed] = useState(0)
    const [showDetails, setShowDetails] = useState(false);

    const steps = useSelector(state => {
        if (state.map.tripInfo) {
            return state.map.tripInfo.steps;
        }
    });

    useEffect(() => {
        socket.emit('get_speed')
    }, [])

    socket.on("getting_speed", ({speed}) => {
        setSpeed(Math.ceil(0.1173 * speed))
    })

    // const fillInstructions = (instruction) => {
    //     document.addEventListener('DOMContentLoaded', () => {
    //         console.log(instruction)
    //         let directionContainer = document.querySelector('.step-by-step-directions-container');
    //         let addedInstruction = document.createElement('div');
    //         addedInstruction.innerHTML = instruction;
    //         directionContainer.appendChild(addedInstruction);
    //     })
    // }

    return (
        <>
            <DateTime component='map'/>
            {/* <Weather name='gps'/> */}
            <MapSVG className="dash"/>
            {!showDetails &&
            <>
                <Map />
                <DirectionsDetails setShowDetails={setShowDetails}/>
            </>
            }
            {showDetails &&
                 <div className="detailed-directions-main" style={{ height: '284px', width: '440px', overflow: 'hidden', borderRadius: '3%' }}>
                    <div className="detailed-directions-header">Step-By-Step-Directions</div>
                    {steps &&
                        steps.map((step,i)=> {
                            return(
                            <div className="step-by-step-directions-container">
                                {i+1}: {step.instructions.split('<b>').join('').split('</b>').join('')}
                            </div>
                            )
                        })
                    }
                 </div>
            }
            <div id="map-speed">{speed}</div>
        </>
    )

}

export default GPS;
