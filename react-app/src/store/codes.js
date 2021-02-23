const GET_CODE = 'cars/getCode';

const getCode = (diagnostic) => {
  return {
    type: GET_CODE,
    payload: diagnostic,
  };
};

export const getOBDCode = (car) => async (dispatch) => {

    const {vin, code} = car;

    const response = await fetch(`https://api.eu.apiconnect.ibmcloud.com/hella-ventures-car-diagnostic-api/api/v1/dtc?client_id=${process.env.REACT_APP_IBM_CLIENT_ID}&client_secret=${process.env.REACT_APP_IBM_CLIENT_SECRET}&code_id=${code}&vin=${vin}&language=EN`, {
      method: 'GET',
      headers: {
        "content-type": 'application/json',
      },
    });
    let data = await response.json();
    dispatch(getCode(data))
    return data
  }

const initialState = {};

const codeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CODE:
      return { ...state, diagnostic: action.payload }
    default:
      return state;
  }
};

export default codeReducer;
