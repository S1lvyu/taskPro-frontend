import React, { useState } from "react";
import NewBoardButton from "../NewBoardButton/NewBoardButton";
import Board from "../Board/Board";
import styles from "../BoardsList/boardslist.module.css";

//*BoardsList component*
export const BoardsList = () => {
  const [boards, setBoards] = useState([]);

  const handleNewBoard = (name) => {
    setBoards([...boards, { name, svg: "" }]);
  };

  const handleEditBoard = (index, newName, newSvg) => {
    const newBoards = [...boards];
    newBoards[index] = { name: newName, svg: newSvg };
    setBoards(newBoards);
  };

  const handleDeleteBoard = (index) => {
    const newBoards = [...boards];
    newBoards.splice(index, 1);
    setBoards(newBoards);
  };

  return (
    <div>
      {boards.map((board, index) => (
        <Board
          key={index}
          name={board.name}
          svg={board.svg}
          onEdit={(newName, newSvg) => handleEditBoard(index, newName, newSvg)}
          onDelete={() => handleDeleteBoard(index)}
        />
      ))}
      <NewBoardButton onNewBoard={handleNewBoard} />
    </div>
  );
};
