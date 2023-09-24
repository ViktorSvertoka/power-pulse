import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
 import DatePicker from 'react-datepicker';
import sprite from '../../images/sprite.svg';
 
// import { Container } from '../../pages/SignUpBodyPage/SignUpBodyPage.styled';
import StyledDatepicker from '../../components/StyledDatepicker/StyledDatepicker';

const InputCont = styled.div`
  width: 100%;
  position:relative;
  background-color: transparent;
  border: 1px solid rgba(8, 230, 19, 0.3);
  @media screen and (min-width: 375px) {
    width: 335px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media screen and (min-width: 768px) {
    width: 527px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 46px;
  }

  @media screen and (min-width: 1440px) {
    width: 527px;
  }
`;
const InputWrapper = styled.div`

  position: relative;
  
  margin-bottom: 5px;
  padding-bottom: 20px;
  width: 100%;
  flex-grow: 1;
  /* border: 1px solid rgba(56, 180, 6, 0.3); */
  @media screen and (min-width: 375px) {
    max-width: 155px;
    flex-grow: 1;
    flex-basis: calc(50% - 7px);
  }

  @media screen and (min-width: 768px) {
    max-width: 174px;
    max-width: calc(33.333% - 14px);
    flex-basis: calc(33.333% - 14px);

    &:nth-child(4n + 1) {
      flex-basis: 100%;
      margin-right: 0;
    }
  }

  @media screen and (min-width: 1440px) {
    max-width: 153px;
  }
`;

const Label = styled.label`
  
  color: #efede8;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

const Input = styled(Field)`
  width: 100%;
  outline: 1px solid rgba(239, 237, 232, 0.3);
  border: none;
  position: relative;
  box-sizing: border-box;
  height: 46px;
  color: var(--white-color);
  font-family: 'RobotoRegular';
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 4px;
  margin-top: 4px;
  padding-left: 14px;
  padding-top: 14px;
  padding-bottom: 14px;
  background-color: transparent;
  border-radius: 12px;

  &::placeholder {
    color: var(--normal-color);
    font-family: 'RobotoRegular';
    font-size: 14px;
    line-height: 1.28;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.5;
    }
  }

  &:hover,
  &:focus {
    outline: 1px solid #e6533c;

    /* outline: 0; */
  }
  &.default {
    outline: 1px solid rgba(239, 237, 232, 0.3);
  }
  &.success {
    outline: 1px solid #3cbf61;
  }
  &.error {
    outline: 1px solid rgba(248, 5, 5, 0.973);
  }
`;

const Inpu = styled(Field)`
  margin-bottom: 5px;
  width: 100%;
  padding: 14px;
  /* margin-bottom: 14px; */
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
    border-color: #e6533c;
  }
  &:disabled {
    border-color: #3e3f3e;
  }
  /* &::placeholder {
    color: #df720c;
  } */
`;

const Error = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  position: absolute;
`;
const StyledDatePicker = styled(DatePicker)`
  max-width: 155px;
  padding: 14px;
  margin-bottom: 4px;
  align-items: center;

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
    border-color: #ccc;
    cursor: not-allowed;
  }
`;

const Step1 = ({ values, handleChange }) => {
  return (
    
    <InputCont>
      <InputWrapper>
        <Label htmlFor="height" hidden>
          Height
        </Label>
        <Input type="number" name="height" placeholder="Height" />
        <Error name="height" component="div" className="error" />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="currentWeight" hidden>
          Current Weight
        </Label>
        <Input type="number" name="currentWeight" placeholder="Current" />
        <Error name="currentWeight" component="div" className="error" />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="desiredWeight" hidden>
          Desired Weight
        </Label>
        <Input type="number" name="desiredWeight" placeholder="Desired" />
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
    </InputCont>

    // <Container></Container>{/*<StyledDatepicker/>  */}
  );
};

export default Step1;
