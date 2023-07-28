
import { initialState } from "./action";
import rootreducer from "./action";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootreducer,
  preloadedState: initialState,
});

export default store;