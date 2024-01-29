import styled from '@emotion/styled';
import { ButtonPrimary } from '../ButtonPrimary/ButtonPrimary';

// Styled unordered list representing the task column's list
export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  gap: 8px;
  padding-right: 8px;
  height: calc(100vh - 318px); // Set the initial height based on viewport height
  // max-heigth: calc(100vh-250px);
  // overflow-x: hidden;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    height: calc(100vh - 378px); // Adjust height for screens wider than 768px
  }
  
  @media screen and (min-width: 992px) {
    height: calc(100vh - 286px); // Adjust height for screens wider than 992px
  }  
`;

// Styled div representing the header of the task column
export const HeaderColumn = styled.div`
  border-radius: 8px;
  width: 334px;
  height: 56px;
  padding: 14px 24px;
  background-color: var(--black12-color);
  color: var(--white-color);
  font-weight: 500;
  display: flex;
  // margin-bottom: 14px;
`;

// Styled primary button inheriting styles from ButtonPrimary component
export const ButtonPrimaryStyled = styled(ButtonPrimary)`
  width: 334px;
  margin-top: auto; // Set margin-top to 'auto' for vertical alignment at the bottom
`;

// Styled list item representing the task column itself
export const Column = styled.li`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
