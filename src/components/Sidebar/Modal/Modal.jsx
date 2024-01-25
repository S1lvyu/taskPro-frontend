import React from "react";

// //* Modal component*
export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div>
      <button onClick={onClose}>Close</button>
      {children}
    </div>
  );
}
