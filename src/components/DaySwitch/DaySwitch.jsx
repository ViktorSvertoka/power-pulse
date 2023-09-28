import React, { useState, useRef, useEffect } from 'react';
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

const DaySwitch = ({ onDateChange }) => {
  const [currentDate, setCurrentDate] = useState(() => {
    // Попробуем получить дату из localStorage
    const savedDate = localStorage.getItem('selectedDate');
    if (savedDate) {
      const parsedDate = new Date(savedDate);
      if (!isNaN(parsedDate.getTime())) {
        return parsedDate;
      }
    }
    // Если в localStorage нет даты или она некорректная, используем текущую дату
    return new Date();
  });
  const [isDatepickerOpen, setIsDatepickerOpen] = useState(false);

  useEffect(() => {
    // При изменении даты обновляем значение в localStorage
    localStorage.setItem('selectedDate', currentDate.toISOString());
  }, [currentDate]);

  const switchToPreviousDay = () => {
    const previousDay = new Date(currentDate);
    previousDay.setDate(previousDay.getDate() - 1);
    setCurrentDate(previousDay);
    if (onDateChange) {
      onDateChange(previousDay);
    }
  };

  const switchToNextDay = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
    setCurrentDate(nextDay);
    if (onDateChange) {
      onDateChange(nextDay);
    }
  };

  const formattedDate = `${String(currentDate.getDate()).padStart(
    2,
    '0',
  )}/${String(currentDate.getMonth() + 1).padStart(
    2,
    '0',
  )}/${currentDate.getFullYear()}`;

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
          setSelectedDate={setCurrentDate}
          isOpen={isDatepickerOpen}
          setIsOpen={setIsDatepickerOpen}
          anchorEl={buttonRef.current}
        />
      )}
    </Wrap>
  );
};

DaySwitch.propTypes = {
  onDateChange: PropTypes.func,
};

export default DaySwitch;
