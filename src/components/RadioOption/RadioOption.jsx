import PropTypes from 'prop-types';

const RadioOption = ({ id, name, value, checked, label, onChange }) => (
  <div className="radio">
    <input
      className="radio-input"
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <label className="radio-label" htmlFor={id}>
      {label}
    </label>
  </div>
);

RadioOption.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioOption;
