import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

function Button({
  text,
  background,
  color,
  border,
  hoverbackground,
  hoverColor,
}) {
  return (
    <Btn
      style={{ background, color, border }}
      hoverbackground={hoverbackground}
      hoverColor={hoverColor}
    >
      {text}
    </Btn>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string,
  hoverbackground: PropTypes.string,
  hoverColor: PropTypes.string,
};

export default Button;
