import { Link } from 'react-router-dom';
import { HeaderContainer, LogoLink, UserContainer } from './Header.styled';
import { UserMenu } from '../UserMenu/UserMenu';
import MobileMenu from '../MobileMenu/MobileMenu';
import { MobileMenuButton } from '../MobileMenuButton/MobileMenuButton';
import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickMenuBtn = () => {
    setIsOpen({ isOpen: !isOpen });
  };
  return (
    <HeaderContainer>
      <LogoLink to="/">
        <svg width={152} height={17}>
          <use href="./src/images/sprite.svg#icon-logo"></use>
        </svg>
      </LogoLink>
      <UserContainer>
        <UserMenu />
        <MobileMenuButton onClick={onClickMenuBtn} />
        <MobileMenu isOpen={isOpen} />
      </UserContainer>
    </HeaderContainer>
  );
};
