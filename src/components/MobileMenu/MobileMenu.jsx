import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { UserMenu } from '../UserMenu/UserMenu';
import { MenuWrapper, Overlay, CloseButton } from './MobileMenu.styled';
import Icon from '../Icon/Icon';
import { LogoutLink } from '../UserMenu/UserMenu.styled';

export const MobileMenu = ({ isOpen }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(isOpen);

  const openMenu = () => {
    setMenuIsOpen(true);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const handleEscKey = event => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  };

  useEffect(() => {
    if (menuIsOpen) {
      window.addEventListener('keydown', handleEscKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [menuIsOpen]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeMenu();
    }
  };

  useEffect(() => {
    setMenuIsOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      {menuIsOpen && <Overlay onClick={closeMenu}></Overlay>}
      <MenuWrapper
        className={menuIsOpen ? 'shown' : 'hidden'}
        onClick={handleBackdropClick}
      >
        <CloseButton onClick={closeMenu}>
          <Icon symbolId="icon-x" width="16" height="16" />
        </CloseButton>

        <UserMenu></UserMenu>
        <LogoutLink to="/">
          <span>Logout</span>
          <svg width="20" height="20">
            <use href="../../../src/images/sprite.svg#icon-log-out"></use>
          </svg>
        </LogoutLink>
      </MenuWrapper>
    </>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MobileMenu;
