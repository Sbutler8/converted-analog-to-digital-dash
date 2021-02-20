
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import MapSVG from '../../Icons/MapSVG';
import Map from '../Map';
import io from "socket.io-client"
import './GPS.css';
import { getCurrentWeather } from '../../store/weather';

let endPoint = process.env.REACT_APP_BASE_URL;
var socket = io.connect(`${endPoint}`);

const GPS = () => {
    const dispatch = useDispatch();
    const [speed, setSpeed] = useState(0)

    useEffect(() => {
        socket.emit('get_speed')
    }, [])

    // if (speed == 0) {
    //     socket.emit('get_speed')
    // }

    // dispatch(getCurrentWeather);

    

    socket.on("getting_speed", ({speed}) => {
        setSpeed(Math.ceil(0.1173 * speed))
    })

    return (
        <>
            <MapSVG className="dash"/>
            <Map className="map"/>
            <div id="map-speed">{speed}</div>
        </>
    )

}

export default GPS;
