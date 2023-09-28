import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
  const [selectedBlood, setSelectedBlood] = useState('1');
  const [selectedSex, setSelectedSex] = useState('male');
  const [selectedLevel, setSelectedLevel] = useState('1');
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    height: user.height,
    currentWeight: user.currentWeight,
    desiredWeight: user.desiredWeight,
    birthday: user.birthday,
    avatarUrl: user.avatarUrl,
  });

  useEffect(() => {
    dispatch(getUserParams());
  }, [dispatch]);

  const handleSexChange = event => {
    setSelectedSex(event.target.value);
  };

  const handleBloodChange = event => {
    setSelectedBlood(event.target.value);
  };

  const handleLevelChange = event => {
    setSelectedLevel(event.target.value);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const sendData = {
      ...formData,
      blood: selectedBlood,
      sex: selectedSex,
      levelActivity: selectedLevel,
    };
    dispatch(updateUserParams(sendData));
    dispatch(getUserParams());
    console.log(user);
  };

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

  return (
    <>
      <FormContainer>
        <div>
          <SectionTitle>Basic info</SectionTitle>
          <Input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            type="string"
          />
        </div>
        <div>
          <Input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
      </FormContainer>

      <WrapperInputField>
        <div>
          <SectionTitle>Height</SectionTitle>
          <InputField
            name="height"
            value={formData.height}
            onChange={handleInputChange}
          />
        </div>
        <Wrapper>
          <SectionTitle>Current Weight</SectionTitle>
          <InputField
            name="currentWeight"
            value={formData.currentWeight}
            onChange={handleInputChange}
          />
        </Wrapper>
      </WrapperInputField>
      <WrapperInputField>
        <div>
          <SectionTitle>Desired Weight</SectionTitle>
          <InputField
            name="desiredWeight"
            value={formData.desiredWeight}
            onChange={handleInputChange}
          />
        </div>
        <InputField
          name="birthday"
          value={formData.birthday}
          onChange={handleInputChange}
        />
      </WrapperInputField>

      <WrapperRadio>
        <div style={{ display: 'flex', marginRight: '20px' }}>
          <div style={{ display: 'flex', marginRight: '20px' }}>
            {bloodOptions.map(option => (
              <RadioOption
                key={option.id}
                id={option.id}
                name="Blood"
                value={option.value}
                checked={selectedBlood === option.value}
                label={option.label}
                onChange={handleBloodChange}
              />
            ))}
          </div>

          <div style={{ display: 'flex' }}>
            {sexOptions.map(option => (
              <RadioOption
                key={option.id}
                id={option.id}
                name="Sex"
                value={option.value}
                checked={selectedSex === option.value}
                label={option.label}
                onChange={handleSexChange}
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
              checked={selectedLevel === option.value}
              label={option.label}
              onChange={handleLevelChange}
            />
          ))}
        </WrapperLevel>
      </WrapperRadio>

      <Button onClick={handleSubmit}>Save</Button>
    </>
  );
};

export default UserForm;
