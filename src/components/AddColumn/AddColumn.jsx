import React, { useState } from "react";
import svgSprite from "../../assets/svg/symbol-defs.svg";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";
import styles from "./AddColumn.module.css";
import { closeModal } from "../../redux/modalSlice";
import { getUserToken } from "../../redux/selectors";
import { addColumn, updateColumn } from "../../redux/operations";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function AddColumn({ title, textButton, columnId }) {
  const dispatch = useDispatch();
  const [columnName, setColumnName] = useState("");
  const token = useSelector(getUserToken);
  const id = useParams();

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
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>

        <svg
          width={18}
          height={18}
          className={styles.svg}
          onClick={handleCloseModal}
        >
          <use href={svgSprite + "#icon-cancel-close"} />
        </svg>
        <form onSubmit={handleFormSubmit} className={styles.form}>
          <input
            className={styles.input}
            placeholder="Title"
            value={columnName}
            onChange={handleInputChange}
          />
          <ButtonPrimary style={{ width: "302px" }}>{textButton}</ButtonPrimary>
        </form>
      </div>
    </div>
  );
}
