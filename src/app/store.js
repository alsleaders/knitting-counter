import { configureStore } from "@reduxjs/toolkit";
import rowCounterReducer from "../features/counter/rowCounterSlice";
import repeatCounterReducer from "../features/counter/repeatCounterSlice";

export const store = configureStore({
  reducer: {
    rowCounter: rowCounterReducer,
    repeatCounter: repeatCounterReducer,
  },
});
