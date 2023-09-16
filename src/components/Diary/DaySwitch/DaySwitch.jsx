import {
  Wrap,
  DateLabel,
  CalenderBtn,
  BtnPrev,
  BtnNext,
} from './DaySwitch.styled';
import Icon from '../../Icon/Icon';
import StyledDatepicker from '../../StyledDatepicker/StyledDatepicker';

import { useState, useRef } from 'react';

const DaySwitch = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isDatepickerOpen, setIsDatepickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const switchToPreviousDay = () => {
    const previousDay = new Date(currentDate);
    previousDay.setDate(previousDay.getDate() - 1);
    setSelectedDate(previousDay); // Изменили эту строку
    console.log('Previous Date:', previousDay); // Изменили эту строку
  };

  const switchToNextDay = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
    setSelectedDate(nextDay); // Изменили эту строку
    console.log('Next Date:', nextDay); // Изменили эту строку
  };

  const formattedDate = `${currentDate
    .getDate()
    .toString()
    .padStart(2, '0')}/${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${currentDate.getFullYear()}`;

  const handleCalenderBtnClick = () => {
    setIsDatepickerOpen(!isDatepickerOpen);
  };

  const handleDateChange = date => {
    setSelectedDate(date);
    setCurrentDate(date);
    setIsDatepickerOpen(false);
    // Focus back on the button
    buttonRef.current && buttonRef.current.focus();
  };

  // Добавим ref
  const buttonRef = useRef(null);

  return (
    <Wrap>
      <CalenderBtn onClick={handleCalenderBtnClick} ref={buttonRef}>
        {selectedDate ? (
          <DateLabel>
            {selectedDate.toLocaleDateString(undefined, {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })}
          </DateLabel>
        ) : (
          <DateLabel>{formattedDate}</DateLabel>
        )}
        <Icon symbolId="icon-calendar-orange" width="24" height="24" />
      </CalenderBtn>

      <BtnPrev
        onClick={() => {
          switchToPreviousDay();
        }}
        className="button"
        tabIndex={isDatepickerOpen ? -1 : 0}
      >
        <Icon symbolId="icon-arrow-left" width="16" height="16" />
      </BtnPrev>

      <BtnNext
        onClick={() => {
          switchToNextDay();
        }}
        className="button"
        tabIndex={isDatepickerOpen ? -1 : 0}
      >
        <Icon symbolId="icon-arrow-right" width="16" height="16" />
      </BtnNext>

      {isDatepickerOpen && (
        <StyledDatepicker
          isOpen={isDatepickerOpen}
          setIsOpen={setIsDatepickerOpen}
          selectedDate={currentDate}
          setSelectedDate={handleDateChange}
          buttonRef={buttonRef}
        />
      )}
    </Wrap>
  );
};

export default DaySwitch;
