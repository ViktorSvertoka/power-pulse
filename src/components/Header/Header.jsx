import { Link } from 'react-router-dom';
import { HeaderContainer, Navigation, StyledLink } from './Header.styled';
import { UserMenu } from '../UserMenu/UserMenu';

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">Logo</Link>
      <UserMenu />
    </HeaderContainer>
  );
};
