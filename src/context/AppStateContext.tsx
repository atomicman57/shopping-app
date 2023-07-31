import React from "react";
import { AppState, AppAction } from "../types";
import { initialState } from "./appReducer";

const AppStateContext = React.createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export default AppStateContext;
