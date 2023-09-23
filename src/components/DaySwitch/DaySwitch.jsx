// DaySwitch.js
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import StyledDatepicker from '../../components/StyledDatepicker/StyledDatepicker';
import {
  Wrap,
  CalenderBtn,
  DateLabel,
  BtnPrev,
  BtnNext,
  Svg,
  CalenderIconWrap,
} from './DaySwitch.styled';
import sprite from '../../images/sprite.svg';

const DaySwitch = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isDatepickerOpen, setIsDatepickerOpen] = useState(false);

  const switchToPreviousDay = () => {
    const previousDay = new Date(currentDate);
    previousDay.setDate(previousDay.getDate() - 1);
    handleDateChange(previousDay);
  };

  const switchToNextDay = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
    handleDateChange(nextDay);
  };

  const formattedDate = `${String(currentDate.getDate()).padStart(
    2,
    '0',
  )}/${String(currentDate.getMonth() + 1).padStart(
    2,
    '0',
  )}/${currentDate.getFullYear()}`;

  const handleDateChange = date => {
    setCurrentDate(date);
    setIsDatepickerOpen(false);
  };

  const buttonRef = useRef(null);

  const handleCalenderBtnClick = () => {
    setIsDatepickerOpen(prev => !prev);
  };

  return (
    <Wrap>
      <CalenderBtn onClick={handleCalenderBtnClick} ref={buttonRef}>
        <DateLabel>{formattedDate}</DateLabel>
        <CalenderIconWrap>
          <Svg>
            <use href={`${sprite}#icon-calendar-orange`} />
          </Svg>
        </CalenderIconWrap>
      </CalenderBtn>

      <BtnPrev
        className="button"
        tabIndex={isDatepickerOpen ? -1 : 0}
        onClick={switchToPreviousDay}
      >
        <Svg>
          <use href={`${sprite}#icon-chevron-left`} />
        </Svg>
      </BtnPrev>

      <BtnNext
        className="button"
        tabIndex={isDatepickerOpen ? -1 : 0}
        onClick={switchToNextDay}
      >
        <Svg>
          <use href={`${sprite}#icon-chevron-right`} />
        </Svg>
      </BtnNext>

      {isDatepickerOpen && (
        <StyledDatepicker
          selectedDate={currentDate}
          setSelectedDate={handleDateChange}
          isOpen={isDatepickerOpen}
          setIsOpen={setIsDatepickerOpen}
          anchorEl={buttonRef.current}
        />
      )}
    </Wrap>
  );
};

DaySwitch.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default DaySwitch;
