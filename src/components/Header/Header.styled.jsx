import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 18px;
  margin: 0 auto;

  background-color: var('--black-color');

  @media screen and (min-width: 768px) {
    padding: 32px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 32px 96px;
  }
`;

export const LogoLink = styled(Link)`
  margin-right: auto;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  background-color: black;
`;

export const Svg = styled.svg`
  width: 126px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 152px;
    height: 17px;
  }
`;
