import PropTypes from 'prop-types';

import { Title, Value, Container, Wrapper, Svg } from './DashboardItem.styled';
import sprite from '../../images/sprite.svg';
const DashboardItem = ({ color, iconId, icons }) => {
  const title = [
    'Daily calorie intake',
    'Daily norm of sports',
    'Calories consumed',
    'Calories burned',
    'The rest of the calories',
    'The rest of sports',
  ];

  const iconIndex = icons.indexOf(iconId);
  const titleText = iconIndex !== -1 ? title[iconIndex] : '';

  return (
    <Container color={color}>
      <Wrapper>
        <Svg>
          <use href={`${sprite}#${iconId}`} />
        </Svg>
        <Title>{titleText}</Title>
      </Wrapper>
      <Value>2200</Value>
    </Container>
  );
};

DashboardItem.propTypes = {
  color: PropTypes.string.isRequired,
  iconId: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DashboardItem;
