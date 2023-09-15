import React from 'react';

import { useState } from 'react';
import {
  Wrap,
  DateLabel,
  CalenderIcon,
  BtnPrev,
  DayChangeIcon,
  BtnNext,
} from './DaySwitch.styled';

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
      <CalenderIcon />
      <BtnPrev onClick={switchToPreviousDay}>
        <DayChangeIcon />
      </BtnPrev>
      <BtnNext onClick={switchToNextDay}>
        <DayChangeIcon />
      </BtnNext>
    </Wrap>
  );
};

export default DaySwitch;
