import sprite from '../../images/sprite.svg';
import { Button, Avatar, Wrapper, IconBtn } from './UserProfile.styled';

const UserProfile = () => {
  return (
    <Wrapper>
      <Avatar>
        <svg fill="var(--normal-color)" width="62" height="62">
          <use href={`${sprite}#icon-user`}></use>
        </svg>
      </Avatar>
      <Button type="button" onClick={() => alert('Click Button Avatar Add')}>
        <IconBtn>
          <use href={`${sprite}#icon-add-avatar`}></use>
        </IconBtn>
      </Button>
      <p style={{ color: '#EFEDE8' }}>Anna Rybachok</p>
      <p style={{ color: 'var(--normal-color)' }}>User</p>
    </Wrapper>
  );
};

export default UserProfile;
