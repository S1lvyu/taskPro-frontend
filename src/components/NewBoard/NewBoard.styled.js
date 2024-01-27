import styled from '@emotion/styled';

export const NewBoardTitle = styled.h2`
margin: 0 0 24px 0;
width: 96px;
height: 27px;
left: 24px;
top: 24px;
color: var(--white-color);
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 27px;
letter-spacing: -0.02em;
stroke: var(--white-color);
`;

export const ErrorMessage = styled.p`
color: stroke: var(--white-color);
margin-bottom: 10px;
text-align: center;
`;

export const Input = styled.input`
box-sizing: border-box;
margin: 0 0 24px 0;
width: 302px;
height: 49px;
padding-left: 20px;
background: transparent;
opacity: 0.4;
border: 1px solid #bedbb0;
box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
border-radius: 8px;
color:  var(--light-green-color);

&::placeholder {
  width: 28px;
  height: 21px;
  left: 18px;
  top: 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #bedbb0;
}

&:not(:placeholder-shown) {
  opacity: 1;
  color: var(--light-green-color);
}

&:focus {
  opacity: 1;
  outline: none;
  border: 1px solid #bedbb0;
}
`;



export const IconTitle = styled.h3`
margin: 0 0 14px 0;

font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
letter-spacing: -0.02em;

color: var(--white-color);
`;

export const IconWrap = styled.div`
  margin: 0 0 24px 0;
`;

export const Icon = styled.svg`
margin-right: 8px;
width: 18px;
height: 18px;
stroke: var(--gray-color);
cursor: pointer;
`;

export const BackgroundTitle = styled.h3`
margin: 0 0 14px 0;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
letter-spacing: -0.02em;
color: var(--white-color);
`;

export const BgIcon = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 260px;
  gap: 4px;

  margin-bottom: 40px;
`;

export const BackgroundItem = styled.div`
  cursor: pointer;
  transition: transform 0.3s;
  transform: ${({ isActive }) => (isActive ? 'scale(0.7)' : 'scale(1)')};
  filter: ${({ isActive }) => (isActive ? 'grayscale(100%)' : 'none')};
  filter: ${({ isActive }) => (isActive ? 'brightness(60%)' : 'none')};

  border-radius: 6px;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
  }
`;

export const BackgroundImage = styled.img`
  width: 28px;
  height: 28px;
`;
