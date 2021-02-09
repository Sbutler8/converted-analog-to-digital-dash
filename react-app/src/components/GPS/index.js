
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MapSVG from '../../Icons/MapSVG';
import Map from '../Map';
import './GPS.css';



const GPS = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {

    })

    return (
        <>
            <MapSVG />
            <Map />
        </>
    )

}

export default GPS;
