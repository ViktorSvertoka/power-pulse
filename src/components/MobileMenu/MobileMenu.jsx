import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { UserMenu } from '../UserMenu/UserMenu';
import {
  MenuWrapper,
  Overlay,
  CloseButton,
  Svg,
  Img,
} from './MobileMenu.styled';
import sprite from '../../images/sprite.svg';
import images from '../../images/0-default.jpg';

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
          <Svg>
            <use href={`${sprite}#icon-x`} />
          </Svg>
        </CloseButton>

        <UserMenu></UserMenu>

        <span>Logout</span>
        <Svg>
          <use href={`${sprite}#icon-x`} />
        </Svg>
        <Img src={images} alt="Images"></Img>
      </MenuWrapper>
    </>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MobileMenu;
