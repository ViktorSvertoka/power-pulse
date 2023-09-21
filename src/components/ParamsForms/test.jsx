import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Создаем стилизованный компонент для формы
const FormContainer = styled.div`
  width: 300px;
  height: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const FormHeader = styled.h1`
  text-align: center;
`;

const FormParagraph = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;

const FormField = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  .error {
    color: red;
    font-size: 12px;
  }
`;

const FormButtons = styled.div`
  display: flex;
  justify-content: flex-end; /* Изменено на flex-end, чтобы кнопка была справа */
  margin-top: 15px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const initialValues = {
  height: '',
  currentWeight: '',
  desiredWeight: '',
  birthday: null,
  blood: '',
  sex: '',
  levelActivity: '',
};

const validationSchema = Yup.object({
  height: Yup.number()
    .min(150, 'Minimum height is 150 cm')
    .required('Required'),
  currentWeight: Yup.number()
    .min(35, 'Minimum weight is 35 kg')
    .required('Required'),
  desiredWeight: Yup.number()
    .min(35, 'Minimum weight is 35 kg')
    .required('Required'),
  birthday: Yup.date()
    .max(
      new Date(Date.now() - 18 * 365 * 24 * 60 * 60 * 1000),
      'You must be at least 18 years old',
    )
    .required('Required'),
  blood: Yup.number()
    .oneOf([1, 2, 3, 4], 'Invalid blood group')
    .required('Required'),
  sex: Yup.string()
    .oneOf(['male', 'female'], 'Invalid sex')
    .required('Required'),
  levelActivity: Yup.number()
    .oneOf([1, 2, 3, 4, 5], 'Invalid activity level')
    .required('Required'),
});

const steps = ['Step 1', 'Step 2', 'Step 3'];
const stepFields = [
  ['height', 'currentWeight', 'desiredWeight', 'birthday'],
  ['blood', 'sex', 'levelActivity'],
  [],
];

const placeholders = {
  height: 'Height',
  currentWeight: 'Current Weight',
  desiredWeight: 'Desired Weight',
  birthday: 'Birthday',
  blood: '',
  sex: '',
  levelActivity: '',
};

const ParamsForm = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Отправка данных на сервер
    console.log('Form data submitted:', values);
    setSubmitting(false);
  };

  return (
    <FormContainer>
      <FormHeader>{steps[step]}</FormHeader>
      {step === 0 && (
        <>
          <FormParagraph>
            Get closer to your goals! To ensure a personalized user experience
            and the proper functioning of our platform, we ask you to provide
            the following information about your weight, height, and other
            relevant data:
          </FormParagraph>
          {/* <hr /> */}
        </>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(
          { isSubmitting, values, setFieldValue }, // Добавлен доступ к values и setFieldValue
        ) => (
          <Form>
            {stepFields[step].map(fieldName => (
              <FormField key={fieldName}>
                <label htmlFor={fieldName} hidden>
                  {/* {fieldName} */}
                </label>
                {fieldName === 'birthday' ? (
                  <DatePicker
                    name={fieldName}
                    selected={values[fieldName]}
                    onChange={date => setFieldValue(fieldName, date)}
                    placeholderText={placeholders[fieldName]}
                  />
                ) : (
                  <Field
                    type={
                      fieldName === 'height' ||
                      fieldName === 'currentWeight' ||
                      fieldName === 'desiredWeight'
                        ? 'number'
                        : 'text'
                    }
                    name={fieldName}
                    placeholder={placeholders[fieldName]}
                  />
                )}
                <ErrorMessage
                  name={fieldName}
                  component="div"
                  className="error"
                />
              </FormField>
            ))}
            <FormButtons>
              {step > 0 && (
                <StyledButton type="button" onClick={prevStep}>
                  Back
                </StyledButton>
              )}
              {step < steps.length - 1 && (
                <StyledButton type="button" onClick={nextStep}>
                  Next
                </StyledButton>
              )}
              {step === steps.length - 1 && (
                <StyledButton type="submit" disabled={isSubmitting}>
                  Go
                </StyledButton>
              )}
            </FormButtons>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default ParamsForm;
