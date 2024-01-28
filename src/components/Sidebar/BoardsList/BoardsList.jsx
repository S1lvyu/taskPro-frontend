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

  // const [boards, setBoards] = useState([]);
  // const handleEditBoard = (index, newName, newSvg) => {
  //   const newBoards = [...boards];
  //   newBoards[index] = { name: newName, svg: newSvg };
  //   setBoards(newBoards);
  // };

  // const handleDeleteBoard = (index) => {
  //   const newBoards = [...boards];
  //   newBoards.splice(index, 1);
  //   setBoards(newBoards);
  // };

  return (
    <div>
      {boards.map((board, index) => (
        <Board key={index} name={board.name} svg={board.svg} background={board.background} />
      ))}
    </div>
  );
}
