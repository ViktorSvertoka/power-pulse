import { useEffect } from 'react';
import RadioOption from '../RadioOption/RadioOption';
import { WrapperRadio } from './Step2.styled';

const Step2 = ({
  selectedBlood,
  touched,
  errors,
  values,
  updateFormData,
  handleChange,
  blood,
  sex,
  levelActivity,
  selectedLevel,
  selectedSex,
  setSelectedBlood,
  setSelectedLevel,
  setSelectedSex,
}) => {
  // const [selectedSex, setSelectedSex] = useState('male');
  // const [selectedBlood, setSelectedBlood] = useState('1');
  // const [selectedLevel, setSelectedLevel] = useState('1');
  const handleFieldChange = (fieldName, value) => {
    handleChange(fieldName, value);
    updateFormData(fieldName, value);
    // Сохранение данных в состоянии ParamsForm
  };

  const isFieldValid = fieldName => touched[fieldName] && !errors[fieldName];

  useEffect(() => {
    if (blood !== values.blood) {
      handleChange('blood', blood);
    }
    if (sex !== values.sex) {
      handleChange('sex', sex);
    }
    if (levelActivity !== values.levelActivity) {
      handleChange('levelActivity', levelActivity);
    }
  }, [blood, sex, levelActivity]);

  const handleSexChange = event => {
    setSelectedSex(event.target.value);
  };

  const handleBloodChange = event => {
    setSelectedBlood(event.target.value);
  };

  const handleLevelChange = event => {
    setSelectedLevel(event.target.value);
  };

  const bloodOptions = [
    { id: '1', value: '1', label: '1' },
    { id: '2', value: '2', label: '2' },
    { id: '3', value: '3', label: '3' },
    { id: '4', value: '4', label: '4' },
  ];

  const sexOptions = [
    { id: 'male', value: 'male', label: 'Male' },
    { id: 'female', value: 'female', label: 'Female' },
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
    <WrapperRadio>
      <div className="radio-wrapper1">
        <p className="radio-text">Blood:</p>
        {bloodOptions.map(option => (
          <RadioOption
            key={option.id}
            id={option.id}
            name="blood"
            value={option.value}
            checked={selectedBlood === option.value}
            label={option.label}
            onChange={handleBloodChange}
          />
        ))}
      </div>

      <div className="radio-wrapper2">
        <p className="radio-text">Sex:</p>
        {sexOptions.map(option => (
          <RadioOption
            key={option.id}
            id={option.id}
            name="sex"
            value={option.value}
            checked={selectedSex === option.value}
            label={option.label}
            onChange={handleSexChange}
          />
        ))}
      </div>

      <div className="radio-wrapper3">
        <p className="radio-text">Level Activity:</p>
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
      </div>
    </WrapperRadio>
  );
};

export default Step2;
