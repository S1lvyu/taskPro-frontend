import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerApi,
  loginApi,
  logoutApi,
  verifyAccountApi,
  resendVerificationCodeApi,
  getCurrentUserApi,
  updateCurrentUserApi,
  getBackgroundApi,
  getBoardsApi,
  addBoardApi,
  editBoardApi,
  deleteBoardApi,
  addColumnApi,
  editColumnApi,
  deleteColumnApi,
  addCardApi,
  editCardApi,
  deleteCardApi,
  moveCardApi,
} from "../API/API";

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (user, thunkAPI) => {
    try {
      const response = await registerApi(user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const verifyUser = createAsyncThunk(
  "users/verify",
  async (verificationId, thunkAPI) => {
    try {
      const response = await verifyAccountApi(verificationId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resendVerifyUser = createAsyncThunk(
  "users/resendVerify",
  async (email, thunkAPI) => {
    try {
      const response = await resendVerificationCodeApi(email);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (user, thunkAPI) => {
    try {
      const response = await loginApi(user);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const logoutUser = createAsyncThunk(
  "users/logoutUser",
  async (token, thunkAPI) => {
    try {
      const response = await logoutApi(token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getUser = createAsyncThunk(
  "users/getUser",
  async (token, thunkAPI) => {
    try {
      const response = await getCurrentUserApi(token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (token, name, email, password, imageFile, thunkAPI) => {
    try {
      const response = await updateCurrentUserApi(
        token,
        name,
        email,
        password,
        imageFile
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBoards = createAsyncThunk(
  "boards/getBoards",
  async (token, thunkAPI) => {
    try {
      const response = await getBoardsApi(token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addBoard = createAsyncThunk(
  "boards/addBoard",
  async (token, boardName, icon, background, thunkAPI) => {
    try {
      const response = await addBoardApi(token, boardName, icon, background);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateBoard = createAsyncThunk(
  "boards/updateBoard",
  async (token, boardId, boardName, icon, background, thunkAPI) => {
    try {
      const response = await editBoardApi(
        token,
        boardId,
        boardName,
        icon,
        background
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const removeBoard = createAsyncThunk(
  "boards/removeBoard",
  async (token, boardId, thunkAPI) => {
    try {
      const response = await deleteBoardApi(token, boardId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addColumn = createAsyncThunk(
  "boards/addColumn",
  async (token, boardId, columnName, thunkAPI) => {
    try {
      const response = await addColumnApi(token, boardId, columnName);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateColumn = createAsyncThunk(
  "boards/updateColumn",
  async (token, columnId, columnName, thunkAPI) => {
    try {
      const response = await editColumnApi(token, columnId, columnName);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const removeColumn = createAsyncThunk(
  "boards/removeColumn",
  async (token, columnId, thunkAPI) => {
    try {
      const response = await deleteColumnApi(token, columnId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addCard = createAsyncThunk(
  "boards/addCard",
  async (
    token,
    columnId,
    title,
    description,
    labelColor,
    deadline,
    thunkAPI
  ) => {
    try {
      const response = await addCardApi(
        token,
        columnId,
        title,
        description,
        labelColor,
        deadline
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateCard = createAsyncThunk(
  "boards/updateCard",
  async (token, cardId, title, description, labelColor, deadline, thunkAPI) => {
    try {
      const response = await editCardApi(
        token,
        cardId,
        title,
        description,
        labelColor,
        deadline
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeCard = createAsyncThunk(
  "boards/removeCard",
  async (token, cardId, thunkAPI) => {
    try {
      const response = await deleteCardApi(token, cardId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const moveCard = createAsyncThunk(
  "boards/moveCard",
  async (token, cardId, columnId, thunkAPI) => {
    try {
      const response = await moveCardApi(token, cardId, columnId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBackgroundImages = createAsyncThunk(
  "boards/backgroundImages",
  async (_, thunkAPI) => {
    try {
      const response = await getBackgroundApi();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
