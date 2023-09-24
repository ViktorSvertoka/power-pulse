import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

import {
  FormContainer,
  SectionTitle,
  Input,
  WrapperInputField,
  InputField,
  Button,
  Label,
  
} from '../../components/UserForm/UserForm.styled';
import { red } from '@mui/material/colors';

const Step2Container = styled.div`
  /* Стили для контейнера шага 2 */
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  div {
    margin-bottom: 8px;

    label {
      display: block;
      margin-bottom: 8px;

      input[type='radio'],
      input[type='checkbox'] {
        margin-right: 8px;
      }
    }
   
  }
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    margin-bottom: 5px;
   
  }
`;

const RadioOption = styled.div`
  display: flex;
  align-items: center;

  input[type='radio'] {
    margin-right: 5px;
   
  }
`;

const RadioWraper = styled.div`
display:flex;

`;

const RadioBox = styled.div`
  display: flex;
 flex-direction:column;
 margin-right:64px;
`;
const Title = styled.h2`
  color: #efede8;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom:32px;
`;
const Text = styled.span`
  color: #efede8;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;
const Step2 = ({ values, handleChange }) => {
  return (
    <Step2Container>
      <RadioGroup>
        {/* <Title>Choose your blood group:</Title> */}
        <RadioWraper>
          <RadioBox>
            <Label>Blood:</Label>
            <RadioOption>
              <Field type="radio" name="blood" value="1" checked />
              <Text>1</Text>
            </RadioOption>
            <RadioOption>
              <Field type="radio" name="blood" value="2" />
              <Text>2</Text>
            </RadioOption>
            <RadioOption>
              <Field type="radio" name="blood" value="3" />
              <Text>3</Text>
            </RadioOption>
            <RadioOption>
              <Field type="radio" name="blood" value="4" />
              <Text>4</Text>
            </RadioOption>
          </RadioBox>

          <div>
            <Label>Sex:</Label>
            <RadioOption>
              <Field type="radio" name="sex" value="male" checked />
              <Text>Male</Text>
            </RadioOption>
            <RadioOption>
              <Field type="radio" name="sex" value="female" />
              <Text>Female</Text>
            </RadioOption>
          </div>
        </RadioWraper>
        <div>
          <Label>Level Activity:</Label>
          <RadioOption>
            <Field type="radio" name="levelActivity" value="1" checked />
            <Text>Sedentary lifestyle (little or no physical activity)</Text>
          </RadioOption>
          <RadioOption>
            <Field type="radio" name="levelActivity" value="2" />
            <Text>
              Light activity (light exercises/sports 1-3 days per week)
            </Text>
          </RadioOption>
          <RadioOption>
            <Field type="radio" name="levelActivity" value="3" />
            <Text>
              Moderately active (moderate exercises/sports 3-5 days per week)
            </Text>
          </RadioOption>
          <RadioOption>
            <Field type="radio" name="levelActivity" value="4" />
            <Text>
              Very active (intense exercises/sports 6-7 days per week)
            </Text>
          </RadioOption>
          <RadioOption>
            <Field type="radio" name="levelActivity" value="5" />
            <Text>
              Extremely active (very strenuous exercises/sports and physical
              work)
            </Text>
          </RadioOption>
        </div>
      </RadioGroup>
    </Step2Container>
  );
};

export default Step2;



 {/* <div
        style={{
          display: 'flex',
          marginTop: 30,
          gap: 8,
        }}
      >
        <div>
          <input type="radio" id="#" name="#" value="#" />
          <label
            style={{
              color: '#EFEDE8',
              marginBottom: 4,
              fontSize: 14,
            }}
          >
            1
          </label>
          <input type="radio" id="#" name="#" value="#" />
          <label
            style={{
              borderColor: '1px solid #e61a1a',
              color: '#EFEDE8',
              marginBottom: 4,
              fontSize: 14,
            }}
          >
            2
          </label>
          <input type="radio" id="#" name="#" value="#" />
          <label
            style={{
              color: '#EFEDE8',
              marginBottom: 4,
              fontSize: 14,
            }}
          >
            3
          </label>
          <input type="radio" id="#" name="#" value="#" />
          <label
            style={{
              color: '#EFEDE8',
              marginBottom: 4,
              fontSize: 14,
            }}
          >
            4
          </label>
        </div>
        <div>
          <input type="radio" id="#" name="#" value="#" />
          <label
            style={{
              color: '#EFEDE8',
              marginBottom: 4,
              fontSize: 14,
            }}
          >
            Male
          </label>
          <input type="radio" id="#" name="#" value="#" />
          <label
            style={{
              color: '#EFEDE8',
              marginBottom: 4,
              fontSize: 14,
            }}
          >
            Female
          </label>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <input id="yes" type="radio" name="question" />
        <Label>Sedentary lifestyle (little or no physical activity)</Label>
        <input id="no" type="radio" name="question" />
        <Label>Light activity (light exercises/sports 1-3 days per week)</Label>
        <input id="yes" type="radio" name="question" />
        <Label>
          Moderately active (moderate exercises/sports 3-5 days per week)
        </Label>
        <input id="no" type="radio" name="question" />
        <Label>Very active (intense exercises/sports 6-7 days per week)</Label>
        <input id="no" type="radio" name="question" />
        <Label>
          Extremely active (very strenuous exercises/sports and physical work)
        </Label>
      </div> */

      /* <Button>Save</Button> */}