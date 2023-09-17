import { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, Wrapper } from './StyledDatepicker.styled';
import 'react-datepicker/dist/react-datepicker.css';

const StyledDatepicker = ({
  isOpen,
  setIsOpen,
  selectedDate,
  setSelectedDate,
  buttonRef,
}) => {
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <Wrapper>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd MM yyyy"
        calendarStartDay={1}
        formatWeekDay={day => day.substr(0, 1)}
        open={isOpen}
        customInput={<div style={{ display: 'none' }} />}
        popperModifiers={{
          preventOverflow: {
            enabled: true,
            escapeWithReference: false,
            boundariesElement: 'viewport',
          },
        }}
      />
      <CalendarGlobalStyles />
    </Wrapper>
  );
};

export default StyledDatepicker;
