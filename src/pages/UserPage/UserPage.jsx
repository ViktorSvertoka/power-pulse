import {
  Container,
  Title,
  Avatar,
  Input,
  Select,
  Button,
  Label,
} from './UserPage.styled';
import DashboardItem from '../../components/DashboardItem/DashboardItem';

const UserPage = () => {
  return (
    <Container>
      <Title>Profile Settings</Title>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '40px',
        }}
      >
        <Avatar>
          <svg fill="var(--normal-color)" width="62" height="62">
            <use href="../../../src/images/sprite.svg#icon-user"></use>{' '}
          </svg>
        </Avatar>
        <svg
          style={{ position: 'relative', top: '-13' }}
          width="24"
          height="24"
        >
          <use href="../../../src/images/sprite.svg#icon-add-avatar"></use>{' '}
        </svg>
        <p style={{ color: '#EFEDE8' }}>Anna Rybachok</p>
        <p style={{ color: 'var(--normal-color)' }}>User</p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '14px',
          marginTop: '40px',
        }}
      >
        <DashboardItem color="var(--orange-color)" iconId="icon-fork-knife" />
        <DashboardItem color="var(--orange-color)" iconId="icon-dumbbell" />
      </div>
      <div
        style={{
          display: 'flex',
          gap: 8,
          marginTop: 40,
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            width: 24,
            height: 24,
            backgroundColor: 'var(--beige-color)',
          }}
        >
          <svg width="24" height="24">
            <use href="../../../src/images/sprite.svg#icon-attention"></use>
          </svg>
        </div>
        <div>
          <p
            style={{
              color: 'var(--normal-color)',
              fontFamily: 'RobotoRegular',
            }}
          >
            We understand that each individual is unique, so the entire approach
            to diet is relative and tailored to your unique body and goals.
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginTop: 40,
          marginRight: 20,
          gap: 8,
        }}
      >
        <p style={{ color: 'var( --white-color)' }}>Logout</p>
        <svg width="24" height="24">
          <use href="../../../src/images/sprite.svg#icon-log-out"></use>
        </svg>
      </div>
      <div style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
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
          marginLeft: 20,
          marginRight: 20,
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
          marginLeft: 20,
          marginRight: 20,
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
          marginRight: 20,
          marginLeft: 20,
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

      <form style={{ display: 'flex' }}>
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
    </Container>
  );
};

export default UserPage;
