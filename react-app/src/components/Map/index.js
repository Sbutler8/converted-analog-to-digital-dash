import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import GoogleMapReact from 'google-map-react';
// import MapViewDirections from 'react-native-maps-directions';
import Marker from '../Marker/index';
import * as mapActions from "../../store/map";
import MapAutoComplete from '../MapAutoComplete/index';


const Map = () => {
  const GOOGLE_MAP_API_KEY  = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

  const dispatch = useDispatch();
  const [markerShown, setMarkerShown] = useState(false)
  const [center, setCenter] = useState({lat: 39.73750267736547, lng: -104.98928358002577 });
  const [addedMarkers, setAddedMarkers] = useState([{lat: 0, lng: 0 }]);
  const [zoom, setZoom] = useState(4);
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    if (user) {
      dispatch(mapActions.getAllJournalEntryPoints(user.id))
    }
  }, [dispatch, user]);

  const authenticate = useSelector((state) => state.session.authenticate);
  const journalEntryCoordinates = useSelector((state) => state.map.coordinates);
  console.log(journalEntryCoordinates);

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


  const onMapClick = (e) => {
    console.log('LATLONG----------->',e)
    // isMarkerShown:true

    return (<Marker
            lat={e.lat}
            lng={e.lng}
            name="My Marker"
            color="blue"
          />)
  }

  return (
    <>
    <script type="text/javascript" src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places&callback=initMap`}></script>
    <div className='wrapper'>
        <main className="main">
          <div className="map" style={{ height: '284px', width: '440px', marginTop: '50px', marginLeft: '265px', overflow: 'hidden', borderRadius: '3%' }}>
            <MapAutoComplete id="auto-complete"/>
              <GoogleMapReact
                bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
                defaultCenter={center}
                defaultZoom={zoom}
                onClick={() => setMarkerShown(true)}
                options={getMapOptions}
                >
                <Marker
                  lat={addedMarkers.lat}
                  lng={addedMarkers.lng}
                  name="My Marker"
                  color="pink"
                />
              </GoogleMapReact >
            </div>
        </main>
    </div>
    </>
  );
}

export default Map;
