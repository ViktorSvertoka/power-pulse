import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import sprite from '../../images/sprite.svg';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import {
  IconRunManContainer,
  Tutorial,
  Calories,
  Svg,
  IconPlayContainer,
  TutorialTitle,
  TextTutorial,
  SvgRunMan,
  TitleRunMan,
  SpanRunMan,
} from '../../pages/HomePage/HomePage.styled';
import 'react-datepicker/dist/react-datepicker.css';

import {
  WrapperBodiPage,
  WrapperParamsPage,
  FormContainer,
  FormImput,
  FormHeader,
  FormParagraph,
  FormField,
  WrapForm,
  FormButtons,
  StyledButton,
  StyledButtonGo,
  StyledButtonBack,
  StyledButtonFirst,
  StyledButtonSecond,
  StyledButtonSecond2,
  StyledButtonThird,
  WraperButtonPagin,
} from './ParamsForm.styled';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const initialValues = {
  height: '',
  currentWeight: '',
  desiredWeight: '',
  birthday: null,
  blood: [],
  sex: '',
  levelActivity: '',
};

const validationSchema = Yup.object().shape({
  height: Yup.number()
    .typeError('Height must be a number')
    .min(150, 'Height must be 150 cm')
    .required('Required'),
  currentWeight: Yup.number()
    .typeError('Current Weight must be a number')
    .min(35, 'Current Weight must be 35 kg')
    .required('Required'),
  desiredWeight: Yup.number()
    .typeError('Desired Weight must be a number')
    .min(35, 'Desired Weight must be at least 35 kg')
    .required('Required'),
  birthday: Yup.date()
    .typeError('Birthday must be a valid date')
    .test('is-adult', 'You must be 18', function (value) {
      const currentDate = new Date();
      const minAdultDate = new Date(
        currentDate.getFullYear() - 18,
        currentDate.getMonth(),
        currentDate.getDate(),
      );
      return value <= minAdultDate;
    })
    .required('Required'),
  blood: Yup.number()
    .typeError('Required')
    .oneOf([1, 2, 3, 4], 'Invalid blood type')
    .required('Required'),
  sex: Yup.string()
    .oneOf(['male', 'female'], 'Invalid sex')
    .required('Sex is required'),
  levelActivity: Yup.number()
    .typeError('Level of activity must be a number')
    .oneOf([1, 2, 3, 4, 5], 'Invalid level of activity')
    .required('Required'),
});

//  export default validationSchema;

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
  const [selectedBlood, setSelectedBlood] = useState(''); // Для крови
  const [selectedSex, setSelectedSex] = useState(''); // Для пола
  const [selectedLevelActivity, setSelectedLevelActivity] = useState('');

  const [formErrors, setFormErrors] = useState({});
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
    validationSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        // Успешная валидация, сбрасываем ошибки
        setFormErrors({});
        console.log('Form data:', values);
        setSubmitting(false);
        // console.log('Initial Values:', initialValues);
        // Тут реалізувати логіку для відправки даних на сервер і обробки відповіді.
        // Перевірте, чи є помилки від сервера, і покажіть їх користувачеві, або перенаправте його на іншу сторінку.
      })
      .catch(errors => {
        // Обработка ошибок валидации
        const formattedErrors = {};
        errors.inner.forEach(error => {
          formattedErrors[error.path] = error.message;
        });
        setFormErrors(formattedErrors);
        setSubmitting(false);
      });
  };
  // {/*  */}
  return (
    <WrapperBodiPage>
      <WrapperParamsPage step={step}>
        <FormContainer>
          {step === 0 && (
            <>
              <FormHeader>Get closer to your goals!</FormHeader>
              <FormParagraph>
                To ensure a personalized user experience and the proper
                functioning of our platform, we ask you to provide the following
                information about your weight, height and other relevant data:
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
                appreciate your cooperation and commitment to a healthy
                lifestyle. The collected information will allow us to provide
                you with a more individual and personalized approach.
              </FormParagraph>
            </>
          )}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, values, checked, setFieldValue }) => (
              <FormImput>
                {/* stepFields[step].map(fieldName => ())key={fieldName} */}
                {
                  <FormField>
                    {step === 0 && (
                      <Step1 values={values} handleChange={setFieldValue} />
                    )}
                    {step === 1 && (
                      <Step2
                        values={values}
                        handleChange={setFieldValue}
                        selectedBlood={selectedBlood}
                        selectedSex={selectedSex}
                        selectedLevelActivity={selectedLevelActivity}
                      />
                    )}
                    {step === 2 && (
                      <Step3
                        // onSubmit={handleSubmit}
                        onPrevStep={prevStep}
                        formErrors={formErrors}
                      />
                    )}
                  </FormField>
                }
                <FormButtons>
                  {step === steps.length - 1 && (
                    <StyledButtonGo type="submit" disabled={isSubmitting}>
                      Go
                    </StyledButtonGo>
                  )}
                  {step > 0 && (
                    <StyledButtonBack type="button" onClick={prevStep}>
                      Back
                    </StyledButtonBack>
                  )}
                  {step < steps.length - 1 && (
                    <StyledButton type="button" onClick={nextStep}>
                      Next
                    </StyledButton>
                  )}
                </FormButtons>
              </FormImput>
            )}
          </Formik>
          {step === 0 && (
            <WraperButtonPagin>
              <StyledButtonFirst />
              <StyledButtonSecond />
              <StyledButtonSecond />
            </WraperButtonPagin>
          )}
          {step === 1 && (
            <WraperButtonPagin>
              <StyledButtonThird />
              <StyledButtonFirst />
              <StyledButtonSecond />
            </WraperButtonPagin>
          )}
          {step === 2 && (
            <WraperButtonPagin>
              <StyledButtonThird />
              <StyledButtonThird />
              <StyledButtonFirst />
            </WraperButtonPagin>
          )}
        </FormContainer>
      </WrapperParamsPage>
    </WrapperBodiPage>
  );
};

export default ParamsForm;
