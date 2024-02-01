import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    data: null,
    id: null,
    owner: null,
    selectedTheme: "Light",
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.data = action.payload.data;
      state.id = action.payload.id;
      state.owner = action.payload.owner;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.data = null;
      state.id = null;
      state.owner = null;
    },
    selectTheme: (state, action) => {
      state.selectedTheme = action.payload;
    },
  },
});

export const { openModal, closeModal, selectTheme } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
