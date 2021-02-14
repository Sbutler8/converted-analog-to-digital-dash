const GET_CARS = 'cars/getAllCars';
const ADD_CAR = 'cars/addCar';
const SET_CAR = 'cars/setCar';

const getCars = (cars) => {
  return {
    type: GET_CARS,
    payload: cars,
  };
};

const addCar = (car) => {
  return {
    type: ADD_CAR,
    payload: car,
  };
};

const setCar = (chosenCar) => {
  return {
    type: SET_CAR,
    payload: chosenCar,
  };
};


export const getAllCars = (userId) => async (dispatch) => {
  const response = await fetch(`/api/cars/${userId}`);
  let data = await response.json()

  dispatch(getCars(data.cars));
  return data.users;
};

export const setChosenCar = (carId) => async (dispatch) => {
  const response = await fetch(`/api/cars/user/${carId}`);
  let data = await response.json()
  console.log('DATA----->', data)
  dispatch(setCar(data.chosenCar));
  return data.chosenCar;
};

export const addNewCar = (car) => async (dispatch) => {
  const {userId, name, year, make, model, vin, pic} = car;
  const formData = {userId, name, year, make, model, vin, pic};

  console.log('FORMDATA:',formData)

  const res = await fetch(`/api/cars/entry/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

    dispatch(addCar(res));
    return res;
};



const initialState = {};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS:
      return { ...state, cars: action.payload }
    case ADD_CAR:
      return {...state, [action.car]: action.car};
    case SET_CAR:
      return { ...state, chosenCar: action.payload }
    default:
      return state;
  }
};

export default carReducer;
