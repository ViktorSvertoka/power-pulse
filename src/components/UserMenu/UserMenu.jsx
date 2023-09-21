import { NavLink } from 'react-router-dom';
import sprite from '../../images/sprite.svg';
import images from '../../images/0-default.jpg';
import {
  ImgAvatar,
  LogoutBtn,
  Navigation,
  ProfileIcon,
  StyledLink,
  UserContainer,
  UserData,
} from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());
  return (
    <UserContainer>
      <Navigation>
        <StyledLink to="/diary">Diary</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
        <StyledLink to="/exercises">Exercises</StyledLink>
      </Navigation>
      <UserData>
        <NavLink to="/profile">
          <ProfileIcon>
            <use href={`${sprite}#icon-settings`}></use>
          </ProfileIcon>
        </NavLink>
        <ImgAvatar src={images} />
        <LogoutBtn type="button" onClick={handleLogOut}>
          <span>Logout</span>
          <svg width="20" height="20">
            <use href={`${sprite}#icon-log-out`}></use>
          </svg>
        </LogoutBtn>
      </UserData>
    </UserContainer>
  );
};
