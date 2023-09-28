import React, { useState, useEffect } from 'react';
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

const formatDate = date => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const DaySwitch = ({ onDateChange }) => {
  const [currentDate, setCurrentDate] = useState(() => {
    const savedDate = localStorage.getItem('selectedDate');
    if (savedDate) {
      const parsedDate = new Date(savedDate);
      if (!isNaN(parsedDate.getTime())) {
        return parsedDate;
      }
    }
    return new Date();
  });

  const [isDatepickerOpen, setIsDatepickerOpen] = useState(false);

  useEffect(() => {
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

  const formattedDate = formatDate(currentDate);

  const handleCalenderBtnClick = () => {
    setIsDatepickerOpen(prev => !prev);
  };

  const handleOutsideClick = event => {
    const calenderBtn = document.getElementById('calenderBtn');

    if (calenderBtn && !calenderBtn.contains(event.target)) {
      setIsDatepickerOpen(false);
    }
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      setIsDatepickerOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Wrap>
      <CalenderBtn onClick={handleCalenderBtnClick} id="calenderBtn">
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
        />
      )}
    </Wrap>
  );
};

DaySwitch.propTypes = {
  onDateChange: PropTypes.func,
};

export default DaySwitch;
