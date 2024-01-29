import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    data: null,
    id: null,
  },
  reducers: {
    openModal: (state, action) => {
      console.log(action.payload);
      state.isOpen = true;
      state.data = action.payload.data;
      state.id = action.payload.id;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.data = null;
      state.id = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
