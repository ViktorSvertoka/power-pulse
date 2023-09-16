import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 18px;
  margin: 0 auto;

  background-color: var('--black-color');

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1439px) {
    padding: 0 96px;
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
