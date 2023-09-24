import styled from 'styled-components';

export const TimerProgress = styled.svg`
  rotate: 90deg;
    max-width: 220px;
    margin-bottom: 14px;
`;

export const TimerProgressCircle = styled.circle`
fill: transparent;
stroke-width: 4;
stroke: rgba(239, 237, 232, 0.1);
`;

export const TimerProgressCircleSec = styled.circle`
 fill: transparent;
    stroke-width: 4;
    stroke: var(--orange-color);
    transition: stroke-dashoffset .25s linear;
`;