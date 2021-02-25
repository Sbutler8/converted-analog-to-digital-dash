const SET_TRIP_DATA = 'session/setTripData';
const ADD_DATA = 'session/addData';
const END_DATA = 'session/addEndData'

const setTripData = (trip) => {
  return {
    type: SET_TRIP_DATA,
    trip,
  };
};

const addEndData = (endpoint_lat, endpoint_lon) => {
  return {
    type: END_DATA,
    endpoint_lat,
    endpoint_lon
  }
}

export const setTripInfo = (tripInfo) => async dispatch => {
  console.log('passed in trip info:', tripInfo)
  dispatch(setTripData(tripInfo));
};


export const addDestinationPoint = (lat, lon) => async dispatch => {
  dispatch(addEndData(lat, lon));
};

const initialState = { };

const mapReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_TRIP_DATA:
      newState = Object.assign({}, state);
      console.log('map reducer trip:',action.trip)
      newState = {
        'duration': action.trip.duration.text,
        'distance': action.trip.distance.text,
        'steps': action.trip.steps,
      };
      return newState;
    case ADD_DATA:
      newState = Object.assign({}, state);
      newState.addedLat = action.journal_entry_lat;
      newState.addedLon = action.journal_entry_lon;
      return newState;
    case END_DATA:
      newState = Object.assign({}, state);
      newState = {'lat': action.endpoint_lat, 'lng':action.endpoint_lon}
      return newState;
    // case REMOVE_USER:
    //   newState = Object.assign({}, state, { user: null, authenticate: false });
    //   return newState;
    default:
      return state;
  }
};

export default mapReducer;
