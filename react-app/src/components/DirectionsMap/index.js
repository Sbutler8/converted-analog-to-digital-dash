import React, { useEffect, useState } from 'react'
import Marker from '../Marker/index';
import { compose, withProps } from "recompose";
import { setTripInfo } from '../../store/map';
import './DirectionsMap.css';
import { useDispatch, useSelector } from 'react-redux';
const { DirectionsRenderer, withScriptjs, withGoogleMap, GoogleMap } = require("react-google-maps");

const DirectionsMap = () => {

    const dispatch = useDispatch()
    let delayFactor = 0;
    let [startLoc, setStartLoc] = useState(null);

    const [directions, setDirections] = useState(null);
    const [wayPoints, setWayPoints] = useState(null);
    const [legs, setLegs] = useState(null);
    const [tripDistance, setTripDistance] = useState(null);
    const [tripDuration, setTripDuration] = useState(null);
    let [currentLocation, setCurrentLocation] = useState(null);

    const tripInfo = useSelector(state => state.map.tripInfo);
    const destinationLoc = useSelector(state => {
        if (state.map.destination) {
          return state.map.destination;
        }
      })

    const success = position => {
        startLoc = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        setStartLoc(startLoc);
      };

    useEffect(() => {
        setCurrentLocation(startLoc);

        navigator.geolocation.getCurrentPosition(success);
        if (destinationLoc) {
            if (tripInfo) {
                return
            }
            getDirections(startLoc, destinationLoc, getDirections, startLoc, success);
        }
    }, [destinationLoc, tripInfo]);

    const getDirections = (startLoc, destinationLoc, wayPoints = []) => {
        const waypts = [];
        if (wayPoints.length > 0) {
          waypts.push({
            location: new window.google.maps.LatLng(
              wayPoints[0].lat,
              wayPoints[0].lng
            ),
            stopover: true
          });
        }
        const directionService = new window.google.maps.DirectionsService();
        directionService.route(
          {
            origin: {lat: 39.7297203200278, lng: -104.97287436457881},
            destination: {lat: destinationLoc.lat, lng: destinationLoc.lng},
            waypoints: waypts,
            optimizeWaypoints: true,
            travelMode: window.google.maps.TravelMode.DRIVING
          },
          (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              setDirections(result)
              dispatch(setTripInfo(result.routes[0].legs[0]))

              setWayPoints(result.routes[0].overview_path.filter((elem, index) => {
                return index % 50 === 0; //the higher the numer the higher the precision
                }))
            } else if (
              status === window.google.maps.DirectionsStatus.OVER_QUERY_LIMIT
            ) {
              delayFactor += 0.2;
              // if (this.delayFactor <= 10) this.delayFactor = 0.2;
              setTimeout(() => {
                getDirections(startLoc, destinationLoc, wayPoints);
              }, delayFactor * 200);
            } else {
              console.error(`error fetching directions ${result}`);
            }
          }
        );
    }

    const getMapOptions = () => {
        return {
          disableDefaultUI: true,
          mapTypeControl: false,
          streetViewControl: true,
          styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
        };
      };

    return (
        <>
            {startLoc &&
            <GoogleMap
                defaultZoom={13}
                center={startLoc}
                defaultCenter={new window.google.maps.LatLng(startLoc.lat, startLoc.lng)}
                options={getMapOptions()}
            >
                {directions &&
                <>
                    <Marker
                        defaultLabel='start'
                        position={{
                        lat: startLoc.lat,
                        lng: startLoc.lng
                        }}
                    />
                    {/* <Marker
                        label='end'
                        position={{
                        lat: 39.7297203200278,
                        lng: -104.97287436457881
                        }}
                    /> */}
                </>
                }
                {/* {currentLocation &&
                    <Marker
                        defaultLabel='currentLocation'
                        position={{
                        lat: 39.78428868116762,
                        lng: -104.87966223706725
                        }}
                    />
                } */}
                {directions &&
                (
                <DirectionsRenderer
                    directions={directions}
                    options={{
                    polylineOptions: {
                        strokeColor: 'red',
                        strokeOpacity: 0.4,
                        strokeWeight: 4
                    },
                    preserveViewport: true,
                    suppressMarkers: true,
                    icon: { scale: 3 }
                    }}
                />
                )}
            </GoogleMap>
            }
            {tripDistance && tripDuration &&
                (<div className="trip-info-container">
                    <div>{tripDuration}</div>
                    <div>{tripDistance}</div>
                </div>)
            }
        </>
    )

}

export default compose(
    withProps({
      googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&&v=3.exp&libraries=geometry,drawing,places`,
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: '284px', maxWidth: '440px', overflow: 'hidden', borderRadius: '3%' }} />,
      mapElement: <div style={{ height: '284px', maxWidth: '440px', overflow: 'hidden', borderRadius: '3%' }} />
    }),
    withScriptjs,
    withGoogleMap
  )(DirectionsMap);
