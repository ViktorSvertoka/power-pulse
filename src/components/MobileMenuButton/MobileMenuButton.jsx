import PropTypes from 'prop-types';
import { Button } from './MobileMenuButton.styled';
import sprite from '../../images/sprite.svg';

export const MobileMenuButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <svg width="20" height="20">
        <use href={`${sprite}#icon-menu`}></use>
      </svg>
    </Button>
  );
};

MobileMenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
