import sprite from '../../images/sprite.svg';
import { Avatar, Wrapper } from './UserProfile.styled';

const UserProfile = () => {
  return (
    <Wrapper>
      <Avatar>
        <svg fill="var(--normal-color)" width="62" height="62">
          <use href={`${sprite}#icon-user`}></use>{' '}
        </svg>
      </Avatar>
      <svg style={{ position: 'relative', top: '-13' }} width="24" height="24">
        <use href={`${sprite}#icon-add-avatar`}></use>{' '}
      </svg>
      <p style={{ color: '#EFEDE8' }}>Anna Rybachok</p>
      <p style={{ color: 'var(--normal-color)' }}>User</p>
    </Wrapper>
  );
};

export default UserProfile;
