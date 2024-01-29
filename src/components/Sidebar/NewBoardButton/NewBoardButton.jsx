import React, { useState } from "react";
import styles from ".././NewBoardButton/newboardbutton.module.css";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addBoard } from "../../../redux/operations";
import svgSprite from "../../../assets/svg/symbol-defs.svg";
import { openModal, closeModal } from "../../../redux/modalSlice";
import { getUserToken } from "../../../redux/selectors";
//*NewBoard component with button*

export default function NewBoardButton() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [background, setBackground] = useState("");

  const handleOpenModal = () => {
    console.log("Opening modal...");
    dispatch(openModal());
  };
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const token = useSelector(getUserToken);
  const handleNewBoard = (name, icon, background) => {
    console.log("Creating new board with name:", name);
    dispatch(
      addBoard({
        token,
        boardName: name,
        icon,
        background,
      })
    );
    dispatch(closeModal());
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

        <button className={styles.addbutton} onClick={handleOpenModal}>
          <svg width="10" height="10" fill="#121212">
            <use href={svgSprite + "#icon-plus1"} />
          </svg>
        </button>
      </div>
      <svg width="212" height="2" fill="rgba(255, 255, 255, 0.1)">
        <use href={svgSprite + "#icon-grey-line"} />
      </svg>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={icon} onChange={(e) => setIcon(e.target.value)} />
        <input type="text" value={background} onChange={(e) => setBackground(e.target.value)} />
        <button style={{ color: "red" }} onClick={() => handleNewBoard(name)}>
          Create
        </button>
      </Modal>
    </>
  );
}
