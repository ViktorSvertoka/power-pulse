import styled from 'styled-components';

export const ExercisesLi = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 206px;
  height: auto;
  border: 1px #efede8;
  border-radius: 12px;

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 206px;
  }

  @media screen and (min-width: 768px) {
    width: 224px;
    height: 206px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
