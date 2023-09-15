import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const DateLabel = styled.p`
  color: #efede8;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;

const CalenderIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

const BtnPrev = styled.button`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  color: white;
`;

const BtnNext = styled.button`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;

const DayChangeIcon = styled.svg``;

export { Wrap, DateLabel, CalenderIcon, BtnPrev, BtnNext, DayChangeIcon };
