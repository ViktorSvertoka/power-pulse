import { parseISO } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import StyledDatepicker from '../Datepicker/StyledDatepicker';
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
  WrappInput,
} from './UserForm.styled';

import { selectUser } from '../../redux/auth/selectors';
import { updateUserParams } from '../../redux/auth/operations';

const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

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

  const formattedDate = parseISO(user.birthday);

  const initialValues = {
    name: user.name || 'Name',
    height: user.height || '150',
    currentWeight: user.currentWeight || '35',
    desiredWeight: user.desiredWeight || '35',
    birthday: formattedDate || '2005-01-01',
    blood: (user.blood ?? '1').toString() || '1',
    sex: user.sex || 'male',
    levelActivity: (user.levelActivity ?? '1').toString() || '1',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
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
  });

  const handleSubmit = values => {
    const sendData = {
      ...values,
    };
    dispatch(updateUserParams(sendData));
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
              <Field
                name="name"
                type="text"
                placeholder="Your name"
                as={Input}
              />
            </div>
            <div>
              <Input
                type="text"
                name="email"
                defaultValue={user.email}
                style={{ color: 'rgba(239, 237, 232, 0.60)' }}
                readOnly
                disabled
              />
            </div>
          </FormContainer>

          <WrapperInputField>
            <WrappInput>
              <Field
                type="number"
                name="height"
                id="height"
                placeholder=""
                as={InputField}
              />
              <label htmlFor="height">Height</label>
            </WrappInput>
            <Wrapper>
              <WrappInput>
                <Field
                  type="number"
                  name="currentWeight"
                  id="currentWeight"
                  placeholder=""
                  as={InputField}
                />
                <label htmlFor="currentWeight">Current Weight</label>
              </WrappInput>
            </Wrapper>
          </WrapperInputField>
          <WrapperInputField>
            <WrappInput>
              <Field
                type="number"
                name="desiredWeight"
                id="desiredWeight"
                placeholder=""
                as={InputField}
              />
              <label htmlFor="desiredWeight">Desired Weight</label>
            </WrappInput>
            <StyledDatepicker
              selectedDate={formik.values.birthday}
              setSelectedDate={date => {
                const formattedDate = parseISO(date.toISOString());
                formik.setFieldValue('birthday', formattedDate);
              }}
            />
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
