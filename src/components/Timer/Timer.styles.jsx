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
  font-weight: 400;
  line-height: 14px;
  margin-bottom: 4px;
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
  margin-bottom: 8px;
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
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 40px;
`;

export const TimerSub = styled.span`
color: var(--orange-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  display: inline-flex;
`;