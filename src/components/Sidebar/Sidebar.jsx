import React from "react";
import styles from "../Sidebar/sidebar.module.css";

import Logo from "../Sidebar/Logo/Logo";
import NewBoardButton from "./NewBoardButton/NewBoardButton";
import Board from "../Sidebar/Board/Board";
import { getBoardsData, getTheme } from "../../redux/selectors";
import NeedHelp from "./NeedHelp/NeedHelp";
import LogoutButton from "../Sidebar/LogoutButton/LogoutButton";
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const boards = useSelector(getBoardsData);
  const theme = useSelector(getTheme);

  const backgroundColor = theme === "Light" ? "#FDFDFD" : theme === "Violet" ? "rgba(214, 216, 255, 1)" : "#232323";
  const textColor = theme === "Light" ? "rgba(22, 22, 22, 1)" : "rgba(255, 255, 255, 1)";
  return (
    <>
      <div className={styles.sidebarcontainer} style={{ backgroundColor: backgroundColor, color: textColor }}>
        <div style={{ flexGrow: 1 }}>
          <Logo />

          <NewBoardButton />
          <div className={styles.boards_list1}>
            {boards.map((board) => (
              <Board key={board._id} board={board} />
            ))}
          </div>
        </div>
        <div>
          <NeedHelp />
          <LogoutButton />
        </div>
      </div>
    </>
  );
};
