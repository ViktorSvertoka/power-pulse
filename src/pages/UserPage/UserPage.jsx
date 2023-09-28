import { Container, Title, Wrapper, WrapperContent } from './UserPage.styled';
import ExclamationMark from '../../components/ExclamationMark/ExclamationMark';
import UserForm from '../../components/UserForm/UserForm';
import Logout from '../../components/Logout/Logout';
import UserProfile from '../../components/UserProfile/UserProfile';
import Daily from '../../components/Daily/Daily';
import { useState } from 'react';

const UserPage = () => {
  const [avatarUrl, setAvatarUrl] = useState('');
  const handleChangeAvatar = url => {
    setAvatarUrl(url);
  };

  return (
    <Container>
      <Title>Profile Settings</Title>
      <WrapperContent>
        <div>
          <UserProfile
            avatarUrl={avatarUrl}
            handleChangeAvatar={handleChangeAvatar}
          />
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
        </div>
        <div>
          <UserForm avatarUrl={avatarUrl} />
        </div>
      </WrapperContent>
    </Container>
  );
};

export default UserPage;
