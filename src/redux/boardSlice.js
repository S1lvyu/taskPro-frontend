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
    columns: [],
    cards: [],
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
        const updatedBoard = action.payload.data;
        const updatedBoards = state.boards.map((board) => {
          if (board._id === updatedBoard._id) {
            return updatedBoard;
          }

          return board;
        });

        state.boards = updatedBoards;
      })
      //nu sterge cum trebuie
      .addCase(removeBoard.pending, handlePending)
      .addCase(removeBoard.rejected, handleRejected)
      .addCase(removeBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const removedBoardId = action.payload.data._id;

        state.boards = state.boards.filter(
          (board) => board._id !== removedBoardId
        );
      })
      .addCase(addColumn.pending, handlePending)
      .addCase(addColumn.rejected, handleRejected)
      .addCase(addColumn.fulfilled, (state, action) => {
        const boardId = action.payload.data.owner;

        const boardIndex = state.boards.findIndex(
          (board) => board._id === boardId
        );

        if (boardIndex !== -1) {
          state.boards[boardIndex].columns = [
            ...state.boards[boardIndex].columns,
            action.payload.data,
          ];
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateColumn.pending, handlePending)
      .addCase(updateColumn.rejected, handleRejected)
      .addCase(updateColumn.fulfilled, (state, action) => {
        const boardId = action.payload.data.owner;
        const boardIndex = state.boards.findIndex(
          (board) => board._id === boardId
        );
        if (boardIndex !== -1) {
          const updatedColumns = state.boards[boardIndex].columns.map(
            (column) =>
              column._id === action.payload.data._id
                ? action.payload.data
                : column
          );

          state.boards[boardIndex].columns = updatedColumns;
        }
        state.isLoading = false;
        state.error = null;
      })
      //nu se sterg cum trebuie
      .addCase(removeColumn.pending, handlePending)
      .addCase(removeColumn.rejected, handleRejected)
      .addCase(removeColumn.fulfilled, (state, action) => {
        const { deletedColumn, deletedCards } = action.payload.data;
        const boardId = deletedColumn.owner;
        const boardIndex = state.boards.findIndex(
          (board) => board._id === boardId
        );

        if (boardIndex !== -1) {
          const updatedColumns = state.boards[boardIndex].columns.filter(
            (column) => column._id !== deletedColumn._id
          );

          state.boards[boardIndex].columns = updatedColumns;
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addCard.pending, handlePending)
      .addCase(addCard.rejected, handleRejected)
      .addCase(addCard.fulfilled, (state, action) => {
        const columnId = action.payload.data.owner;
        const cardData = action.payload.data;
        const board = state.boards.find((board) =>
          board.columns.some((col) => col._id === columnId)
        );

        if (board) {
          const columnIndex = board.columns.findIndex(
            (col) => col._id === columnId
          );

          if (columnIndex !== -1) {
            state.boards = state.boards.map((item) => {
              if (item._id === board._id) {
                return {
                  ...item,
                  columns: item.columns.map((col, index) => {
                    if (index === columnIndex) {
                      return {
                        ...col,
                        cards: [...col.cards, cardData],
                      };
                    }
                    return col;
                  }),
                };
              }
              return item;
            });
          }
        }

        state.isLoading = false;
        state.error = null;
      })

      .addCase(updateCard.pending, handlePending)
      .addCase(updateCard.rejected, handleRejected)
      .addCase(updateCard.fulfilled, (state, action) => {
        const cardId = action.payload.data._id;
        const updatedCardData = action.payload.data;

        // Găsiți board-ul și coloana care conțin cardul cu cardId
        const board = state.boards.find((board) =>
          board.columns.some((col) =>
            col.cards.some((card) => card._id === cardId)
          )
        );

        if (board) {
          let columnIndex, cardIndex;

          for (let i = 0; i < board.columns.length; i++) {
            const col = board.columns[i];
            const foundCardIndex = col.cards.findIndex(
              (card) => card._id === cardId
            );

            if (foundCardIndex !== -1) {
              columnIndex = i;
              cardIndex = foundCardIndex;
              break;
            }
          }

          if (
            typeof columnIndex !== "undefined" &&
            typeof cardIndex !== "undefined"
          ) {
            state.boards = state.boards.map((item) => {
              if (item._id === board._id) {
                return {
                  ...item,
                  columns: item.columns.map((col, colIndex) => {
                    if (colIndex === columnIndex) {
                      return {
                        ...col,
                        cards: col.cards.map((card, cIndex) => {
                          if (cIndex === cardIndex) {
                            return {
                              ...card,
                              ...updatedCardData,
                            };
                          }
                          return card;
                        }),
                      };
                    }
                    return col;
                  }),
                };
              }
              return item;
            });
          }
        }

        state.isLoading = false;
        state.error = null;
      })
      .addCase(removeCard.pending, handlePending)
      .addCase(removeCard.rejected, handleRejected)
      .addCase(removeCard.fulfilled, (state, action) => {
        const cardId = action.payload.data._id;

        // Găsiți board-ul și coloana care conțin cardul cu cardId
        const board = state.boards.find((board) =>
          board.columns.some((col) =>
            col.cards.some((card) => card._id === cardId)
          )
        );

        if (board) {
          // Găsiți index-ul coloanei și index-ul cardului în array-urile corespunzătoare
          let columnIndex, cardIndex;

          for (let i = 0; i < board.columns.length; i++) {
            const col = board.columns[i];
            const foundCardIndex = col.cards.findIndex(
              (card) => card._id === cardId
            );

            if (foundCardIndex !== -1) {
              columnIndex = i;
              cardIndex = foundCardIndex;
              break;
            }
          }

          if (
            typeof columnIndex !== "undefined" &&
            typeof cardIndex !== "undefined"
          ) {
            // Eliminați cardul în mod imutabil din array-ul de carduri al coloanei
            state.boards = state.boards.map((item) => {
              if (item._id === board._id) {
                return {
                  ...item,
                  columns: item.columns.map((col, colIndex) => {
                    if (colIndex === columnIndex) {
                      return {
                        ...col,
                        cards: col.cards.filter(
                          (card, cIndex) => cIndex !== cardIndex
                        ),
                      };
                    }
                    return col;
                  }),
                };
              }
              return item;
            });
          }
        }

        state.isLoading = false;
        state.error = null;
      })
      .addCase(moveCard.pending, handlePending)
      .addCase(moveCard.rejected, handleRejected)
      .addCase(moveCard.fulfilled, (state, action) => {
        const movedCard = action.payload.data.card;
        const oldColumnId = action.payload.data.oldColumnId; // Ia oldColumnId din răspuns

        state.boards = state.boards.map((board) => {
          const updatedColumns = board.columns.map((column) => {
            if (column._id === oldColumnId) {
              // Elimină cardul din coloana veche
              column.cards = column.cards.filter(
                (card) => card._id !== movedCard._id
              );
            }

            if (column._id === movedCard.owner) {
              // Adaugă cardul în coloana nouă
              column.cards = [...column.cards, movedCard];
            }

            return column;
          });

          return {
            ...board,
            columns: updatedColumns,
          };
        });

        state.isLoading = false;
        state.error = null;
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
