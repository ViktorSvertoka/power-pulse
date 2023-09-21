import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components'; // Import styled-components
import DatePicker from 'react-datepicker';
// Define styled components for the form fields
const InputWrapper = styled.div`
  margin-bottom: 15px;
 
`;

const Label = styled.label`
  /* display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #fff; */
  color: #efede8;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

const Input = styled(Field)`
  width: 155px;
  padding: 14px;
  margin-bottom: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;
  color: #efede8;
  font-size: 14;
  &:hover {
    border-color: var(--hover-color);
  }
  &:focus {
    border-color: var(--hover-color);
  }
  &:disabled {
    border-color: #0cee0c;
  }
  /* &::placeholder {
    color: #df720c;
  } */
`;

const Error = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
`;
const StyledDatePicker = styled(DatePicker)`
  width: 155px;
  padding: 14px;
  margin-bottom: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;
  color: #efede8;
  font-size: 14;
  &:hover {
    border-color: var(--hover-color);
  }
  &:disabled {
    border-color: #ccc;
    cursor: not-allowed;
  }
`;

const Step1 = ({ values, handleChange }) => {
  return (
    <>
      <InputWrapper>
        <Label htmlFor="height" hidden>
          Height
        </Label>
        <Input type="number" name="height" placeholder="Height in cm" />
        <Error name="height" component="div" className="error" />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="currentWeight" hidden>
          Current Weight
        </Label>
        <Input
          type="number"
          name="currentWeight"
          placeholder="Current Weight in kg"
        />
        <Error name="currentWeight" component="div" className="error" />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="desiredWeight" hidden>
          Desired Weight
        </Label>
        <Input
          type="number"
          name="desiredWeight"
          placeholder="Desired Weight in kg"
        />
        <Error name="desiredWeight" component="div" className="error" />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="birthday" hidden>
          Birthday
        </Label>
        <StyledDatePicker
          name="birthday"
          selected={values.birthday}
          onChange={date => handleChange('birthday', date)}
          placeholderText="Birthday"
        />
        <Error name="birthday" component="div" className="error" />
      </InputWrapper>
    </>
  );
};

export default Step1;
