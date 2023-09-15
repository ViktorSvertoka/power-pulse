import { Link } from 'react-router-dom';
import { HeaderContainer } from './Header.styled';
import { UserMenu } from '../UserMenu/UserMenu';

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <svg width={152} height={17}>
          <use href="../../../src/images/sprite.svg#icon-logo"></use>
        </svg>
      </Link>
      <UserMenu />
    </HeaderContainer>
  );
};
