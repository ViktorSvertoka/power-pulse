import { Container, Title, Wrapper } from './UserPage.styled';
import DashboardItem from '../../components/DashboardItem/DashboardItem';
import ExclamationMark from '../../components/ExclamationMark/ExclamationMark';
import UserForm from '../../components/UserForm/UserForm';
import Logout from '../../components/Logout/Logout';
import UserProfile from '../../components/UserProfile/UserProfile';

const UserPage = () => {
  return (
    <Container>
      <Title>Profile Settings</Title>
      <UserProfile />
      <Wrapper>
        <DashboardItem color="var(--orange-color)" iconId="icon-fork-knife" />
        <DashboardItem color="var(--orange-color)" iconId="icon-dumbbell" />
      </Wrapper>
      <ExclamationMark />
      <Logout />
      <UserForm />
    </Container>
  );
};

export default UserPage;
