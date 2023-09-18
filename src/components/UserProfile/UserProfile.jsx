import { Avatar } from './UserProfile.styled';

const UserProfile = () => {
  return (
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
          <use href="./src/images/sprite.svg#icon-user"></use>{' '}
        </svg>
      </Avatar>
      <svg style={{ position: 'relative', top: '-13' }} width="24" height="24">
        <use href="./src/images/sprite.svg#icon-add-avatar"></use>{' '}
      </svg>
      <p style={{ color: '#EFEDE8' }}>Anna Rybachok</p>
      <p style={{ color: 'var(--normal-color)' }}>User</p>
    </div>
  );
};

export default UserProfile;
