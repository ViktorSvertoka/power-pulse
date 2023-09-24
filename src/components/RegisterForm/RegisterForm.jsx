import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import sprite from '../../images/sprite.svg';
// import { registerUser } from '../../redux/operations/fetchUser';

import {
  Button,
  ErrorWrap,
  FormContainer,
  Input,
  InputContainer,
  InputWrap,
  Title,
  IconBtn,
  StyledLink,
  ConfirmMessage,
  Svg,
  SvgLayc,
  SvgEror,
  Text,
  TextIn,
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

// let EMAIL_REGX = `^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/`;

// let emailSchema = Yup.string().matches(EMAIL_REGX, 'Invalid email address');

const registrationValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must be no more than 16 characters'),

  email: Yup.string().email('Invalid email address').required('Required'),

  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be no more than 16 characters')
    .matches(/^(?=.*[a-z])/, 'Please create a stronger password')
    .required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const dispatch = useDispatch();

  // const dispatch = data => console.log('Dispatched data:', data);
  // useDispatch();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passworConfirmdVisible, setPasswordConfirmVisible] = useState(false);

  const handleClickPasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // const handleClickPasswordConfirmVisibility = () => {
  //   setPasswordConfirmVisible(!passworConfirmdVisible);
  // };

  // const clearInput = (fieldName, setFieldValue) => {
  //   setFieldValue(fieldName, '');
  // };

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(
      register({
        name,
        email,
        password,
      }),
    );
    resetForm();
  };

  // registerUser

  const hasFieldError = (errors, fieldName) => errors[fieldName];
  const isFieldValid = (errors, fieldName) => !errors[fieldName];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registrationValidationSchema}
    >
      {({ isSubmitting, errors, touched, values, setFieldValue }) => (
        <Form autoComplete="off">
          <FormContainer>
            <InputContainer>
              <Title>Sign Up</Title>
              <Text>
                Thank you for your interest in our platform. To complete the
                registration process, please provide us with the following
                information.
              </Text>
              <InputWrap>
                <label htmlFor="name" hidden>
                  Name
                </label>
                <Input
                  id="name"
                  type="name"
                  name="name"
                  placeholder="Name"
                  className={`${'defoult'}
                    ${touched.name && !errors.name && 'success'}
                    ${touched.name && errors.name && 'error'}`}
                />

                {touched.name && isFieldValid(errors, 'name')}

                {touched.name && !errors.name ? (
                  <ConfirmMessage>
                    <SvgLayc>
                      <use href={`${sprite}#icon-checkbox-circle-fill`} />
                    </SvgLayc>
                    Name is secure
                  </ConfirmMessage>
                ) : (
                  <ErrorWrap>
                    <ErrorMessage name="name">
                      {errorMsg => (
                        <div>
                          <SvgEror>
                            <use href={`${sprite}#icon-red`} />
                          </SvgEror>
                          {errorMsg}
                        </div>
                      )}
                    </ErrorMessage>
                    {/* <ErrorMessage name="name" component="div" /> */}
                  </ErrorWrap>
                )}
              </InputWrap>

              <InputWrap>
                <label htmlFor="email" hidden>
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`${'defoult'}
                    ${touched.email && !errors.email && 'success'}
                    ${touched.email && errors.email && 'error'}`}
                />
                {/* {touched.email && hasFieldError(errors, 'email')} */}
                {touched.email && isFieldValid(errors, 'email')}

                {touched.email && !errors.email ? (
                  <ConfirmMessage>
                    <SvgLayc>
                      <use href={`${sprite}#icon-checkbox-circle-fill`} />
                    </SvgLayc>
                    Email is secure
                  </ConfirmMessage>
                ) : (
                  <ErrorWrap>
                    <ErrorMessage name="email">
                      {errorMsg => (
                        <div>
                          <SvgEror>
                            <use href={`${sprite}#icon-red`} />
                          </SvgEror>
                          {errorMsg}
                        </div>
                      )}
                    </ErrorMessage>
                  </ErrorWrap>
                )}
              </InputWrap>

              <InputWrap>
                <label htmlFor="password" hidden>
                  Password
                </label>

                <Input
                  id="password"
                  type={passwordVisible ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  className={`${'defoult'}
                    ${touched.password && !errors.password && 'success'}
                    ${touched.password && errors.password && 'error'}`}
                />

                {touched.password && isFieldValid(errors, 'password')}
                {/* {touched.password && hasFieldError(errors, 'password')} */}
                {passwordVisible ? (
                  <IconBtn
                    type="button"
                    onClick={handleClickPasswordVisibility}
                  >
                    <Svg>
                      <use href={`${sprite}#icon-eye`} />
                    </Svg>
                  </IconBtn>
                ) : (
                  <IconBtn
                    type="button"
                    onClick={handleClickPasswordVisibility}
                  >
                    <Svg>
                      <use href={`${sprite}#icon-eye-off`} />
                    </Svg>
                  </IconBtn>
                )}
                {touched.password && !errors.password ? (
                  <ConfirmMessage>
                    <SvgLayc>
                      <use href={`${sprite}#icon-checkbox-circle-fill`} />
                    </SvgLayc>
                    Password is secure
                  </ConfirmMessage>
                ) : (
                  <ErrorWrap>
                    <ErrorMessage name="password">
                      {errorMsg => (
                        <div>
                          <SvgEror>
                            <use href={`${sprite}#icon-red`} />
                          </SvgEror>
                          {errorMsg}
                        </div>
                      )}
                    </ErrorMessage>
                  </ErrorWrap>
                )}
              </InputWrap>
            </InputContainer>

            <Button type="submit">Sign Up</Button>
            <TextIn>
              Already have account?
              <StyledLink to="/signin">Sign In</StyledLink>
            </TextIn>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
