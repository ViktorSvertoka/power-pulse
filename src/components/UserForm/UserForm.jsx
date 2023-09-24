import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormContainer,
  SectionTitle,
  Input,
  WrapperInputField,
  InputField,
  Button,
  WrapperRadio,
} from './UserForm.styled';

const RadioOption = ({ id, name, value, checked, label, onChange }) => (
  <div className="leave__radio">
    <input
      className="leave__radio-input"
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <label className="leave__radio-label" htmlFor={id}>
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

const UserForm = () => {
  const [selectedValue, setSelectedValue] = useState('Male');
  const [selectedBlood, setSelectedBlood] = useState('1');
  const [selectedQuestion, setSelectedQuestion] = useState('choice-1');

  const handleRadioChange = event => {
    setSelectedValue(event.target.value);
  };

  const handleBloodChange = event => {
    setSelectedBlood(event.target.value);
  };

  const handleQuestionChange = event => {
    setSelectedQuestion(event.target.value);
  };

  const bloodOptions = [
    { id: '1', value: '1', label: '1' },
    { id: '2', value: '2', label: '2' },
    { id: '3', value: '3', label: '3' },
    { id: '4', value: '4', label: '4' },
  ];

  const sexOptions = [
    { id: 'Male', value: 'Male', label: 'Male' },
    { id: 'Female', value: 'Female', label: 'Female' },
  ];

  const questionOptions = [
    {
      id: 'choice-1',
      value: 'choice-1',
      label: 'Sedentary lifestyle (little or no physical activity)',
    },
    {
      id: 'choice-2',
      value: 'choice-2',
      label: 'Light activity (light exercises/sports 1-3 days per week)',
    },
    {
      id: 'choice-3',
      value: 'choice-3',
      label: 'Moderately active (moderate exercises/sports 3-5 days per week)',
    },
    {
      id: 'choice-4',
      value: 'choice-4',
      label: 'Very active (intense exercises/sports 6-7 days per week)',
    },
    {
      id: 'choice-5',
      value: 'choice-5',
      label:
        'Extremely active (very strenuous exercises/sports and physical work)',
    },
  ];

  return (
    <>
      <FormContainer>
        <SectionTitle>Basic info</SectionTitle>
        <Input />
        <Input />
      </FormContainer>

      <WrapperInputField>
        <form action="#">
          <SectionTitle>Height</SectionTitle>
          <InputField />
        </form>
        <form action="#">
          <SectionTitle>Current Weight</SectionTitle>
          <InputField />
        </form>
      </WrapperInputField>

      <WrapperInputField>
        <form action="#">
          <SectionTitle>Desired Weight</SectionTitle>
          <InputField />
        </form>
        <InputField />
      </WrapperInputField>

      <div
        style={{
          display: 'flex',
          marginTop: 30,
          gap: 8,
        }}
      >
        <form>
          <WrapperRadio>
            {bloodOptions.map(option => (
              <RadioOption
                key={option.id}
                id={option.id}
                name="Blood"
                value={option.value}
                checked={selectedBlood === option.value}
                label={option.label}
                onChange={handleBloodChange}
              />
            ))}

            {sexOptions.map(option => (
              <RadioOption
                key={option.id}
                id={option.id}
                name="Sex"
                value={option.value}
                checked={selectedValue === option.value}
                label={option.label}
                onChange={handleRadioChange}
              />
            ))}

            {questionOptions.map(option => (
              <RadioOption
                key={option.id}
                id={option.id}
                name="question"
                value={option.value}
                checked={selectedQuestion === option.value}
                label={option.label}
                onChange={handleQuestionChange}
              />
            ))}
          </WrapperRadio>
        </form>
      </div>

      <Button>Save</Button>
    </>
  );
};

export default UserForm;
