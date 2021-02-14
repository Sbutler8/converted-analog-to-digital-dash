const GET_CODE = 'cars/getCode';

const getCode = (car) => {
  return {
    type: GET_CODE,
    payload: car,
  };
};

export const getOBDCode = async (car) => {

    const {carId, vin, mileage, code} = car;
    const carObj = {carId, vin, mileage, code};

    const response = await fetch(`api/codes/${carId}/http://api.carmd.com/v3.0/diag?vin=${vin}&mileage=${mileage}&dtc=${code}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "authorization": process.env.AUTHORIZATION,
        "partner-token": process.env.PARTNER_TOKEN,
      },
    });
    return await response.json();
  }


// export const getOBDCode = (carId) => async (dispatch) => {
//   const response = await fetch(`/api/codes/${carId}`);
//   let data = await response.json()
//   console.log('DATA----->', data)
//   dispatch(setCar(data.chosenCar));
//   return data.chosenCar;
// };


const initialState = {};

const codeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CODE:
      return { ...state, cars: action.payload }
    default:
      return state;
  }
};

export default codeReducer;
