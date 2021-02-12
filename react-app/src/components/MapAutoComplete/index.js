import React from 'react';
import { useDispatch } from "react-redux";
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import { addJournalEntryPoints } from '../../store/map';

const MapAutoComplete = () => {
  const dispatch = useDispatch();

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    // requestOptions: { /* Define search scope here */ }
    debounce: 300
  });


  const registerRef = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = e => {
    // Update the keyword of the input element

    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter as "false"

    setValue(description, false);
    clearSuggestions();

    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
          console.log('📍 Coordinates1: ', { lat, lng });
          dispatch(addJournalEntryPoints(lat, lng))
          // props.setLat(lat);
          // props.setLon(lng);
      }).catch(error => {
        console.log('😱 Error: ', error)
      });
  };

  const renderSuggestions = () =>
    data.map(suggestion => {
      const {
        id,
        structured_formatting: { main_text, secondary_text }
      } = suggestion;

      return (
          <li
            key={id}
            onClick={handleSelect(suggestion)}
          >
            <strong>{main_text}</strong> <small>{secondary_text}</small>
          </li>
      );
    });

  return (
      <>
        {/* <script type="text/javascript" src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places&callback=initMap`}></script> */}
        <div ref={registerRef}>
        <input
          id="auto-complete"
          style={{position:'absolute', zIndex: 2, height: '1px', width: '150px', borderRadius:30, textAlign:'center', fontFamily:'Reem Kufi,sans-serif', fontSize:'13px', margin: '5px'}}
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Where are you going?"
        />
        {/* We can use the "status" to decide whether we should display the dropdown or not */}
        {status === 'OK' && <ul style={{position:'absolute', zIndex: 2, marginTop:'40px'}}>{renderSuggestions()}</ul>}
        </div>
    </>
  );
};

export default MapAutoComplete;
