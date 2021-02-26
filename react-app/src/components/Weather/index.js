import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentWeather } from '../../store/weather';
import './Weather.css';

const Weather = ({name}) => {
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
        // dispatch(getCurrentWeather(currentLocation.lat, currentLocation.lng))
    }, [])

    // if (currentLocation) {
    //     setTimeout(() => {
    //         dispatch(getCurrentWeather(currentLocation.lat, currentLocation.lng));
    //     }, 5000)
    // }

    return (
        <div className={name==="dash" ? 'weather-dash-container '
        :name==="gps" ? 'weather-gps-container ':null}>
            {weather &&
            <>
                <div id="weather-header">Today's Weather
                    <img id="weather-icon" src={` https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`}></img>
                </div>
                <div className="weather-fields">Temp: {weather.temp}</div>
                <div className="weather-fields">Feels like: {weather.app_temp}</div>
                <div className="weather-fields">{weather.weather.description}</div>
                <div className="weather-fields">Wind Speed: {weather.wind_spd} [m/s]</div>
            </>
            }
        </div>
    )
}

export default Weather;
