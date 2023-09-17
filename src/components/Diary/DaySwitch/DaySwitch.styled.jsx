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
`;

const CalenderBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 40px;
  background-color: transparent;
  gap: 8px;
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
