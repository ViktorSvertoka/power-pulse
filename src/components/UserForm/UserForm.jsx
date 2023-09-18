import { Input, Select, Button, Label } from './UserForm.styled';

const UserForm = () => {
  return (
    <>
      <div style={{ marginTop: 20 }}>
        <p
          style={{
            color: 'var(--normal-color)',
            marginBottom: 4,
            fontSize: 12,
          }}
        >
          Basic info
        </p>
        <Input></Input>
        <Input></Input>
      </div>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'flex-start',
          marginTop: 20,
          gap: 14,
        }}
      >
        <form action="#">
          <p
            style={{
              color: 'var(--normal-color)',
              marginBottom: 4,
              fontSize: 12,
            }}
          >
            Height
          </p>
          <Select></Select>
        </form>
        <form action="#">
          <p
            style={{
              color: 'var(--normal-color)',
              marginBottom: 4,
              fontSize: 12,
            }}
          >
            Current Weight
          </p>
          <Select></Select>
        </form>
      </div>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'flex-end',
          marginTop: 20,
          gap: 14,
        }}
      >
        <form action="#">
          <p
            style={{
              color: 'var(--normal-color)',
              marginBottom: 4,
              fontSize: 12,
            }}
          >
            Desired Weight
          </p>
          <Select></Select>
        </form>
        <Select></Select>
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: 30,
          gap: 8,
        }}
      >
        <form>
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
        </form>
        <form>
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
        </form>
      </div>

      <form
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
      </form>

      <Button>Save</Button>
    </>
  );
};

export default UserForm;
