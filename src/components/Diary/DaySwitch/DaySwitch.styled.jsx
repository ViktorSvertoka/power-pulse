import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

const DateLabel = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #efede8;
  font-family: 'RobotoBold';
  font-size: 24px;
  line-height: 32px;
`;

const CalenderBtn = styled.button`
  width: 24px;
  height: 24px;
  margin: 0 40px 0 8px;
  display: flex;
  padding: 0;
  background-color: transparent;
  /* border: 3px solid transparent; */
`;

const BtnPrev = styled.button`
  width: 16px;
  height: 16px;
  display: flex;
  margin: 0;
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

const DayChangeIcon = styled.svg``;

export { Wrap, DateLabel, CalenderBtn, BtnPrev, BtnNext, DayChangeIcon };
