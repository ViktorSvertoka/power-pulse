import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import sprite from '../../images/sprite.svg';
import DatePicker from 'react-datepicker';
import axios from 'axios';

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
  SvgArrow,
  SvgArrowR,
} from './ParamsForm.styled';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import { useDispatch } from 'react-redux';
import { updateUserParams } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';

const initialValues = {
  height: '150',
  currentWeight: '35',
  desiredWeight: '35',
  birthday: null,
  blood: '1',
  sex: 'male',
  levelActivity: '1',
};

const validationSchema = Yup.object().shape({
  height: Yup.number()
    .typeError('Height must be a number')
    .min(150, 'Height must be 150 cm')
    .max(300, 'Max 300 cm')
    .required('Required'),
  currentWeight: Yup.number()
    .typeError('Current Weight must be a number')
    .min(35, 'Current Weight must be 35 kg')
    .max(300, 'Max 300 kg')
    .required('Required'),
  desiredWeight: Yup.number()
    .typeError('Desired Weight must be a number')
    .min(35, 'Desired Weight must be at least 35 kg')
    .max(300, 'Max 300 kg')
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

const steps = ['Step 1', 'Step 2', 'Step 3'];

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
  const [formData, setFormData] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({});

  const [step, setStep] = useState(0);

  const [selectedSex, setSelectedSex] = useState(formData.sex);
  const [selectedBlood, setSelectedBlood] = useState(formData.blood);
  const [selectedLevel, setSelectedLevel] = useState(formData.levelActivity);

  const updateFormData = (fieldName, value) => {
    setFormData(prevData => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

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
  const dispatch = useDispatch();

  const onSubmit = () => {
    // try {
    //   validationSchema.validate(values, { abortEarly: false });
    // } catch (error) {
    //   console.log('ERROR:', error);
    // }
    const sendData = {
      ...formData,
      blood: selectedBlood,
      sex: selectedSex,
      levelActivity: selectedLevel,
    };

    console.log('DATA:', sendData);
    dispatch(updateUserParams(sendData));
  }; // resetForm();//

  const handleSubmit = (values, { setSubmitting }) => {
    validationSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        // Успешная валидация, сбрасываем ошибки
        setFormErrors({});
        console.log('Form data:', values);
        console.log('Step 1 data:', formData);
        setSubmitting(false);

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
    <WrapperParamsPage step={step}>
      <WrapperBodiPage>
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
            {({
              isSubmitting,
              values,

              touched,

              errors,
              setFieldValue,
            }) => (
              <FormImput>
                {
                  <FormField>
                    {step === 0 && (
                      <Step1
                        values={values}
                        handleChange={setFieldValue}
                        touched={touched}
                        errors={errors}
                        updateFormData={updateFormData}
                        height={formData.height}
                        currentWeight={formData.currentWeight}
                        desiredWeight={formData.desiredWeight}
                        birthday={formData.birthday}
                      />
                    )}
                    {step === 1 && (
                      <Step2
                        errors={errors}
                        touched={touched}
                        selectedSex={selectedSex}
                        selectedBlood={selectedBlood}
                        selectedLevel={selectedLevel}
                        values={values}
                        handleChange={setFieldValue}
                        updateFormData={updateFormData}
                        setSelectedSex={setSelectedSex}
                        setSelectedBlood={setSelectedBlood}
                        setSelectedLevel={setSelectedLevel}
                        blood={formData.blood}
                        sex={formData.sex}
                        levelActivity={formData.levelActivity}
                      />
                    )}
                    {step === 2 && (
                      <Step3
                        onSubmit={handleSubmit}
                        onPrevStep={prevStep}
                        formErrors={formErrors}
                      />
                    )}
                  </FormField>
                }
                <FormButtons>
                  {step === steps.length - 1 && (
                    <StyledButtonGo
                      onClick={onSubmit}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Go
                      <Link to="/diary" />
                    </StyledButtonGo>
                  )}
                  {step > 0 && (
                    <StyledButtonBack type="button" onClick={prevStep}>
                      <SvgArrow>
                        <use href={`${sprite}#icon-arrow-left`} />
                      </SvgArrow>
                      Back
                    </StyledButtonBack>
                  )}
                  {step < steps.length - 1 && (
                    <StyledButton type="button" onClick={nextStep}>
                      Next
                      <SvgArrowR>
                        <use href={`${sprite}#icon-arrow-right`} />
                      </SvgArrowR>
                    </StyledButton>
                  )}
                </FormButtons>
              </FormImput>
            )}
          </Formik>
        </FormContainer>
        {step === 0 && (
          <WraperButtonPagin>
            <StyledButtonFirst />
            <StyledButtonSecond type="button" onClick={nextStep} />
            <StyledButtonSecond type="button" onClick={nextStep} />
          </WraperButtonPagin>
        )}
        {step === 1 && (
          <WraperButtonPagin>
            <StyledButtonThird type="button" onClick={prevStep} />
            <StyledButtonFirst />
            <StyledButtonSecond type="button" onClick={nextStep} />
          </WraperButtonPagin>
        )}
        {step === 2 && (
          <WraperButtonPagin>
            <StyledButtonThird type="button" onClick={prevStep} />
            <StyledButtonThird type="button" onClick={prevStep} />
            <StyledButtonFirst />
          </WraperButtonPagin>
        )}
      </WrapperBodiPage>
    </WrapperParamsPage>
  );
};

export default ParamsForm;
