
import rootreducer from "./action";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootreducer,
 
});

export default store;