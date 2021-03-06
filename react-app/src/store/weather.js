const GET_WEATHER = 'cars/getWeather';

const getWeather = (weather) => {
  return {
    type: GET_WEATHER,
    payload: weather,
  };
};

export const getCurrentWeather= (lat,lon) => async (dispatch) => {

  fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${lon}&lat=${lat}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "12d1845924mshe44b4eafdb59514p1d95edjsn027c72fdb35a",
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
	}
  })
  .then(async response => {
    let data = await response.json()
    dispatch(getWeather(data.data[0]))
  })
  .catch(err => {
    console.error(err);
  });
  }

const initialState = {weather: null};

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
