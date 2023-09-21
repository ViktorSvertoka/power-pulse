import styled from 'styled-components';

export const ExercisesUl = styled.ul`
  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: wrap;
    justify-content: start;
    column-gap: 22px;
  }
`;
