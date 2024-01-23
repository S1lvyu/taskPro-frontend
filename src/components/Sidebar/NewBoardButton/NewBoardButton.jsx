import React, { useState } from "react";
import styles from ".././NewBoardButton/newboardbutton.module.css";
import Modal from "../Modal/Modal";

//*NewBoard component with button*
export const NewBoardButton = ({ onNewBoard }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [name, setName] = useState("");

  const handleNewBoard = (name) => {
    onNewBoard(name);
    setIsOpen(false);
  };

  return (
    <>
      <p>Create a new board</p>
      <button onClick={() => setIsOpen(true)}>
        <svg width="20" height="20" fill="#121212">
          <use href="../../assets/svg/symbol-defs.svg#icon-plus" />
        </svg>
      </button>
      <Modal isOpen={isOpen} onClose={handleNewBoard}>
        {/*We Replace with our modalBoard model here 
				<input type="text" value={name} onChange={e => setName(e.target.value)} /> */}
        <button onClick={() => handleNewBoard("New Board")}>Create</button>
      </Modal>
    </>
  );
};
