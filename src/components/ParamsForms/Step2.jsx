import {
  FormContainer,
  SectionTitle,
  Input,
  WrapperInputField,
  InputField,
  Button,
  Label,
} from '../../components/UserForm/UserForm.styled';
const Step2 = () => {
  return (
    <>
      <div
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
      </div>

      {/* <Button>Save</Button> */}
    </>
  );
};

export default Step2;
