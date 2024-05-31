const GET_WEATHER = "cars/getWeather";

const getWeather = (weather) => {
  return {
    type: GET_WEATHER,
    payload: weather,
  };
};

export const getCurrentWeather = (lat, lon) => async (dispatch) => {
  fetch(
    `https://api.weatherbit.io/v2.0/current?lon=${lon}&lat=${lat}&key=${process.env.REACT_APP_WEATHER_KEY}&include=minutely`
  )
    .then(async (response) => {
      let data = await response.json();
      dispatch(getWeather(data.data[0]));
    })
    .catch((err) => {
      console.error(err);
    });
};

const initialState = { weather: null };

const weatherReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_WEATHER:
      newState = Object.assign({}, state);
      newState.weather = action.payload;
      return newState;
    // return { ...state, weather: action.payload }
    default:
      return state;
  }
};

export default weatherReducer;
