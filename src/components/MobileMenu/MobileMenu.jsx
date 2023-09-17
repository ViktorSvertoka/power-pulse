import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MenuWrapper, Overlay, CloseButton, Svg } from './MobileMenu.styled';
import sprite from '../../images/sprite.svg';

const MobileMenu = ({ isOpen }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(isOpen);

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const handleEscKey = event => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
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

        <span>Logout</span>
        <Svg>
          <use href={`${sprite}#icon-x`} />
        </Svg>
      </MenuWrapper>
    </>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MobileMenu;
