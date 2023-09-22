import Circle from "./Circle/Circle";
import { FormattedTitle, PlayIcon, TimerBtn, TimerSub, TimerText, TimerTitle, TimerWrapper } from "./Timer.styles";
import symbolDefs from "../../../src/images/sprite.svg";

const Timer = () => {
 

  return (
    <TimerWrapper >
      <TimerTitle>Time</TimerTitle>
      <Circle/>
      <FormattedTitle>02:10</FormattedTitle>
      <TimerBtn >
          <PlayIcon>
            <use href={symbolDefs + "#icon-play"}> </use>
          </PlayIcon>
      </TimerBtn>
      <TimerText>
        Burned calories:
        <TimerSub>150</TimerSub>
      </TimerText>
    </TimerWrapper>
  );
};

export default Timer;
