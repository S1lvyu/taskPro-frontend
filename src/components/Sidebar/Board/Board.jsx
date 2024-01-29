import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBoard, removeBoard } from "../../../redux/operations";
import { getUserToken } from "../../../redux/selectors";
import { openModal, closeModal } from "../../../redux/modalSlice";
import styles from "../Board/board.module.css";
import Modal from "../Modal/Modal";
import svgSprite from "../../../assets/svg/symbol-defs.svg";

//! Line 43-> We replace with our modalBoard model

//*Board component*
export default function Board({ boardName, icon, boardId, background }) {
  const dispatch = useDispatch();
  const token = useSelector(getUserToken);
  const isOpen = useSelector((state) => state.modal.isOpen);
  const [newNameBoard, setNewNameBoard] = useState(boardName);
  const [newIcon, setNewIcon] = useState(icon);
  const [newBackground, setNewBackground] = useState(background);

  const handleNameChange = (event) => {
    setNewNameBoard(event.target.value);
  };

  const handleIconChange = (event) => {
    setNewIcon(event.target.value);
  };

  const handleBackgroundChange = (event) => {
    setNewBackground(event.target.value);
  };

  const handleOpenModal = () => {
    console.log("Opening modal...");
    dispatch(openModal());
  };
  const handleCloseModal = () => {
    dispatch(updateBoard(token, boardId, boardName, icon, background));
    dispatch(closeModal());
  };

  const handleDelete = () => {
    dispatch(removeBoard(token, boardId));
  };

  return (
    <div
      className={styles.newboardcontainer}
      style={{ width: "calc(100% + 48px)", marginLeft: "-24px", marginRight: "-24px" }}
    >
      <svg style={{ width: "18", height: "18", fill: "var(--white-color)" }}>
        <use href={newIcon} />
      </svg>
      <div className={styles.newboardname}>{newNameBoard}</div>
      <button className={styles.editbutton} onClick={handleOpenModal}>
        <svg style={{ width: "16", height: "16", fill: "rgba(255, 255, 255, 0.5)" }}>
          <use href={svgSprite + "#icon-pencil-01"} />
        </svg>
      </button>
      <button className={styles.deletebutton} onClick={handleDelete}>
        <svg style={{ width: "16", height: "16", fill: "var(--white-color)" }}>
          <use href={svgSprite + "#icon-trash-04"} />
        </svg>
      </button>

      {isOpen && (
        <Modal onClose={handleCloseModal}>
          <input type="text" value={newNameBoard} onChange={handleNameChange} />
          <input type="text" value={newIcon} onChange={handleIconChange} />
          <input type="text" value={newBackground} onChange={handleBackgroundChange} />
          <button onClick={handleCloseModal}>Edit</button>
        </Modal>
      )}
    </div>
  );
}
