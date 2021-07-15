import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  random: 0,
  counter: 0,
  count: 0,
};

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
