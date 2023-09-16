import { Link } from 'react-router-dom';
import { HeaderContainer } from './Header.styled';
import { UserMenu } from '../UserMenu/UserMenu';
import MobileMenu from '../MobileMenu/MobileMenu';
import { MobileMenuButton } from '../MobileMenuButton/MobileMenuButton';
import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen({ isOpen: !isOpen });
  };
  return (
    <HeaderContainer>
      <Link to="/">
        <svg width={152} height={17}>
          <use href="../../../src/images/sprite.svg#icon-logo"></use>
        </svg>
      </Link>
      <UserMenu />
      <MobileMenuButton onClick={handleClick} />
      <MobileMenu isOpen={isOpen} />
    </HeaderContainer>
  );
};
