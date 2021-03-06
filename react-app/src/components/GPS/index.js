
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MapSVG from '../../Icons/MapSVG';
import Map from '../Map';
import DateTime from '../DateTime';
import io from "socket.io-client"
import './GPS.css';
import DirectionsDetails from '../DirectionsDetails';
import Weather from '../Weather';

let endPoint = process.env.REACT_APP_BASE_URL;
var socket = io.connect(`${endPoint}`);

const GPS = () => {
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

    return (
        <>
            <DateTime component='map'/>
            <Weather name='gps'/>
            <MapSVG className="dash"/>
            {!showDetails &&
            <>
                <Map />
                <DirectionsDetails setShowDetails={setShowDetails}/>
            </>
            }
            {showDetails &&
                 <div className="detailed-directions-main" style={{ height: '284px', width: '440px', overflowY: 'scroll', borderRadius: '3%' }}>
                    <div className="detailed-directions-header">Step-By-Step-Directions</div>
                    {steps &&
                        steps.map((step,i)=> {
                            return(
                            <div className="step-by-step-directions-container">
                                <b>{i+1}</b>: {step.instructions.split('<b>').join('').split('</b>').join('').split('style').join('').split('<div ="font-size:0.9em">').join('').split('/<wbr/>').join('').split('</div>').join(' ')}
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
