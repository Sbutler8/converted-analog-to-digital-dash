const GET_WEATHER = 'cars/getWeather';

const getWeather = (weather) => {
  return {
    type: GET_WEATHER,
    payload: weather,
  };
};

export const getCurrentWeather= () => async (dispatch) => {

    fetch("https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey", {
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-key": "582e68111bmshb5869215cf673c1p12d94fjsn5cde7220cec1",
		"x-rapidapi-host": "AccuWeatherstefan-skliarovV1.p.rapidapi.com"
	},
	"body": {
		"apiKey": process.env.REACT_APP_WEATHER_KEY,
		"locationKey": "Denver"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
  }

const initialState = {};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return { ...state, weather: action.payload }
    default:
      return state;
  }
};

export default weatherReducer;
