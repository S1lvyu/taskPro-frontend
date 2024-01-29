import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoards } from "../../redux/operations";
import { getUserToken } from "../../redux/selectors";
import styles from "../Sidebar/sidebar.module.css";
import Modal from "../Sidebar/Modal/Modal";
import Logo from "../Sidebar/Logo/Logo";
import NewBoardButton from "./NewBoardButton/NewBoardButton";
import Board from "../Sidebar/Board/Board";
import BoardsList from "./BoardsList/BoardsList";
import NeedHelp from "./NeedHelp/NeedHelp";
import LogoutButton from "../Sidebar/LogoutButton/LogoutButton";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const token = useSelector(getUserToken);
  const boards = useSelector(getBoards);

  return (
    <>
      <div className={styles.sidebarcontainer}>
        <div style={{ flexGrow: 1 }}>
          <Modal />
          <Logo />
          <NewBoardButton />
          <Board />
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
