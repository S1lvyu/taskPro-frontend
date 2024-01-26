import styled from '@emotion/styled';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 0px;
  width: 100%;
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 500;
  color: var(--black16-color);
  background-color: var(--light-green-color);
  border-radius: 8px;
  cursor:pointer;
`;

export const StyledIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 8px;
  background-color: var(--black16-color);
  border-radius: 8px;
`;

export const Svg = styled.svg`
  stroke: var(--white-color);
`;
