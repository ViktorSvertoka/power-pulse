import PropTypes from 'prop-types';
import { UserMenu, LogoutLink } from '../UserMenu/UserMenu';
import { MenuWrapper } from './MobileMenu.styled';

export const MobileMenu = ({ isShown, handleClick }) => {
  return (
    <MenuWrapper className={isShown ? 'shown' : 'hidden'}>
      <UserMenu handleClick={handleClick}></UserMenu>
      <LogoutLink to="/">
        <span>Logout</span>
        <svg width="20" height="20">
          <use href="../../../src/images/sprite.svg#icon-log-out"></use>
        </svg>
      </LogoutLink>
    </MenuWrapper>
  );
};

MobileMenu.propTypes = {
  isShown: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
