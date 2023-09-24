import React from 'react';
import { ErrorMessage } from 'formik';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
   align-items: left;
  /*text-align: start; */
`;

const Error = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 8px;
`;

const Step3 = ({ formErrors }) => {
  return (
    <ErrorContainer>
      <ErrorMessage name="height">
        {message => <Error>Height: {message}</Error>}
      </ErrorMessage>

      <ErrorMessage name="currentWeight">
        {message => <Error>CurrentWeight: {message}</Error>}
      </ErrorMessage>

      <ErrorMessage name="desiredWeight">
        {message => <Error>DesiredWeight: {message}</Error>}
      </ErrorMessage>

      <ErrorMessage name="birthday">
        {message => <Error>Birthday: {message}</Error>}
      </ErrorMessage>

      <ErrorMessage name="blood">
        {message => <Error>Blood: {message}</Error>}
      </ErrorMessage>
      <ErrorMessage name="sex">
        {message => <Error>Sex: {message}</Error>}
      </ErrorMessage>
      <ErrorMessage name="levelActivity">
        {message => <Error>Level of Activity: {message}</Error>}
      </ErrorMessage>
      {formErrors.height && <Error>Height: {formErrors.height}</Error>}
      {formErrors.currentWeight && (
        <Error>CurrentWeight: {formErrors.currentWeight}</Error>
      )}
      {formErrors.desiredWeight && (
        <Error>DesiredWeight: {formErrors.desiredWeight}</Error>
      )}
      {formErrors.birthday && <Error>Birthday: {formErrors.birthday}</Error>}
      {formErrors.blood && <Error>Blood: {formErrors.blood}</Error>}
      {formErrors.sex && <Error>Sex: {formErrors.sex}</Error>}
      {formErrors.levelActivity && (
        <Error>Level of Activity: {formErrors.levelActivity}</Error>
      )}
    </ErrorContainer>
  );
};

export default Step3;
