import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userApp";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
