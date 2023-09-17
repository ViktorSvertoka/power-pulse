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
    setCurrentDate(date);
    setIsDatepickerOpen(false);
  };

  const buttonRef = useRef(null);

  return (
    <Wrap>
      <CalenderBtn onClick={handleCalenderBtnClick} ref={buttonRef}>
        <DateLabel>{formattedDate}</DateLabel>
        <Icon symbolId="icon-calendar-orange" width="24" height="24" />
      </CalenderBtn>

      <BtnPrev
        onClick={() => {
          switchToPreviousDay();
        }}
        className="button"
        tabIndex={isDatepickerOpen ? -1 : 0}
      >
        <Icon symbolId="icon-chevron-left" width="16" height="16" />
      </BtnPrev>

      <BtnNext
        onClick={() => {
          switchToNextDay();
        }}
        className="button"
        tabIndex={isDatepickerOpen ? -1 : 0}
      >
        <Icon symbolId="icon-chevron-right" width="16" height="16" />
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
