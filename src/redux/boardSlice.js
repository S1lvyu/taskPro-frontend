import { createSlice } from "@reduxjs/toolkit";
import {
  getBoards,
  addBoard,
  updateBoard,
  removeBoard,
  addColumn,
  updateColumn,
  removeColumn,
  addCard,
  updateCard,
  removeCard,
  moveCard,
  getBackgroundImages,
} from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const BoardSlice = createSlice({
  name: "boards",
  initialState: {
    date: "",
    boards: [],
    backgroundImages: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBoards.pending, handlePending)
      .addCase(getBoards.rejected, handleRejected)
      .addCase(getBoards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.boards = action.payload.data;
      })
      .addCase(addBoard.pending, handlePending)
      .addCase(addBoard.rejected, handleRejected)
      .addCase(addBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.boards = [...state.boards, action.payload.data];
      })
      .addCase(updateBoard.pending, handlePending)
      .addCase(updateBoard.rejected, handleRejected)
      .addCase(updateBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.boards = [...state.boards, action.payload.data];
      })
      .addCase(removeBoard.pending, handlePending)
      .addCase(removeBoard.rejected, handleRejected)
      .addCase(removeBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.boards = [...state.boards, action.payload.data];
      })
      .addCase(addColumn.pending, handlePending)
      .addCase(addColumn.rejected, handleRejected)
      .addCase(addColumn.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.error = null;
        state.boards = [...state.boards, action.payload.data];
      })
      .addCase(updateColumn.pending, handlePending)
      .addCase(updateColumn.rejected, handleRejected)
      .addCase(updateColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.boards = [...state.boards, action.payload.data];
      })
      .addCase(removeColumn.pending, handlePending)
      .addCase(removeColumn.rejected, handleRejected)
      .addCase(removeColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.boards = [...state.boards, action.payload.data];
      })
      .addCase(addCard.pending, handlePending)
      .addCase(addCard.rejected, handleRejected)
      .addCase(addCard.fulfilled, (state, action) => {
        console.log(action.payload.data);
        state.isLoading = false;
        state.error = null;
        state.boards = [...state.boards, action.payload.data];
        console.log(state.boards);
      })
      .addCase(updateCard.pending, handlePending)
      .addCase(updateCard.rejected, handleRejected)
      .addCase(updateCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.boards = [...state.boards, action.payload.data];
      })
      .addCase(removeCard.pending, handlePending)
      .addCase(removeCard.rejected, handleRejected)
      .addCase(removeCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.boards = [...state.boards, action.payload.data];
      })
      .addCase(moveCard.pending, handlePending)
      .addCase(moveCard.rejected, handleRejected)
      .addCase(moveCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.boards = [...state.boards, action.payload.data];
      })
      .addCase(getBackgroundImages.pending, handlePending)
      .addCase(getBackgroundImages.rejected, handleRejected)
      .addCase(getBackgroundImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.backgroundImages = action.payload.data;
      });
  },
});
export const boardReducer = BoardSlice.reducer;
