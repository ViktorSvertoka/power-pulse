import { useState } from 'react';
import {
  Wrap,
  DateLabel,
  CalenderBtn,
  BtnPrev,
  BtnNext,
} from './DaySwitch.styled';
import Icon from '../../Icon/Icon';

const DaySwitch = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const switchToPreviousDay = () => {
    const previousDay = new Date(currentDate);
    previousDay.setDate(previousDay.getDate() - 1);
    setCurrentDate(previousDay);
  };

  const switchToNextDay = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
    setCurrentDate(nextDay);
  };

  const formattedDate = `${currentDate
    .getDate()
    .toString()
    .padStart(2, '0')}/${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${currentDate.getFullYear()}`;

  return (
    <Wrap>
      <DateLabel>{formattedDate}</DateLabel>
      <CalenderBtn>
        <Icon symbolId="icon-calendar-orange" width="24" height="24" />
      </CalenderBtn>
      <BtnPrev onClick={switchToPreviousDay} className="button">
        <Icon symbolId="icon-arrow-left" width="16" height="16" />
      </BtnPrev>
      <BtnNext onClick={switchToNextDay} className="button">
        <Icon symbolId="icon-arrow-right" width="16" height="16" />
      </BtnNext>
    </Wrap>
  );
};

export default DaySwitch;
