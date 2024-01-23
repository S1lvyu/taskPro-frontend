// import React from "react";

// //* Modal component*
export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div>
      <button onClick={onClose}>Close</button>
      {children}
    </div>
  );
};
