import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  MenuWrapper,
  Overlay,
  CloseButton,
  Svg,
  Logout,
  NavMenu,
  NavMenuLink,
  LogoutSvg,
} from './MobileMenu.styled';
import sprite from '../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';

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
  const dispatch = useDispatch();

  const handleLogOut = () => {
    closeMenu();
    dispatch(logOut());
  };
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
        <NavMenu>
          <NavMenuLink to="/diary" onClick={closeMenu}>
            Diary
          </NavMenuLink>
          <NavMenuLink to="/products" onClick={closeMenu}>
            Products
          </NavMenuLink>
          <NavMenuLink to="/exercises" onClick={closeMenu}>
            Exercises
          </NavMenuLink>
        </NavMenu>
        <Logout type="button" onClick={handleLogOut}>
          <span>Logout</span>
          <LogoutSvg>
            <use href={`${sprite}#icon-log-out-white`} />
          </LogoutSvg>
        </Logout>
      </MenuWrapper>
    </>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MobileMenu;
