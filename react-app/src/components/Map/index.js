import React from "react";
import { useSelector } from "react-redux";
import MapAutoComplete from "../MapAutoComplete/index";
import "./Map.css";
import DirectionsMap from "../DirectionsMap";

const Map = () => {
  const authenticate = useSelector((state) => state.session.authenticate);
  const endDestination = useSelector((state) => {
    if (state.map.lat) {
      return state.map;
    }
  });

  if (!authenticate) {
    return null;
  }

  const getMapOptions = (maps) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: false,
      streetViewControl: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "on" }],
        },
      ],
    };
  };

  return (
    <>
      {/* <DateTime component='map'/> */}
      <div className="wrapper">
        <main className="main">
          <div
            style={{
              height: "284px",
              width: "440px",
              overflow: "hidden",
              borderRadius: "3%",
            }}
          >
            <MapAutoComplete id="auto-complete" />
            <DirectionsMap />
          </div>
        </main>
      </div>
    </>
  );
};

export default Map;
