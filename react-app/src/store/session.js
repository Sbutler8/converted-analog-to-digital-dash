
const SET_USER = 'session/setUser';
const GET_USERS = 'session/getUsers';
const REMOVE_USER = 'session/removeUser';
const SET_PROFILE_PIC = 'session/setProfilePic';

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const getUsers = (users) => {
  return {
    type: GET_USERS,
    payload: users,
  };
};

const removeUser = () => ({
  type: REMOVE_USER
});

const setProfilePic = (file) => ({
  type: SET_PROFILE_PIC,
  payload: file
});


export const login = (user) => async (dispatch) => {
    const { email, password } = user;
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email,
            password,
        }),
    });
    if (response.ok) {
      let data = await response.json()
      dispatch(setUser(data));
    }
};

export const authenticate = () => async dispatch => {
    const res = await fetch('/api/auth/');
    if (res.ok) {
      let data = await res.json()
      dispatch(setUser(data));
    }
};

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    method: 'DELETE'
  });
  dispatch(removeUser());
  return response;
};

export const getAllUsers = () => async (dispatch) => {
  const response = await fetch('/api/users');
  let data = await response.json()
  dispatch(getUsers(data.users));
  return data.users;
};

export const setPic = (file) => async (dispatch) => {

  const formData = new FormData();

  // for single file
  formData.append("image", file);

  const res = await fetch(`/api/auth/test`, {
    method: "POST",
    body: formData,
  });

  if (res.ok) {
    const data = await res.json();

    dispatch(setProfilePic(data.file));
    return data;
  } else {
    console.log('error')
  }
};

export const addProfPic = (formObj ) => async (dispatch) => {

    const { id, profPic } = formObj;
    const formData = { id, profPic };

    const res = await fetch(`/api/users/dash/${id}`, {
      method: "PATCH",
      body: JSON.stringify(formData),
    });

    console.log('STORE DATA---------->', formData)
    console.log(res)
    dispatch(setProfilePic(res));
    return res
  };

const initialState = { user: null, authenticate: false };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      newState.authenticate = true;
      return newState;
    case GET_USERS:
      // newState = Object.assign({}, state);
      // newState.users = action.payload;
      return { ...state, users: action.payload }
    case REMOVE_USER:
      newState = Object.assign({}, state, { user: null, authenticate: false });
      return newState;
      case SET_PROFILE_PIC:
      return { ...state, file: [...action.payload] };
    default:
      return state;
  }
};

export default sessionReducer;
