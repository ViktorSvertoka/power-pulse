import { Container, Title } from './UserPage.styled';
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
      <ExclamationMark />
      <Logout />
      <UserForm />
    </Container>
  );
};

export default UserPage;
