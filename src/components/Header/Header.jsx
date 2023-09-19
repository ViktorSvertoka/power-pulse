import { Link } from 'react-router-dom';

import { HeaderContainer, LogoLink, Svg, UserContainer } from './Header.styled';
import { UserMenu } from '../UserMenu/UserMenu';
import MobileMenu from '../MobileMenu/MobileMenu';
import { MobileMenuButton } from '../MobileMenuButton/MobileMenuButton';
import { useState } from 'react';
import sprite from '../../images/sprite.svg';

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const onClickMenuBtn = () => {
    setIsOpen({ isOpen: !isOpen });
  };
  return (
    <HeaderContainer>
      <LogoLink to="/">
        <Svg>
          <use href={`${sprite}#icon-logo`}></use>
        </Svg>
      </LogoLink>
      <UserContainer>
        {isLoggedIn && (
          <>
            <UserMenu />
            <MobileMenuButton onClick={onClickMenuBtn} />
            <MobileMenu isOpen={isOpen} />
          </>
        )}
      </UserContainer>
    </HeaderContainer>
  );
};
