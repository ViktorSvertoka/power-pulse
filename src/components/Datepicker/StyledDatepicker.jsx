import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, IconSvg } from './StyledDatepicker.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import sprite from '../../images/sprite.svg';
import { InputField } from '../UserForm/UserForm.styled';

const StyledDatepicker = ({ selectedDate, setSelectedDate }) => {
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <>
      <div style={{ position: 'relative' }}>
        <IconSvg width="18" height="18">
          <use href={`${sprite}#icon-calendar-white`}></use>
        </IconSvg>

        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          customInput={<InputField style={{ cursor: 'pointer' }} />}
          dateFormat={'dd-MM-yyyy'}
          calendarStartDay={1}
          formatWeekDay={day => day.substring(0, 1)}
        />

        <CalendarGlobalStyles />
      </div>
    </>
  );
};

StyledDatepicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func,
};

export default StyledDatepicker;
