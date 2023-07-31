import React, { useReducer, useEffect } from "react";
import { getSessionStorage, setSessionStorage } from "../utils/helpers";
import { STORAGE_KEY } from "../utils/constants";
import AppStateContext from "./AppStateContext";
import { appReducer, initialState } from "./appReducer";
import { AppStateProviderProps } from "../types";

const AppStateProvider: React.FC<AppStateProviderProps> = ({ children }) => {
  const storageDetails = getSessionStorage(STORAGE_KEY) || "";

  let fullState = initialState;
  if (storageDetails) {
    try {
      fullState = JSON.parse(storageDetails);
    } catch (e) {
      console.error("Error parsing stored state:", e);
    }
  }

  const [state, dispatch] = useReducer(appReducer, fullState);

  useEffect(() => {
    setSessionStorage(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
