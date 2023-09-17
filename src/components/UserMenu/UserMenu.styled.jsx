import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 8px;

  background-color: var(--black-color);
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 1439px) {
    display: none;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.33;

  padding: 10px 27px;
  color: rgba(239, 237, 232, 1);

  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;

  &:hover,
  :focus {
    background-color: rgba(230, 83, 60, 1);
  }
`;

export const ImgAvatar = styled.img`
  width: 37px;
  height: 37px;
  display: inline-block;
  border: 1px solid rgba(230, 83, 60, 1);
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;

export const UserData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  margin-left: 30px;
`;

export const LogoutLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.33;
  color: rgba(239, 237, 232, 1);

  @media screen and (max-width: 1439px) {
    display: none;
  }
`;

export const ProfileIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: rgba(239, 237, 232, 0.4);

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
