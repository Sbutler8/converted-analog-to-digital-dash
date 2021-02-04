export const GET_SPEED= "GET_SPEED"
export const SET_MESSAGE= "SET_MESSAGE"

export function getSpeed(speed){
    return {
        type: GET_SPEED,
        speed
    }
}

export function storeMessage(message){
  return {
      type: SET_MESSAGE,
      message
  }
}

export const setMessage = (data) => async (dispatch) => {
    dispatch(storeMessage(data));
    return data;

};

const initialState = { speed: null, temp: null, button: true};

const wsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPEED:
      state.speed = action.speed;
      return state;
    case SET_MESSAGE:
      state.message = action.message;
      return state;
    default:
      return state;
  }
};

export default wsReducer;
