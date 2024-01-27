import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: rgba(21, 21, 21, 1);
  border-radius: 8px;
  z-index: 20;
  position: relative;
  padding: 24px;
`;

export const CloseButton = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;  
  width: 18px;
  height: 18px;
  cursor: pointer;
  stroke: var(--white-color);
`;
