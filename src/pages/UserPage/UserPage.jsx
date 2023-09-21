import { Container, Title, Wrapper } from './UserPage.styled';
import ExclamationMark from '../../components/ExclamationMark/ExclamationMark';
import UserForm from '../../components/UserForm/UserForm';
import Logout from '../../components/Logout/Logout';
import UserProfile from '../../components/UserProfile/UserProfile';
import DashboardItem from '../../components/DashboardItem/DashboardItem';

const UserPage = () => {
  const icons = ['icon-fork-knife', 'icon-dumbbell'];
  return (
    <Container>
      <Title>Profile Settings</Title>
      <UserProfile />
      <Wrapper>
        <DashboardItem
          color="var(--orange-color)"
          iconId="icon-fork-knife"
          icons={icons}
        />
        <DashboardItem
          color="var(--orange-color)"
          iconId="icon-dumbbell"
          icons={icons}
        />
      </Wrapper>
      <ExclamationMark />
      <Logout />
      <UserForm />
    </Container>
  );
};

export default UserPage;
