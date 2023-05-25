import {
  createContext,
  useState,
  useContext,
  useReducer,
  useEffect,
} from "react";
import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_STORAGE_KEY,
  authInit,
  authInitialState,
  authReducer,
} from "../reducers/authReducer";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState, authInit);

  console.log(state);

  const login = (user) => {
    dispatch({
      type: AUTH_LOGIN,
      payload: user,
    });

    localStorage.setItem(
      AUTH_STORAGE_KEY,
      JSON.stringify({
        user,
        isLoggedIn: true,
      })
    );
  };

  const logout = () => {
    dispatch({
      type: AUTH_LOGOUT,
    });

    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isLoggedIn: state.isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { isLoggedIn, login, logout, user } = useContext(AuthContext);

  return { isLoggedIn, login, logout, user };
};
