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
  // const {
  //   path,
  //   pathLength,
  //   stroke,
  //   strokeDashoffset,
  //   remainingTime,
  //   elapsedTime,
  //   size,
  //   strokeWidth,
  // } = useCountdown({ isPlaying: true, duration: 7, colors: '#abc' });
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
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
        colorsTime={[7, 5, 2, 0]}
      >
        {({ remainingTime }) => remainingTime}
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
