import React, { useState } from 'react';
import { ErrorMessage } from 'formik';
import styled from 'styled-components';


const ErrorContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 200px;
  height: 115px;
  z-index: 10;
  flex-direction: column;
  align-items: left;
  text-align: start;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;

  padding: 3px;
`;

const Error = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 3px;
`;

const Step3 = ({ formErrors, values, hasValidationErrors }) => {
  const {
    height,
    currentWeight,
    desiredWeight,
    birthday,
    blood,
    sex,
    levelActivity,
  } = values;

  {
    hasValidationErrors && (
      <ErrorContainer className="error-message">
        Ошибка валидации. Пожалуйста, исправьте ошибки.
      </ErrorContainer>
    );
  }

  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const closeError = () => {
    setIsErrorVisible(false);
  };
  return (
    <>
      {isErrorVisible ||
        (setIsErrorVisible && (
          <ErrorContainer>
            <>
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
            </>

            {formErrors.height && <Error>Height: {formErrors.height}</Error>}
            {formErrors.currentWeight && (
              <Error>CurrentWeight: {formErrors.currentWeight}</Error>
            )}
            {formErrors.desiredWeight && (
              <Error>DesiredWeight: {formErrors.desiredWeight}</Error>
            )}
            {formErrors.birthday && (
              <Error>Birthday: {formErrors.birthday}</Error>
            )}
            {formErrors.blood && <Error>Blood: {formErrors.blood}</Error>}
            {formErrors.sex && <Error>Sex: {formErrors.sex}</Error>}
            {formErrors.levelActivity && (
              <Error>Level of Activity: {formErrors.levelActivity}</Error>
            )}
          </ErrorContainer>
        ))}
    </>
  );
};

export default Step3;


// const ErrorContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: left;
//   /*text-align: start; */
// `;

// const Error = styled.div`
//   color: red;
//   font-size: 12px;
//   margin-top: 8px;
// `;

// const Step3 = ({ formErrors }) => {
//   return (
//     <ErrorContainer>
//       <ErrorMessage name="height">
//         {message => <Error>Height: {message}</Error>}
//       </ErrorMessage>

//       <ErrorMessage name="currentWeight">
//         {message => <Error>CurrentWeight: {message}</Error>}
//       </ErrorMessage>

//       <ErrorMessage name="desiredWeight">
//         {message => <Error>DesiredWeight: {message}</Error>}
//       </ErrorMessage>

//       <ErrorMessage name="birthday">
//         {message => <Error>Birthday: {message}</Error>}
//       </ErrorMessage>

//       <ErrorMessage name="blood">
//         {message => <Error>Blood: {message}</Error>}
//       </ErrorMessage>
//       <ErrorMessage name="sex">
//         {message => <Error>Sex: {message}</Error>}
//       </ErrorMessage>
//       <ErrorMessage name="levelActivity">
//         {message => <Error>Level of Activity: {message}</Error>}
//       </ErrorMessage>
//       {formErrors.height && <Error>Height: {formErrors.height}</Error>}
//       {formErrors.currentWeight && (
//         <Error>CurrentWeight: {formErrors.currentWeight}</Error>
//       )}
//       {formErrors.desiredWeight && (
//         <Error>DesiredWeight: {formErrors.desiredWeight}</Error>
//       )}
//       {formErrors.birthday && <Error>Birthday: {formErrors.birthday}</Error>}
//       {formErrors.blood && <Error>Blood: {formErrors.blood}</Error>}
//       {formErrors.sex && <Error>Sex: {formErrors.sex}</Error>}
//       {formErrors.levelActivity && (
//         <Error>Level of Activity: {formErrors.levelActivity}</Error>
//       )}
//     </ErrorContainer>
//   );
// };

// export default Step3;
