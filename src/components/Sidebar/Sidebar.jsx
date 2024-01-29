import React from "react";
import styles from "../Sidebar/sidebar.module.css";

import Logo from "../Sidebar/Logo/Logo";
import NewBoardButton from "./NewBoardButton/NewBoardButton";
import Board from "../Sidebar/Board/Board";
import { getBoardsData } from "../../redux/selectors";
import NeedHelp from "./NeedHelp/NeedHelp";
import LogoutButton from "../Sidebar/LogoutButton/LogoutButton";
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const boards = useSelector(getBoardsData);
  return (
    <>
      <div className={styles.sidebarcontainer}>
        <div style={{ flexGrow: 1 }}>
          <Logo />
          <NewBoardButton />
          {boards.map((board) => (
            <Board key={board._id} board={board} />
          ))}
        </div>
        <div>
          <NeedHelp />
          <LogoutButton />
        </div>
      </div>
    </>
  );
};
