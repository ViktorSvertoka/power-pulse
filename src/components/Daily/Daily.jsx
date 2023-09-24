import PropTypes from 'prop-types';

import { Text, Value, Container, Wrapper, Svg } from './Daily.styled';
import sprite from '../../images/sprite.svg';

const Daily = ({ color, iconId, text, value }) => {
  return (
    <Container color={color}>
      <Wrapper>
        <Svg>
          <use href={`${sprite}#${iconId}`} />
        </Svg>
        <Text>{text}</Text>
      </Wrapper>
      <Value>{value}</Value>
    </Container>
  );
};

Daily.propTypes = {
  color: PropTypes.string.isRequired,
  iconId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Daily;
