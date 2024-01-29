import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Board from "../Board/Board";
import { getBoards } from "../../../redux/operations";
import { getUserToken } from "../../../redux/selectors";
import styles from "../BoardsList/boardslist.module.css";

//*BoardsList component*
export default function BoardsList() {
  const dispatch = useDispatch();
  const token = useSelector(getUserToken);
  const boards = useSelector((state) => state.boards.boards);

  useEffect(() => {
    dispatch(getBoards(token));
  }, [dispatch, token]);

  return (
    <div>
      {boards.map((board) => (
        <Board key={board.boardId} boardName={board.name} icon={board.svg} background={board.background} />
      ))}
    </div>
  );
}
