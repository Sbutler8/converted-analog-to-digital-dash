import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker/index';
import MapAutoComplete from '../MapAutoComplete/index';
import {
  DirectionsRenderer,
} from 'react-google-maps'
import './Map.css';


const Map = () => {
  const GOOGLE_MAP_API_KEY  = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  const directionsService = new window.google.maps.DirectionsService();

  const destination = { lat: 39.746315975073344, lng: -104.99017351161523 };

  const [currentLocation, setCurrentLocation] = useState({})
  const [zoom, setZoom] = useState(15);
  const [directions, setDirections] = useState("");

  const authenticate = useSelector((state) => state.session.authenticate);

  const success = position => {
    const currentLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentLocation(currentLocation);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
    console.log(currentLocation)
  }, [currentLocation])

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


  const getDirections = () => {
    directionsService.route(
      {
        origin: currentLocation,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }


  return (
    <>

    {/* <script type="text/javascript" src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places&callback=initMap`}></script> */}
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
                {directions && <DirectionsRenderer directions={getDirections()} />}
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
