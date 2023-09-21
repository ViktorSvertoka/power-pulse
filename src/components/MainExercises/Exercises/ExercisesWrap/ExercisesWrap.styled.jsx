import styled from 'styled-components';

export const ExercisesWrapper = styled.li`
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    width: 1248px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ExercisesBox = styled.li`
  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ExercisesTitle = styled.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;
  margin-bottom: 20px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ExercisesNavList = styled.ul`
  display: flex;
  gap: 28px;
  margin-bottom: 48px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ExercisesFilter = styled.li`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  position: relative;

  &.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    bottom: -8px;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: var(--orange-color);
  }

  &.active {
    color: #efede8;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
