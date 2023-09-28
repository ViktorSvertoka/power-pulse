import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import RadioOption from '../RadioOption/RadioOption';
import {
  FormContainer,
  SectionTitle,
  Input,
  WrapperInputField,
  InputField,
  Button,
  WrapperRadio,
  Wrapper,
  WrapperLevel,
} from './UserForm.styled';

import { selectUser } from '../../redux/auth/selectors';
import { getUserParams, updateUserParams } from '../../redux/auth/operations';

const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getUserParams());
  }, [dispatch]);

  const bloodOptions = [
    { id: '1', value: '1', label: '1' },
    { id: '2', value: '2', label: '2' },
    { id: '3', value: '3', label: '3' },
    { id: '4', value: '4', label: '4' },
  ];

  const sexOptions = [
    { id: 'Male', value: 'male', label: 'Male' },
    { id: 'Female', value: 'female', label: 'Female' },
  ];

  const levelOptions = [
    {
      id: 'level-1',
      value: '1',
      label: 'Sedentary lifestyle (little or no physical activity)',
    },
    {
      id: 'level-2',
      value: '2',
      label: 'Light activity (light exercises/sports 1-3 days per week)',
    },
    {
      id: 'level-3',
      value: '3',
      label: 'Moderately active (moderate exercises/sports 3-5 days per week)',
    },
    {
      id: 'level-4',
      value: '4',
      label: 'Very active (intense exercises/sports 6-7 days per week)',
    },
    {
      id: 'level-5',
      value: '5',
      label:
        'Extremely active (very strenuous exercises/sports and physical work)',
    },
  ];

  const initialValues = {
    name: user.name || '',
    email: user.email || '',
    height: user.height || '',
    currentWeight: user.currentWeight || '',
    desiredWeight: user.desiredWeight || '',
    birthday: user.birthday || '',
    blood: '2',
    sex: 'male',
    levelActivity: '2',
    avatarUrl: user.avatarUrl || '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    height: Yup.number()
      .positive('Height must be positive')
      .required('Height is required'),
    currentWeight: Yup.number()
      .positive('Weight must be positive')
      .required('Current weight is required'),
    desiredWeight: Yup.number()
      .positive('Weight must be positive')
      .required('Desired weight is required'),
    birthday: Yup.date().required('Birthday is required'),
    avatarUrl: Yup.string(),
  });

  const handleSubmit = values => {
    const sendData = {
      ...values,
    };
    dispatch(updateUserParams(sendData));
    console.log(sendData);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {formik => (
        <Form>
          <FormContainer>
            <div>
              <SectionTitle>Basic info</SectionTitle>
              <Field name="name" type="text" as={Input} />
            </div>
            <div>
              <Field type="text" name="email" as={Input} />
            </div>
          </FormContainer>

          <WrapperInputField>
            <div>
              <SectionTitle>Height</SectionTitle>
              <Field type="number" name="height" as={InputField} />
            </div>
            <Wrapper>
              <SectionTitle>Current Weight</SectionTitle>
              <Field type="number" name="currentWeight" as={InputField} />
            </Wrapper>
          </WrapperInputField>
          <WrapperInputField>
            <div>
              <SectionTitle>Desired Weight</SectionTitle>
              <Field type="number" name="desiredWeight" as={InputField} />
            </div>
            <Field type="date" name="birthday" as={InputField} />
          </WrapperInputField>

          <WrapperRadio>
            <div style={{ display: 'flex', marginRight: '20px' }}>
              <div style={{ display: 'flex', marginRight: '20px' }}>
                {bloodOptions.map(option => (
                  <RadioOption
                    key={option.id}
                    id={option.id}
                    name="blood"
                    value={option.value}
                    checked={formik.values.blood === option.value}
                    label={option.label}
                    onChange={() => formik.setFieldValue('blood', option.value)}
                  />
                ))}
              </div>

              <div style={{ display: 'flex' }}>
                {sexOptions.map(option => (
                  <RadioOption
                    key={option.id}
                    id={option.id}
                    name="sex"
                    value={option.value}
                    checked={formik.values.sex === option.value}
                    label={option.label}
                    onChange={() => formik.setFieldValue('sex', option.value)}
                  />
                ))}
              </div>
            </div>

            <WrapperLevel>
              {levelOptions.map(option => (
                <RadioOption
                  key={option.id}
                  id={option.id}
                  name="levelActivity"
                  value={option.value}
                  checked={formik.values.levelActivity === option.value}
                  label={option.label}
                  onChange={() =>
                    formik.setFieldValue('levelActivity', option.value)
                  }
                />
              ))}
            </WrapperLevel>
          </WrapperRadio>

          <Button type="submit">Save</Button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
