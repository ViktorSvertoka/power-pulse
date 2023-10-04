// DaySwitch.styled.js
import styled from 'styled-components';

const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const BtnNext = styled.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
`;

const DateLabel = styled.p`
  font-family: 'RobotoBold';
  font-size: 24px;
  line-height: 1.33;
  margin: 0;
  padding: 0;
  color: var(--white-color);

  &:hover {
    color: var(--orange-light-color);
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.1;
  }
`;

const CalenderIconWrap = styled.div`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const CalenderBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 40px;
  background-color: transparent;
  gap: 8px;

  @media screen and (max-width: 767px) {
    margin-right: 20px;
    gap: 6px;
  }
`;

const BtnPrev = styled.button`
  display: flex;
  margin: 0 6px 0 0;
  padding: 0;
  background-color: transparent;
  color: var(--white-color);
  width: 16px;
  height: 16px;
`;

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  fill: var(--orange-color);
`;

export {
  Wrap,
  DateLabel,
  CalenderBtn,
  BtnPrev,
  BtnNext,
  Svg,
  CalenderIconWrap,
};
