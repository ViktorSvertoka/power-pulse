import styled from 'styled-components';

export const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const TimerTitle = styled.h1`
  color: rgba(239, 237, 232, 0.4);
  font-size: 10px;
  line-height: 1.4;
  margin-top: 14px;
`;

export const FormattedTitle = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  margin-bottom: 4px;
`;

export const TimerBtn = styled.button`
  background-color: var(--orange-color);
  margin-top: 14px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
`;

export const PlayIcon = styled.svg`
  width: 10px;
  height: 10px;
`;

export const TimerText = styled.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.28;

  margin-top: 8px;
`;

export const TimerSub = styled.span`
  color: var(--orange-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  display: inline-flex;
`;
