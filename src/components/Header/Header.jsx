import { Link } from 'react-router-dom';
import { HeaderContainer } from './Header.styled';
import { UserMenu } from '../UserMenu/UserMenu';

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">Logo</Link>
      <UserMenu />
    </HeaderContainer>
  );
};
