
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const FormContainer = styled.div`
   box-sizing: border-box; 
  padding-top: 20px;
  max-width: 335px;
  height: 100%;
  margin: 0 auto;
  
  
  border-radius: 5px;
  background-color: transparent;
 
`;
const FormImput = styled(Form)`
 
  width: 100%;
  
  background-color: transparent;
`;

const FormHeader = styled.h2`
  text-align: left;
padding-bottom:20px;
  color: #efede8;
  font-family: Roboto;
  font-size: 24px;
 
  font-weight: 700;
  line-height: 1.16; 

`;

const FormParagraph = styled.p`
  text-align: left;
  padding-bottom: 50px;
  line-height: 1.5;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  color: var(--normal-color);
`;
//стиль контейнера для импутов
const FormField = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

 
  /* border: 1px solid #ccc; */
  justify-content: space-between;
`;

const WrapForm = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* border: 1px solid #ccc; */
`;

const FormButtons = styled.div`
  display: flex;
  justify-content: space-between;
 
`;

const StyledButton = styled.button`
  padding: 12px 40px;
  background: var(--orange-color);
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: var(--hover-color);
  }
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
  // ...
});

const steps = ['Step 1', 'Step 2', 'Step 3'];
const stepFields = [
  ['height', 'currentWeight', 'desiredWeight', 'birthday'],
  ['blood'],
  ['Go'],
];

const placeholders = {
  height: 'Height in cm',
  currentWeight: 'Current Weight in kg',
  desiredWeight: 'Desired Weight in kg',
  birthday: 'Birthday',
  blood: 'Select your blood group',
  sex: 'Select your sex',
  levelActivity: 'Select your level of physical activity',
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
    // Відправка даних на сервер
    console.log('Form data submitted:', values);
    setSubmitting(false);
    // Тут ви можете реалізувати логіку для відправки даних на сервер і обробки відповіді.
    // Перевірте, чи є помилки від сервера, і покажіть їх користувачеві, або перенаправте його на іншу сторінку.
  };

  return (
    <FormContainer>
      {step === 0 && (
        <>
          <FormHeader>Get closer to your goals!</FormHeader>
          <FormParagraph>
            To ensure a personalized user experience and the proper functioning
            of our platform, we ask you to provide the following information
            about your weight, height and other relevant data:
          </FormParagraph>
          
          
        </>
      )}
      {step === 1 && (
        <>
          <FormHeader>Get closer to your goals!</FormHeader>
        </>
      )}
      {step === 2 && (
        <>
          <FormHeader>Dear user</FormHeader>
          <FormParagraph>
            Thank you for filling in all the required data. We greatly
            appreciate your cooperation and commitment to a healthy lifestyle.
            The collected information will allow us to provide you with a more
            individual and personalized approach.
          </FormParagraph>
        </>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <FormImput>
            {/* stepFields[step].map(fieldName => ())key={fieldName} */}
              {<FormField >
                {step === 0 && (
                  <Step1 values={values} handleChange={setFieldValue} />
                )}
                {step === 1 && (
                  <Step2 values={values} handleChange={setFieldValue} />
                )}
                {step === 2 && (
                  <Step3 onSubmit={handleSubmit} onPrevStep={prevStep} />
                )}
              </FormField>
            }
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
          </FormImput>
        )}
      </Formik>
    
  </FormContainer>
  );
};

export default ParamsForm;
