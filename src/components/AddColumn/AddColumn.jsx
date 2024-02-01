import React, { useState } from "react";
import svgSprite from "../../assets/svg/symbol-defs.svg";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";
import styles from "./AddColumn.module.css";
import { closeModal } from "../../redux/modalSlice";
import { getUserToken, getTheme } from "../../redux/selectors";
import { addColumn, updateColumn } from "../../redux/operations";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function AddColumn({ title, textButton, columnId }) {
  const dispatch = useDispatch();
  const [columnName, setColumnName] = useState("");
  const token = useSelector(getUserToken);
  const id = useParams();
  const theme = useSelector(getTheme);

  const backgroundColor =
    theme === "Light"
      ? "#FDFDFD"
      : theme === "Violet"
      ? "rgba(214, 216, 255, 1)"
      : "#232323";
  const textColor =
    theme === "Light" ? "rgba(22, 22, 22, 1)" : "rgba(255, 255, 255, 1)";
  const handleInputChange = (event) => {
    setColumnName(event.target.value);
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      dispatch(addColumn({ token, boardId: id.boardId, columnName }));
      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };
  const handleEditSubmit = (event) => {
    event.preventDefault();
    console.log(id);
    try {
      dispatch(updateColumn({ token, columnId: columnId, columnName }));
    } catch (error) {
      console.error(error);
    }
  };
  const handleFormSubmit =
    title === "Add Column" ? handleSubmit : handleEditSubmit;
  return (
    <div className={styles.overlay}>
      <div
        className={styles.container}
        style={{ backgroundColor: backgroundColor }}
      >
        <h1 className={styles.title} style={{ color: textColor }}>
          {title}
        </h1>

        <svg
          width={18}
          height={18}
          className={styles.svg}
          onClick={handleCloseModal}
          style={{ fill: textColor }}
        >
          <use href={svgSprite + "#icon-cancel-close"} />
        </svg>
        <form onSubmit={handleFormSubmit} className={styles.form}>
          <input
            className={styles.input}
            placeholder="Title"
            value={columnName}
            onChange={handleInputChange}
            style={{ color: textColor }}
          />
          <ButtonPrimary style={{ width: "302px" }}>{textButton}</ButtonPrimary>
        </form>
      </div>
    </div>
  );
}
