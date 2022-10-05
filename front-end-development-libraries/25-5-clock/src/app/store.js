import { configureStore } from "@reduxjs/toolkit";
import breakReducer from "../features/break/breakSlice";
import sessionReducer from "../features/session/sessionSlice";

export const store = configureStore({
  reducer: {
    break: breakReducer,
    session: sessionReducer,
  },
});
