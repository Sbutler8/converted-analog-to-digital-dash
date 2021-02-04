export const GET_SPEED= "GET_SPEED"
export const GET_MESSAGE= "GET_MESSAGE"

export function getSpeed(speed){
    return {
        type: GET_SPEED,
        speed
    }
}

export function getMessage(message){
  return {
      type: GET_MESSAGE,
      message
  }
}

const initialState = { speed: null, temp: null, button: true, message: ""};

const wsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPEED:
      state.speed = action.speed;
      return state;
    case GET_MESSAGE:
      state.message = action.message;
      return state;
    default:
      return state;
  }
};

export default wsReducer;
