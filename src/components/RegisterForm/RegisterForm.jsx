import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  InputContainer,
  Title,
  Input,
  FormContainer,
  Button,
  Text,
  BtnContainer,
} from './RegisterForm.styled';
const registrationValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must be no more than 16 characters'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be no more than 16 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Please create a stronger password',
    )
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const RegisterForm = () => {
  // const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passworConfirmdVisible, setPasswordConfirmVisible] = useState(false);

  const handleClickPasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleClickPasswordConfirmVisibility = () => {
    setPasswordConfirmVisible(!passworConfirmdVisible);
  };

  const clearInput = (fieldName, setFieldValue) => {
    setFieldValue(fieldName, '');
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Отправленные данные:', values);
    resetForm();
  };

  const hasFieldError = (errors, fieldName) => errors[fieldName];
  const isFieldValid = (errors, fieldName) => !errors[fieldName];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registrationValidationSchema}
    >
      <Form autoComplete="off">
        <Title>SignUp</Title>
        <Text>
          Thank you for your interest in our platform. To complete the
          registration process, please provide us with the following
          information.
        </Text>
        <InputContainer>
          <label htmlFor="name">name</label>
          <Input
            type="name"
            id="name"
            name="name"
            placeholder="Name"
            // className={`${'default'} ${
            //   touched.name && !errors.name && 'success'
            // } ${touched.name && errors.name && 'error'}`}
          />

          <label htmlFor="email">email</label>
          <Input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Email"
          />

          <label htmlFor="password">password</label>

          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </InputContainer>
        <BtnContainer>
          <Button type="submit">Register</Button>
          <Text>Already have account? Sign In</Text>
        </BtnContainer>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
