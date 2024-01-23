import React, { useState } from "react";
import styles from "../Board/board.module.css";
import Modal from "../Modal/Modal";

//! Line 43-> We replace with our modalBoard model

//*Board component*
export const Board = ({ name, svg, onEdit, onDelete }) => {
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
    <div>
      <svg style={{ width: "18", height: "18", fill: "var(--white-color)" }}>
        <use href={svg} />
      </svg>
      <div>{name}</div>
      <button onClick={() => setIsEditOpen(true)}>
        <svg style={{ width: "16", height: "16", fill: "var(--white-color)" }}>
          <use href="../../assets/svg/symbol-defs.svg#icon-pencil" />
        </svg>
      </button>
      <button onClick={onDelete}>
        <svg style={{ width: "16", height: "16", fill: "var(--white-color)" }}>
          <use href="../../assets/svg/symbol-defs.svg#icon-trash-04" />
        </svg>
      </button>

      <Modal isOpen={isEditOpen} onClose={handleClose}>
        <input type="text" value={newName} onChange={handleNameChange} />
        <input type="text" value={newSvg} onChange={handleSvgChange} />
      </Modal>
    </div>
  );
};
