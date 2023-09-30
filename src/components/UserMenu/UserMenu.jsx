import { NavLink } from 'react-router-dom';
import sprite from '../../images/sprite.svg';
import {
  AvatarHeader,
  LogoutBtn,
  Navigation,
  ProfileIcon,
  StyledLink,
  SvgLogoUserHeader,
  UserContainer,
  UserData,
} from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useState } from 'react';
import { Photo } from '../UserProfile/UserProfile.styled';
import { selectUser } from '../../redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const [isActivePage, setIsActivePage] = useState('diary');

  const user = useSelector(selectUser);

  const avatarUser = (
    <Photo src={user.avatarURL} width={46} height={46} alt="Avatar" />
  );
  const avatarLogo = (
    <SvgLogoUserHeader fill="var(--normal-color)">
      <use href={`${sprite}#icon-user`}></use>
    </SvgLogoUserHeader>
  );

  const handleActivePage = name => {
    setIsActivePage(name);
  };

  const handleLogOut = () => dispatch(logOut());
  return (
    <UserContainer>
      <Navigation>
        <StyledLink
          style={
            isActivePage === 'diary'
              ? { backgroundColor: 'var(--orange-color)' }
              : { backgroundColor: 'transparent' }
          }
          onClick={() => handleActivePage('diary')}
          to="/diary"
        >
          Diary
        </StyledLink>
        <StyledLink
          style={
            isActivePage === 'products'
              ? { backgroundColor: 'var(--orange-color)' }
              : { backgroundColor: 'transparent' }
          }
          onClick={() => handleActivePage('products')}
          to="/products"
        >
          Products
        </StyledLink>
        <StyledLink
          style={
            isActivePage === 'exercises'
              ? { backgroundColor: 'var(--orange-color)' }
              : { backgroundColor: 'transparent' }
          }
          onClick={() => handleActivePage('exercises')}
          to="/exercises"
        >
          Exercises
        </StyledLink>
      </Navigation>
      <UserData>
        <NavLink to="/profile">
          <ProfileIcon>
            <use href={`${sprite}#icon-settings`}></use>
          </ProfileIcon>
        </NavLink>
        <AvatarHeader>{user.avatarURL ? avatarUser : avatarLogo}</AvatarHeader>

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
