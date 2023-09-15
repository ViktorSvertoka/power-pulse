import PropTypes from 'prop-types';

import { Title, Value, Container, Wrapper } from './DashboardItem.styled';
import Icon from '../Icon/Icon';
const DashboardItem = ({ color, iconId }) => {
  return (
    <Container color={color}>
      <Wrapper>
        <Icon symbolId={iconId} width="20" height="20" />
        <Title>Daily calorie intake</Title>
      </Wrapper>
      <Value>2200</Value>
    </Container>
  );
};

DashboardItem.propTypes = {
  color: PropTypes.string.isRequired,
  iconId: PropTypes.string.isRequired,
};

export default DashboardItem;
