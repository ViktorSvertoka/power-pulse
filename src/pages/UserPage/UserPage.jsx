import { Container, Title, Wrapper } from './UserPage.styled';
import ExclamationMark from '../../components/ExclamationMark/ExclamationMark';
import UserForm from '../../components/UserForm/UserForm';
import Logout from '../../components/Logout/Logout';
import UserProfile from '../../components/UserProfile/UserProfile';
import Daily from '../../components/Daily/Daily';

const UserPage = () => {
  return (
    <Container>
      <Title>Profile Settings</Title>
      <UserProfile />
      <Wrapper>
        <Daily
          color="var(--orange-color)"
          iconId="icon-fork-knife"
          text="Daily calorie intake"
          value="2200"
        />
        <Daily
          color="var(--orange-color)"
          iconId="icon-dumbbell"
          text="Daily norm of sports"
          value="110 min"
        />
      </Wrapper>
      <ExclamationMark />
      <Logout />
      <UserForm />
    </Container>
  );
};

export default UserPage;
