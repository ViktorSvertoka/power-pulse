import styled from 'styled-components';

export const ExercisesNavList = styled.ul`
  display: flex;
  gap: 28px;
  margin-bottom: 48px;
  @media screen and (min-width: 1440px) {
    padding-right: 96px;
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
`;

export const FilterBtn = styled.button`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;

  background-color: var(--black-color);

  &.active {
    color: #efede8;
  }
`;
