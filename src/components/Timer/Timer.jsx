import Circle from './Circle/Circle';
import {
  CountdownCircleTimer,
  useCountdown,
} from 'react-countdown-circle-timer';
import {
  FormattedTitle,
  PlayIcon,
  TimerBtn,
  TimerSub,
  TimerText,
  TimerTitle,
  TimerWrapper,
} from './Timer.styles';
import symbolDefs from '../../../src/images/sprite.svg';
import { useState } from 'react';

const Timer = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };
  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes}:${seconds}`;
  };
  return (
    <TimerWrapper>
      <TimerTitle>Time</TimerTitle>
      <CountdownCircleTimer
        strokeWidth={2}
        size={124}
        isPlaying={isPlaying}
        duration={data.time * 60}
        colors={'var(--orange-color)'}
        remainingTime={data.time * 60}
        initialRemainingTime={data.time * 60}
        // colorsTime={[7, 5, 2, 0]}
      >
        {({ remainingTime }) => (
          <div style={{ color: '#fff' }} role="timer" aria-live="assertive">
            {children({ remainingTime })}
          </div>
        )}
      </CountdownCircleTimer>
      <FormattedTitle>{data.time} minutes</FormattedTitle>
      <TimerBtn onClick={handlePlay}>
        <PlayIcon>
          <use
            href={
              isPlaying
                ? `${symbolDefs}#icon-pause-square`
                : `${symbolDefs}#icon-play`
            }
          ></use>
        </PlayIcon>
      </TimerBtn>
      <TimerText>
        Burned calories:<TimerSub>{data.burnedCalories}</TimerSub>
      </TimerText>
    </TimerWrapper>
  );
};

export default Timer;
