import React from "react";
import styles from "../Board/board.module.css";
import { openModal } from "../../../redux/modalSlice";
import svgSprite from "../../../assets/svg/symbol-defs.svg";
import { removeBoard } from "../../../redux/operations";
import { useDispatch } from "react-redux";
import { getUserToken } from "../../../redux/selectors";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Board({ board }) {
  const navigate = useNavigate();
  const token = useSelector(getUserToken);
  const dispatch = useDispatch();
  const handleOpenEditBoardModal = () => {
    try {
      dispatch(openModal({ data: "editBoard", id: board._id }));
    } catch (error) {
      console.error(error);
    }
  };
  const handleNavigateBoards = () => {
    navigate(`/home/${board._id}`);
  };
  const handleDeleteBoard = () => {
    try {
      dispatch(removeBoard({ token, boardId: board._id }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={styles.newboardcontainer}
      style={{
        width: "calc(100% + 48px)",
        marginLeft: "-24px",
        marginRight: "-24px",
      }}
      onClick={handleNavigateBoards}
    >
      <svg style={{ width: "18", height: "18", fill: "var(--white-color)" }}>
        <use href={svgSprite + `#${board.icon}`} />
      </svg>
      <div className={styles.newboardname}>{board.name}</div>
      <button className={styles.editbutton} onClick={handleOpenEditBoardModal}>
        <svg
          style={{
            width: "16",
            height: "16",
            fill: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <use href={svgSprite + "#icon-pencil-01"} />
        </svg>
      </button>
      <button className={styles.deletebutton} onClick={handleDeleteBoard}>
        <svg style={{ width: "16", height: "16", fill: "var(--white-color)" }}>
          <use href={svgSprite + "#icon-trash-04"} />
        </svg>
      </button>
    </div>
  );
}
