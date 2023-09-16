import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { UserMenu } from '../UserMenu/UserMenu';
import {
  MenuWrapper,
  Overlay,
  CloseButton,
  IconWrapper,
} from './MobileMenu.styled';
import sprite from '../../images/sprite.svg';

export const MobileMenu = ({ isOpen }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(isOpen);

  // const openMenu = () => {
  //   setMenuIsOpen(true);
  // };

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
          <IconWrapper>
            <use href={`${sprite}#icon-x`} />
          </IconWrapper>
        </CloseButton>
        <UserMenu></UserMenu>

        <span>Logout</span>
        <IconWrapper>
          <use href={`${sprite}#icon-x`} />
        </IconWrapper>
      </MenuWrapper>
    </>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MobileMenu;
