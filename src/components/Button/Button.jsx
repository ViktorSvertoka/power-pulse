import PropTypes from 'prop-types';
import { Btn } from "./Button.styled"

function Button({ text, onClick, background, color, border, hoverBackground, hoverColor }) {
  return (
    <Btn onClick={onClick} style={{ background, color, border }} hoverBackground={hoverBackground} hoverColor={hoverColor}>
      {text}
    </Btn>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired, 
  background: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string,
  hoverBackground: PropTypes.string,
  hoverColor: PropTypes.string, 
}

export default Button;



