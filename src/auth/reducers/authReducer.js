/* 
    action = {
        type: string;
        payload?: any;
    }
*/

// initial state
export const authInitialState = {
  user: null,
  isLoggedIn: false,
};

// initilizer
export const authInit = (initialState = authInitialState) => {
  return JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY)) || initialState;
};

// types
export const AUTH_LOGIN = "LOGIN";
export const AUTH_LOGOUT = "LOGOUT";

// local storage key
export const AUTH_STORAGE_KEY = "auth";

// reducer
export const authReducer = (state = authInitialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN:
      return {
        ...state,
        user: payload,
        isLoggedIn: true,
      };

    case AUTH_LOGOUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
