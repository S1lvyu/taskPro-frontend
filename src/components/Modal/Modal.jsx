import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import icon from '../../assets/svg/symbol-defs.svg';

import {
  StyledModal,
  StyledOverlay,
  StyledCloseButton,
  Svg,
} from './Modal.styled';

// Find the HTML element with the id 'modal-root' and assign it to modalRoot
const modalRoot = document.querySelector('#modal-root');

// Modal component that creates a modal overlay and renders its children within it
export const Modal = ({ onClose, children }) => {
  // Add an event listener for keydown events to handle the 'Escape' key
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  // Function to handle keydown events, closing the modal if 'Escape' key is pressed
  const handleKeydown = ({ code }) => {
    if (code === 'Escape') {
      onClose();
    }
  };

  // Function to handle backdrop click, closing the modal if clicked outside the content
  const handleBackdropClick = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      onClose();
    }
  };

  // Use createPortal to render the modal content inside the 'modal-root' element
  return createPortal(
    <StyledOverlay onClick={handleBackdropClick}>
      <StyledModal>
        {/* Close button with an 'x' icon */}
        <StyledCloseButton type="button" onClick={onClose}>
          <Svg width="18" height="18">
            <use xlinkHref={`${icon}#icon-x-close`} />
          </Svg>
        </StyledCloseButton>
        {/* Render the children inside the modal */}
        {children}
      </StyledModal>
    </StyledOverlay>,
    modalRoot
  );
};

// This module defines a reusable Modal component that creates a modal overlay.
// It listens for keydown events, allowing the user to close the modal by pressing the 'Escape' key.
// The modal is also closable by clicking outside its content.
// The createPortal function is used to render the modal content inside a specific HTML element with the id 'modal-root', allowing it to be positioned outside the regular component hierarchy.