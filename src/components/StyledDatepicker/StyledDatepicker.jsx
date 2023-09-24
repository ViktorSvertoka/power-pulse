import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, Wrapper } from './StyledDatepicker.styled';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';

const StyledDatepicker = ({ selectedDate, setSelectedDate, isOpen }) => {
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

StyledDatepicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default StyledDatepicker;
