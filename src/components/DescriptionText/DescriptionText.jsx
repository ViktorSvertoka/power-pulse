import PropTypes from 'prop-types';
import { ExclamationIcon, ExclamationText } from './DescriptionText.styled';
import sprite from '../../images/sprite.svg';

const DescriptionText = ({ text, width, margin }) => {
  return (
    <ExclamationText width={width} margin={margin}>
      <ExclamationIcon>
        <use href={sprite + `#icon-exclamation-mark`}></use>
      </ExclamationIcon>
      {text}
    </ExclamationText>
  );
};

DescriptionText.propTypes = {
  text: PropTypes.string,
  width: PropTypes.object,
  margin: PropTypes.object,
};

export default DescriptionText;
