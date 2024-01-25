import React, { useState } from "react";
import styles from "../Board/board.module.css";
import Modal from "../Modal/Modal";
import svgSprite from "../../../assets/svg/symbol-defs.svg";

//! Line 43-> We replace with our modalBoard model

//*Board component*
export default function Board({ name, svg, onEdit, onDelete }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newSvg, setNewSvg] = useState(svg);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSvgChange = (event) => {
    setNewSvg(event.target.value);
  };
  const handleClose = () => {
    onEdit(newName, newSvg);
    setIsEditOpen(false);
  };

  return (
    <div
      className={styles.newboardcontainer}
      style={{ width: "calc(100% + 48px)", marginLeft: "-24px", marginRight: "-24px" }}
    >
      <svg style={{ width: "18", height: "18", fill: "var(--white-color)" }}>
        <use href={svg} />
      </svg>
      <div className={styles.newboardname}>{name}</div>
      <button className={styles.editbutton} onClick={() => setIsEditOpen(true)}>
        <svg style={{ width: "16", height: "16", fill: "rgba(255, 255, 255, 0.5)" }}>
          <use href={svgSprite + "#icon-pencil-01"} />
        </svg>
      </button>
      <button className={styles.deletebutton} onClick={onDelete}>
        <svg style={{ width: "16", height: "16", fill: "var(--white-color)" }}>
          <use href={svgSprite + "#icon-trash-04"} />
        </svg>
      </button>

      <Modal isOpen={isEditOpen} onClose={handleClose}>
        <input type="text" value={newName} onChange={handleNameChange} />
        <input type="text" value={newSvg} onChange={handleSvgChange} />
        <button onClick={handleClose}>Edit</button>
      </Modal>
    </div>
  );
}
