import React, { useState } from "react";
import styles from "../Sidebar/sidebar.module.css";
import Modal from "../Sidebar/Modal/Modal";
import Logo from "../Sidebar/Logo/Logo";
import NewBoardButton from "./NewBoardButton/NewBoardButton";
import Board from "../Sidebar/Board/Board";
import BoardsList from "./BoardsList/BoardsList";
import NeedHelp from "./NeedHelp/NeedHelp";
import LogoutButton from "../Sidebar/LogoutButton/LogoutButton";

export const Sidebar = () => {
  const [boards, setBoards] = useState([]);

  const handleNewBoard = (name) => {
    console.log(`Creating new board with name: ${name}`);
    setBoards((prevBoards) => [...prevBoards, { name, svg: "svg path here" }]);
  };
  const handleEdit = (index, newName, newSvg) => {
    const newBoards = [...boards];
    newBoards[index] = { name: newName, svg: newSvg };
    setBoards(newBoards);
  };

  const handleDelete = (index) => {
    const newBoards = [...boards];
    newBoards.splice(index, 1);
    setBoards(newBoards);
  };

  return (
    <>
      <div className={styles.sidebarcontainer}>
        <div style={{ flexGrow: 1 }}>
          <Modal />
          <Logo />
          <NewBoardButton onNewBoard={handleNewBoard} />
          {boards.map((board, index) => (
            <Board
              key={index}
              name={board.name}
              svg={board.svg}
              onEdit={(newName, newSvg) => handleEdit(index, newName, newSvg)}
              onDelete={() => handleDelete(index)}
            />
          ))}
          <BoardsList />
        </div>
        <div>
          <NeedHelp />
          <LogoutButton />
        </div>
      </div>
    </>
  );
};
