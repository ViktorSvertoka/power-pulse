import PropTypes from 'prop-types';

import { Title, Value, Container, Wrapper } from './DashboardItem.styled';
import Icon from '../Icon/Icon';

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
        <Icon symbolId={iconId} width="20" height="20" />
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
