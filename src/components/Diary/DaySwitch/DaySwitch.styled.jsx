import styled from 'styled-components';

const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 auto;
  padding: 0;
`;

const DateLabel = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #efede8;
  font-family: 'RobotoBold';
  font-size: 24px;
  line-height: 1.33;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 18px;
  }
`;

const CalenderBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 40px;
  background-color: transparent;
  gap: 8px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    margin-right: 20px;
  }
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  fill: #ef8964;
  stroke: #ef8964;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 20px;
    height: 20px;
  }
`;

const BtnPrev = styled.button`
  width: 16px;
  height: 16px;
  display: flex;
  margin: 0 6px 0 0;
  padding: 0;
  background-color: transparent;
  color: white;
`;

const BtnNext = styled.button`
  width: 16px;
  height: 16px;
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  color: white;
`;

export { Wrap, DateLabel, CalenderBtn, BtnPrev, BtnNext };
