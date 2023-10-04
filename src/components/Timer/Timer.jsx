// import Circle from './Circle/Circle';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
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
import _ from 'lodash.throttle';
// import { duration } from '@mui/material';

const Timer = ({ data, setDinamicBurnCal, dinamicBurnCal }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [remainingTime, setRemainingTime] = useState(data.time * 60);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };
  const children = ({ remainingTime }) => {
    const duration = data.time * 60;

    setDinamicBurnCal(() => {
      const time = (duration - remainingTime) / duration;

      console.log(time);
      const burnCal = time * data.burnedCalories;
      console.log(burnCal);
      return burnCal;
    });

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
        Burned calories:<TimerSub>{Math.round(dinamicBurnCal)}</TimerSub>
      </TimerText>
    </TimerWrapper>
  );
};

export default Timer;
