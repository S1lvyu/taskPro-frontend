import styled from '@emotion/styled';

// StyledOverlay: Styles for the modal overlay
export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); // Semi-transparent black overlay
  z-index: 999; // Ensures the overlay appears on top
`;

// StyledModal: Styles for the modal content
export const StyledModal = styled.div`
  position: relative;
  border-radius: 8px;
  background-color: #fcfcfc; // Off-white background color
  padding: 24px;

  // Responsive styling for different screen widths
  @media (max-width: 374px) {
    min-width: 50%;
  }

  @media (min-width: 480px) {
    min-width: 335px;
    max-width: 400px;
  }

  @media (min-width: 768px) {
    min-width: 350px;
    max-width: 400px;
  }

  @media (min-width: 1200px) {
    min-width: 350px;
    max-width: 400px;
  }
`;

// StyledCloseButton: Styles for the close button within the modal
export const StyledCloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  margin-left: auto;
  cursor: pointer;
`;

// Svg: Styles for an SVG element (used for the close button icon)
export const Svg = styled.svg`
  stroke: var(--black16-color); // Stroke color for the SVG
`;


// This module defines styled components for creating a modal overlay (StyledOverlay), styling the modal content (StyledModal), positioning the close button (StyledCloseButton), and styling an SVG element (Svg).
//  These components are used in the Modal component to achieve the desired visual appearance and behavior of the modal.
//  The styles include responsiveness for different screen sizes.