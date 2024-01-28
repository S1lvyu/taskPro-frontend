import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { boardReducer } from "./boardSlice";
import { modalReducer } from "./modalSlice";
export const store = configureStore({
  reducer: {
    users: userReducer,
    boards: boardReducer,
    modal: modalReducer,
  },
});
