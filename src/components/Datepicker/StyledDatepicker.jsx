import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles } from './StyledDatepicker.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import { InputField } from '../UserForm/UserForm.styled';

const StyledDatepicker = ({ selectedDate, setSelectedDate }) => {
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        customInput={<InputField />}
        dateFormat={'dd-MM-yyyy'}
        calendarStartDay={1}
        formatWeekDay={day => day.substring(0, 1)}
      />
      <CalendarGlobalStyles />
    </>
  );
};

StyledDatepicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func,
};

export default StyledDatepicker;
