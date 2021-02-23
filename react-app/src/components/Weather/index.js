import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentWeather } from '../../store/weather';
import './Weather.css';

const Weather = () => {
    const dispatch = useDispatch();

    const [currentLocation, setCurrentLocation] = useState({})
    const weather = useSelector(state => {
        if (state.weather.weather) {
        return state.weather.weather;
        }
    })

    const success = position => {
        const currentLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
        }
        setCurrentLocation(currentLocation);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    }, [])

    setTimeout(dispatch(getCurrentWeather(currentLocation.lat, currentLocation.lng))); //fetch weather every 5 min

    return (
        <div className="weather-container">
            {weather &&
            <>
                <div>{weather.temp}</div>
                <div>Feels like: {weather.app_temp}</div>
                <img src={` https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`}></img>
                <div>{weather.weather.description}</div>
                <div>{weather.wind_spd}[m/s]</div>
            </>
            }
        </div>
    )
}

export default Weather;
