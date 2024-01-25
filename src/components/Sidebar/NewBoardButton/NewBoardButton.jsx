import React, { useState } from "react";
import styles from ".././NewBoardButton/newboardbutton.module.css";
import Modal from "../Modal/Modal";
import svgSprite from "../../../assets/svg/symbol-defs.svg";

//*NewBoard component with button*
export default function NewBoardButton({ onNewBoard }) {
  const [isOpen, setIsOpen] = useState(false);
  // const [name, setName] = useState("");

  const handleNewBoard = (name) => {
    onNewBoard(name);
    setIsOpen(false);
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
        <button className={styles.addbutton} onClick={() => setIsOpen(true)}>
          <svg width="20" height="20" fill="#121212">
            <use href={svgSprite + "#icon-plus"} />
          </svg>
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={handleNewBoard}>
        {/*We Replace with our modalBoard model here 
				<input type="text" value={name} onChange={e => setName(e.target.value)} /> */}
        <button onClick={() => handleNewBoard("New Board")}>Create</button>
      </Modal>
    </>
  );
}
