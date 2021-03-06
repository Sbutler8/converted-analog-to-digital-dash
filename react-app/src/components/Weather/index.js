import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentWeather } from '../../store/weather';
import './Weather.css';

const Weather = ({name}) => {
    const dispatch = useDispatch();

    const weather = useSelector(state => {
        if (state.weather.weather) {
        return state.weather.weather;
        }
    })

    const success = position => {
        let currentLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
        }
        dispatch(getCurrentWeather(currentLocation.lat, currentLocation.lng));
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    }, [])


    return (
        <div className={name==="dash" ? 'weather-dash-container '
        :name==="gps" ? 'weather-gps-container ':null}>
            {weather &&
            <>
                <div id="weather-header">Today's Weather
                    <img id="weather-icon" src={` https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`}></img>
                </div>
                <div className="weather-fields">Temp: {Math.floor(weather.temp * 9/5) + 32}</div>
                <div className="weather-fields">Feels like: {Math.floor(weather.app_temp* 9/5) + 32}</div>
                <div className="weather-fields">{weather.weather.description}</div>
                <div className="weather-fields">Wind Speed: {weather.wind_spd} [m/s]</div>
            </>
            }
        </div>
    )
}

export default Weather;
