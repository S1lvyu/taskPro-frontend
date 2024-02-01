import React from "react";
import styles from ".././NewBoardButton/newboardbutton.module.css";
import { getTheme } from "../../../redux/selectors";
import svgSprite from "../../../assets/svg/symbol-defs.svg";

import { useDispatch } from "react-redux";
import { openModal } from "../../../redux/modalSlice";
import { useSelector } from "react-redux";

//*NewBoard component with button*
export default function NewBoardButton() {
  const theme = useSelector(getTheme);

  const backgroundColor =
    theme === "Light"
      ? "#FDFDFD"
      : theme === "Violet"
      ? "rgba(214, 216, 255, 1)"
      : "#232323";
  const textColor =
    theme === "Light" ? "rgba(22, 22, 22, 1)" : "rgba(255, 255, 255, 1)";
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    try {
      dispatch(openModal({ data: "board" }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2 className={styles.title} style={{ color: textColor }}>
        {" "}
        My boards
      </h2>
      <svg
        width="212"
        height="2"
        style={{ fill: backgroundColor, stroke: textColor }}
      >
        <use href={svgSprite + "#icon-grey-line"} />
      </svg>
      <div className={styles.newboard}>
        <p className={styles.content} style={{ color: textColor }}>
          Create a <br />
          new board
        </p>
        <button className={styles.addbutton}>
          <svg
            width="20"
            height="20"
            stroke="#121212"
            onClick={handleOpenModal}
          >
            <use href={svgSprite + "#icon-plus"} />
          </svg>
        </button>
      </div>
      <svg
        width="212"
        height="2"
        style={{ fill: backgroundColor, stroke: textColor }}
      >
        <use href={svgSprite + "#icon-grey-line"} />
      </svg>
    </>
  );
}
