import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { boardReducer } from "./boardSlice";
export const store = configureStore({
  reducer: {
    users: userReducer,
    boards: boardReducer,
  },
});
