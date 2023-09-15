import { Link, NavLink } from 'react-router-dom';
import {
  ImgAvatar,
  LogoutLink,
  Navigation,
  ProfileIcon,
  StyledLink,
  UserContainer,
  UserData,
} from './UserMenu.styled';
import { Container } from '../../styles/container';

export const UserMenu = () => {
  return (
    <Container>
      <UserContainer>
        <Navigation>
          <StyledLink to="/diary">Diary</StyledLink>
          <StyledLink to="/products">Products</StyledLink>
          <StyledLink to="/exercises">Exercises</StyledLink>
        </Navigation>
        <UserData>
          <NavLink to="/profile">
            <ProfileIcon width="28" height="28">
              <use href="../../../src/images/sprite.svg#icon-settings"></use>
            </ProfileIcon>
          </NavLink>
          <ImgAvatar
            src="../../../src/images/0-default.jpg"
            width={46}
            height={46}
          />
          <LogoutLink to="/">
            <span>Logout</span>
            <svg width="20" height="20">
              <use href="../../../src/images/sprite.svg#icon-log-out"></use>
            </svg>
          </LogoutLink>
        </UserData>
      </UserContainer>
    </Container>
  );
};
