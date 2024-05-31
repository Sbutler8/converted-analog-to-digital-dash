import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentWeather } from "../../store/weather";
import "./Weather.css";

const Weather = ({ name }) => {
  const dispatch = useDispatch();

  const weather = useSelector((state) => state.weather.weather);

  const success = useCallback(
    (position) => {
      let currentLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      dispatch(getCurrentWeather(currentLocation.lat, currentLocation.lng));
    },
    [dispatch]
  );
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [success]);

  return (
    <div
      className={
        name === "dash"
          ? "weather-dash-container "
          : name === "gps"
          ? "weather-gps-container "
          : null
      }
    >
      {weather && (
        <>
          <div id="weather-header">
            Today's Weather
            <img
              alt="weather-icon"
              id="weather-icon"
              src={` https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`}
            ></img>
          </div>
          <div className="weather-fields">
            Temp: {Math.floor((weather.temp * 9) / 5) + 32}
          </div>
          <div className="weather-fields">
            Feels like: {Math.floor((weather.app_temp * 9) / 5) + 32}
          </div>
          <div className="weather-fields">{weather.weather.description}</div>
          <div className="weather-fields">
            Wind Speed: {weather.wind_spd} [m/s]
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
