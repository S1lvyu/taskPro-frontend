export const getIsAuthenticated = (state) => state.users.isAuthenticated;
export const getUserToken = (state) => state.users.user?.data.token;
export const getTokenValability = (state) =>
  state.users.user?.data.tokenValability;

export const getUserInfo = (state) => state.users.user.data.user;
export const getUserError = (state) => state.users.error;
export const getIsLoadingUser = (state) => state.users.isLoading;
export const getUser = (state) => state.users.userInfo;
export const getMessage = (state) => state.users.message;

export const getBoardsData = (state) => state.boards.boards;
export const getBackgroundImagesData = (state) => state.boards.backgroundImages;
export const getBoardIsLoading = (state) => state.boards.isLoading;
export const getBoardError = (state) => state.boards.error;
export const getColumnsData = (state) => state.boards.columns;

export const selectModal = (state) => state.modal.isOpen;
export const getModalType = (state) => state.modal.data;
export const getModalID = (state) => state.modal.id;
export const getModalOwner = (state) => state.modal.owner;
export const getTheme = (state) => state.modal.selectedTheme;
