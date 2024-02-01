import React from "react";
import styles from "../Board/board.module.css";
import { openModal } from "../../../redux/modalSlice";
import svgSprite from "../../../assets/svg/symbol-defs.svg";
import { removeBoard } from "../../../redux/operations";
import { useDispatch } from "react-redux";
import { getUserToken, getTheme } from "../../../redux/selectors";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Board({ board }) {
  const theme = useSelector(getTheme);

  const backgroundColor =
    theme === "Light"
      ? "#FDFDFD"
      : theme === "Violet"
      ? "rgba(214, 216, 255, 1)"
      : "#232323";
  const textColor =
    theme === "Light" ? "rgba(22, 22, 22, 1)" : "rgba(255, 255, 255, 1)";
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
      const currentBoardId = board._id; // Salvați board._id într-o variabilă locală
      console.log("board in timpul stergerii:", currentBoardId);
      dispatch(removeBoard({ token, boardId: currentBoardId }));
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
        backgroundColor: backgroundColor,
        color: textColor,
      }}
      onClick={handleNavigateBoards}
    >
      <svg
        style={{
          width: "18",
          height: "18",
          stroke: textColor,
          fill: backgroundColor,
        }}
      >
        <use href={svgSprite + `#${board.icon}`} />
      </svg>
      <div className={styles.newboardname} style={{ color: textColor }}>
        {board.name}
      </div>
      <button className={styles.editbutton} onClick={handleOpenEditBoardModal}>
        <svg
          style={{
            width: "16",
            height: "16",
            stroke: textColor,
            fill: backgroundColor,
          }}
        >
          <use href={svgSprite + "#icon-pencil-01"} />
        </svg>
      </button>
      <button className={styles.deletebutton} onClick={handleDeleteBoard}>
        <svg
          style={{
            width: "16",
            height: "16",
            stroke: textColor,
            fill: backgroundColor,
          }}
        >
          <use href={svgSprite + "#icon-trash-04"} />
        </svg>
      </button>
    </div>
  );
}
