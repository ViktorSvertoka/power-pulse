import styled from 'styled-components';

export const ExercisesWrapper = styled.li`
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 1440px) {
    width: 1248px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ExercisesBox = styled.li`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ExercisesTitle = styled.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;
  margin-bottom: 20px;
`;
