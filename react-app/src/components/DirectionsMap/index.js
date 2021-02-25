import React, { useEffect, useState } from 'react'
import Marker from '../Marker/index';
import { compose, withProps } from "recompose";
const { DirectionsRenderer, withScriptjs, withGoogleMap, GoogleMap } = require("react-google-maps");

const DirectionsMap = () => {

    let delayFactor = 0;
    const GOOGLE_MAP_API_KEY  = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
    const [startLoc, setStartLoc] = useState({lat: 39.78428868116762, lng: -104.87966223706725})
    const [destinationLoc, setDestinationLoc] = useState({lat: 39.7297203200278, lng: -104.97287436457881
        })
    const [directions, setDirections] = useState(null)
    const [wayPoints, setWayPoints] = useState(null)
    let [currentLocation, setCurrentLocation] = useState(null)

    useEffect(() => {
        getDirections(startLoc, destinationLoc);
        setCurrentLocation();
    }, []);

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
            origin: {lat: 39.78428868116762, lng: -104.87966223706725},
            destination: {lat: 39.7297203200278, lng: -104.97287436457881},
            waypoints: waypts,
            optimizeWaypoints: true,
            travelMode: window.google.maps.TravelMode.DRIVING
          },
          (result, status) => {
            // console.log("status", status);
            if (status === window.google.maps.DirectionsStatus.OK) {
              setDirections(result)
              setWayPoints(result.routes[0].overview_path.filter((elem, index) => {
                return index % 30 === 0;
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

    setCurrentLocation = () => {
        let count = 0;
        let refreshIntervalId = setInterval(() => {
            const locations = wayPoints;
            if (locations) {
            if (count <= locations.length - 1) {
                const currentLocation = {lat: 39.78428868116762, lng: -104.87966223706725};
                this.setState({ currentLocation });

                const wayPts = [];
                wayPts.push(currentLocation);
                const startLoc = this.props.from.lat + ", " + this.props.from.lng;
                const destinationLoc = this.props.to.lat + ", " + this.props.to.lng;
                delayFactor = 0;
                getDirections(startLoc, destinationLoc, wayPts);
                count++;
            } else {
                clearInterval(refreshIntervalId);
            }
            }
        }, 1000);
    };

    return (
        <>
            {}
            <GoogleMap
                defaultZoom={15}
                // center={this.state.center}
                defaultCenter={new window.google.maps.LatLng(23.21632, 72.641219)}
            >
                {wayPoints &&

                    console.log(directions)

                }
                {directions &&
                <>
                    <Marker
                        defaultLabel='start'
                        position={{
                        lat: 39.78428868116762,
                        lng: -104.87966223706725
                        }}
                    />
                    <Marker
                        label='end'
                        position={{
                        lat: 39.7297203200278,
                        lng: -104.97287436457881
                        }}
                    />
                </>
                }
                {currentLocation &&
                    <Marker
                        defaultLabel='currentLocation'
                        position={{
                        lat: 39.78428868116762,
                        lng: -104.87966223706725
                        }}
                    />
                }
                {directions && (
                <DirectionsRenderer
                    directions={directions}
                    options={{
                    polylineOptions: {
                        strokeColor: 'limegreen',
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
        </>
    )

}

export default compose(
    withProps({
      googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&&v=3.exp&libraries=geometry,drawing,places`,
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
  )(DirectionsMap);
