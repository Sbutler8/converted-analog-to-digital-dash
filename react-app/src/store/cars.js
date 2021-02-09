const GET_CARS = 'cars/getAllCars';
const ADD_CAR = 'cars/addCar';

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


export const getAllCars = (userId) => async (dispatch) => {
  const response = await fetch(`/api/cars/${userId}`);
  let data = await response.json()

  dispatch(getCars(data.cars));
  return data.users;
};

export const addNewCar = (car) => async (dispatch) => {
  const {userId, name, year, make, model, vin, pic} = car;
  const formData = {userId, name, year, make, model, vin, pic};

  console.log(formData)

  const res = await fetch(`/api/entry/${userId}`, {
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
      return { ...state, addedCar: action.payload }
    default:
      return state;
  }
};

export default carReducer;
