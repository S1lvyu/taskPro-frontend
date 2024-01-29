import axios from "axios";
const BASE_URL = "http://localhost:3000/taskPro/";
const BASE_API = axios.create({ baseURL: BASE_URL });

export const registerApi = (newUser) => BASE_API.post("/signup", newUser);
export const loginApi = (user) => BASE_API.post("/login", user);
export const logoutApi = (token) =>
  BASE_API.get("/logout", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const verifyAccountApi = (verificationId) =>
  BASE_API.get(`/verify/${verificationId}`);

export const resendVerificationCodeApi = (email) =>
  BASE_API.post("/user/verify", email);

export const getCurrentUserApi = (token) =>
  BASE_API.get("/current-user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const updateCurrentUserApi = (
  token,
  name,
  email,
  password,
  imageFile
) => {
  const formData = new FormData();

  formData.append("name", name);
  formData.append("email", email);
  formData.append("password", password);

  if (imageFile) {
    formData.append("avatar", imageFile, imageFile.name);
  }

  return BASE_API.patch("/current-user/update", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
export const getBackgroundApi = () => BASE_API.get("/background");

export const getBoardsApi = (token) =>
  BASE_API.get("/homepage", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const addBoardApi = (token, boardName, icon, background) =>
  BASE_API.post(
    "/homepage/addBoard",
    { boardName, icon, background },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
export const editBoardApi = (token, boardId, boardName, icon, background) =>
  BASE_API.patch(
    `/homepage/update/${boardId}`,
    { boardName, icon, background },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
export const deleteBoardApi = (token, boardId) =>
  BASE_API.delete(
    `/homepage/delete/${boardId}`,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
export const addColumnApi = (token, boardId, columnName) =>
  BASE_API.post(
    `/homepage/boards/${boardId}`,
    { columnName },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
export const editColumnApi = (token, columnId, columnName) =>
  BASE_API.patch(
    `/homepage/boards/updateColumn/${columnId}`,
    { columnName },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
export const deleteColumnApi = (token, columnId) =>
  BASE_API.delete(
    `/homepage/boards/$deleteColumn/${columnId}`,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
export const addCardApi = (
  token,
  columnId,
  title,
  description,
  labelColor,
  deadline
) =>
  BASE_API.post(
    `/homepage/boards/addCard/${columnId}`,
    { title, description, labelColor, deadline },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const editCardApi = (
  token,
  cardId,
  title,
  description,
  labelColor,
  deadline
) =>
  BASE_API.patch(
    `/homepage/boards/updateCard/${cardId}`,
    { title, description, labelColor, deadline },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
export const deleteCardApi = (token, cardId) =>
  BASE_API.delete(
    `/homepage/boards/removeCard/${cardId}`,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
export const moveCardApi = (token, cardId, columnId) =>
  BASE_API.patch(
    `/homepage/boards/moveCard/${cardId}/${columnId}`,
    {},

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
