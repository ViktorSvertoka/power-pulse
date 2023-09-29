import React, { useEffect } from 'react';
import { Field, ErrorMessage } from 'formik';

import {
  InputCont,
  InputWrapper,
  Label,
  Input,
  Error,
  StyledDatePicker,
  SvgKalen,
  InputWrapperDataPiker,
  IconContainer,
} from './Step1.styled'; // Импортируйте стили из файла styles.js
import sprite from '../../images/sprite.svg';
import StyledDatepicker from '../../components/StyledDatepicker/StyledDatepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Step1 = ({
  values,
  handleChange,
  touched,
  errors,
  updateFormData,
  height,
  currentWeight,
  desiredWeight,
  birthday,
}) => {
  const handleFieldChange = (fieldName, value) => {
    handleChange(fieldName, value);
    updateFormData(fieldName, value);
    // Сохранение данных в состоянии ParamsForm
  };
  //updateFormData({ ...formData, [fieldName]: value });
  
  const isFieldValid = fieldName => touched[fieldName] && !errors[fieldName];


  useEffect(() => {
    if (height !== values.height) {
      handleChange('height', height);
    }
    if (currentWeight !== values.currentWeight) {
      handleChange('currentWeight', currentWeight);
    }
    if (desiredWeight !== values.desiredWeight) {
      handleChange('desiredWeight', desiredWeight);
    }
    if (birthday !== values.birthday) {
      handleChange('birthday', birthday);
    }
  }, [height, currentWeight, desiredWeight, birthday]);

  return (
    <InputCont>
      <InputWrapper>
        <Label htmlFor="height" hidden>
          Height
        </Label>
        <Input
          type="number"
          name="height"
          placeholder="Height"
          value={values.height}
          onChange={e => handleFieldChange('height', e.target.value)}
          className={` ${isFieldValid('height') ? 'success' : ''} ${
            touched.height && errors.height ? 'error' : ''
          }`}
        />
        <Error name="height" component="div" className="error" />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="currentWeight" hidden>
          Current Weight
        </Label>
        <Input
          type="number"
          name="currentWeight"
          placeholder="Current"
          value={values.currentWeight}
          onChange={e => handleFieldChange('currentWeight', e.target.value)}
          className={` ${isFieldValid('currentWeight') ? 'success' : ''} ${
            touched.currentWeight && errors.currentWeight ? 'error' : ''
          }`}
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
          placeholder="Desired"
          value={values.desiredWeight}
          onChange={e => handleFieldChange('desiredWeight', e.target.value)}
          className={` ${isFieldValid('desiredWeight') ? 'success' : ''} ${
            touched.desiredWeight && errors.desiredWeight ? 'error' : ''
          }`}
        />
        <Error name="desiredWeight" component="div" className="error" />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="birthday" hidden>
          Birthday
        </Label>
        <InputWrapperDataPiker>
          <StyledDatePicker
            name="birthday"
            selected={values.birthday || null}
            value={values.birthday}
            onChange={date => handleFieldChange('birthday', date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Birthday"
            className={` ${isFieldValid('birthday') ? 'success' : ''} ${
              touched.birthday && errors.birthday ? 'error' : ''
            }`}
          />
          <StyledDatepicker />
          <SvgKalen>
            <use href={`${sprite}#icon-calendar-white`} />
          </SvgKalen>
        </InputWrapperDataPiker>
        <Error name="birthday" component="div" className="error" />
      </InputWrapper>
    </InputCont>
  );
};

export default Step1;
