import PropTypes from 'prop-types';
import { Button } from './MobileMenuButton.styled';

export const MobileMenuButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <svg width="20" height="20">
        <use href="../../../src/images/sprite.svg#icon-menu"></use>
      </svg>
    </Button>
  );
};

MobileMenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
