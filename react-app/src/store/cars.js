const GET_CARS = 'cars/getAllCars';

const getCars = (cars) => {
  return {
    type: GET_CARS,
    payload: cars,
  };
};


export const getAllCars = (userId) => async (dispatch) => {
  const response = await fetch(`/api/cars/${userId}`);
  let data = await response.json()
  console.log(data)
  dispatch(getCars(data.cars));
  return data.users;
};


const initialState = {};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS:
      return { ...state, cars: action.payload }
    default:
      return state;
  }
};

export default carReducer;
