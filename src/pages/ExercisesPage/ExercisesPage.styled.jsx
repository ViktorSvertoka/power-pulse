import styled from 'styled-components';

export const Wrap = styled.div`
  @media screen and (min-width: 375px) and (max-width: 767.99px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) and (max-width: 1440px) {
    display: flex;
    padding-left: 32px;
    padding-top: 78 px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const ExercisesTitle = styled.h2`
  @media screen and (min-width: 375px) and (max-width: 767.99px) {
    background-color: #000000;
    width: 375px;
    padding-top: 40px;
    padding-left: 20px;
    font: Roboto-Bold;
    font-size: 24px;
    line-height: 1, 16;
    color: #efede8;
  }

  @media screen and (min-width: 768px) and (max-width: 1440px) {
    padding-top: 72px;
    font: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 1, 37;
    color: #efede8;
  }

  @media screen and (min-width: 1440px) {
    color: #efede8;
    font: Roboto-Bold;
    font-size: 32px;

    font-weight: 700;
    line-height: 1, 37;
    padding-top: 72px;
    padding-left: 96px;
  }
`;

export const ExercisesNavList = styled.ul`
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 768px) and (max-width: 1440px) {
    padding-top: 78px;
    margin-left: auto;
    margin-right: 32px;
    color: #efede8;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    color: #efede8;
    gap: 32px;
    margin-left: auto;
    padding-right: 96px;
    padding-top: 78px;
  }
`;

export const ExercisesFilter = styled.li`
  @media screen and (min-width: 375px) and (max-width: 767.99px) {
    position: relative;
    display: flex;

    padding-top: 20px;
    padding-left: 20px;
    color: #efede8;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1, 28;
    color: #efede8;
    &::after {
      content: '';
      position: absolute;
      bottom: -3px;
      width: 100%;
      height: 4px;
      background-color: var(--orange-color);
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1440px) {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1, 5;
  }

  @media screen and (min-width: 768px) and (max-width: 1440px) {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1, 5;
  }
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border: 1px #efede8;
  border-radius: 12px;
`;
