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
import { useState } from 'react';

export const UserMenu = () => {
  const [isActivePage, setIsActivePage] = useState('diary');
  const handleActivePage = name => {
    setIsActivePage(name);
  };
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());
  return (
    <UserContainer>
      <Navigation>
        {/* {isActivePage === "diary" ? style={{backgroundColor: 'var(--orange-color)'} }: style={{backgroundColor: 'transparent'} }} */}

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
