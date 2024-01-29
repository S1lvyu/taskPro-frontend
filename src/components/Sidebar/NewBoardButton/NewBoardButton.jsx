import React from "react";
import styles from ".././NewBoardButton/newboardbutton.module.css";
import { getModalType } from "../../../redux/selectors";
import svgSprite from "../../../assets/svg/symbol-defs.svg";

import { useDispatch } from "react-redux";
import { openModal } from "../../../redux/modalSlice";
import { useSelector } from "react-redux";

//*NewBoard component with button*
export default function NewBoardButton() {
  const dispatch = useDispatch();
  const modal = useSelector(getModalType);
  const handleOpenModal = () => {
    try {
      dispatch(openModal({ data: "board" }));
      console.log(modal);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2 className={styles.title}> My boards</h2>
      <svg width="212" height="2" fill="rgba(255, 255, 255, 0.1)">
        <use href={svgSprite + "#icon-grey-line"} />
      </svg>
      <div className={styles.newboard}>
        <p className={styles.content}>
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
      <svg width="212" height="2" fill="rgba(255, 255, 255, 0.1)">
        <use href={svgSprite + "#icon-grey-line"} />
      </svg>
    </>
  );
}
