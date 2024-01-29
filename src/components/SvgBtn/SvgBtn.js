import icon from '../../assets/svg/symbol-defs.svg';
import { Btn } from './SvgBtn.styled';

// SvgBtn: A component for rendering a styled SVG button
export const SvgBtn = ({ idIcon, onClick }) => {
  return (
    <>
      {/* Btn: Styled button component with a click handler */}
      <Btn onClick={onClick}>
        {/* SVG element with an icon specified by idIcon */}
        <svg width="16" height="16">
          {/* Use xlinkHref to reference the SVG symbol from the icon file */}
          <use xlinkHref={`${icon}#${idIcon}`} />
        </svg>
      </Btn>
    </>
  );
};

// This module defines a SvgBtn component that renders a styled SVG button.
//  The Btn styled component provides styling for the button, and the Svg element within it references an SVG symbol specified by the idIcon prop.
//  The onClick prop allows passing a click handler to the button. This component is reusable for creating SVG buttons with different icons.