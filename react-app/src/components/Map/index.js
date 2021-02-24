import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker/index';
import MapAutoComplete from '../MapAutoComplete/index';
import {
  DirectionsRenderer,
} from 'react-google-maps'
import './Map.css';
import DateTime from '../DateTime';


const Map = () => {
  const GOOGLE_MAP_API_KEY  = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  const directionsService = new window.google.maps.DirectionsService();

  const destination = { lat: 39.746315975073344, lng: -104.99017351161523 };

  const [currentLocation, setCurrentLocation] = useState({})
  const [zoom, setZoom] = useState(15);
  let [directions, setDirections] = useState({});

  const authenticate = useSelector((state) => state.session.authenticate);
  const endDestination = useSelector(state => {
    if (state.map.lat) {
      return state.map;
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
    setTimeout(() => {
      navigator.geolocation.getCurrentPosition(success);
    }, 5000)
  }, [currentLocation])

    // useEffect(() => {
    //   getDirections()
    // }, [endDestination])

  if (!authenticate) {
    return null;
  }

  const getMapOptions = (maps) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: false,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };

  let delayFactor = 0;

  function getDirections () {
    directionsService.route(
      {
        origin: currentLocation,
        destination: endDestination,
        travelMode: window.google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        console.log(result)
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections({...result});
        } else if(status === window.google.maps.DirectionsStatus.OVER_QUERY_LIMIT) {
            delayFactor++;
            setTimeout(() => {
            getDirections()
          }, delayFactor * 1000);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  return (
    <>
    <DateTime component='map'/>
    <div className='wrapper'>
        <main className="main">
          <div className="map" style={{ height: '284px', width: '440px', overflow: 'hidden', borderRadius: '3%' }}>
            <MapAutoComplete id="auto-complete"/>
              <GoogleMapReact
                bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
                defaultCenter={{lat: 39.780352, lng: -104.8772608}}
                defaultZoom={zoom}
                options={getMapOptions}
                >
              {endDestination && <DirectionsRenderer directions={setTimeout(() => {getDirections()}, 5000)} />}
              </GoogleMapReact >
              {currentLocation &&
              <Marker position={currentLocation} style={{position:'absolute', zIndex:-12}}/>}
            </div>
        </main>
    </div>
    </>
  );
}

export default Map;
