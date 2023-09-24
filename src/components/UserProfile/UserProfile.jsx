import { useState } from 'react';

import sprite from '../../images/sprite.svg';
import { Button, Avatar, Photo, Wrapper, IconBtn } from './UserProfile.styled';

const UserProfile = () => {
  const [avatarUrl, setAvatarUrl] = useState(
    'https://images.squarespace-cdn.com/content/v1/58d1b3ff1b631bb1893d108d/813f4928-6cc6-4bc8-a4e4-265f94b4d665/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg?format=1500w',
  );

  const avatarUser = <Photo src={avatarUrl} width="100%" alt="Avatar" />;
  const avatarLogo = (
    <svg fill="var(--normal-color)" width="62" height="62">
      <use href={`${sprite}#icon-user`}></use>
    </svg>
  );

  const handleAvatarChange = event => {
    const file = event.target.files[0];
    if (file) {
      const blob = new Blob([file]);
      const objectURL = URL.createObjectURL(blob);
      setAvatarUrl(objectURL);
    }
  };

  return (
    <Wrapper>
      <Avatar>{avatarUrl ? avatarUser : avatarLogo}</Avatar>
      <form id="upload-form">
        <input
          type="file"
          id="file-input"
          name="file"
          style={{ display: 'none' }}
          onChange={handleAvatarChange}
        />
        <label htmlFor="file-input">
          <Button>
            <IconBtn>
              <use href={`${sprite}#icon-add-avatar`}></use>
            </IconBtn>
          </Button>
        </label>
      </form>
      <p style={{ color: '#EFEDE8' }}>Anna Rybachok</p>
      <p style={{ color: 'var(--normal-color)' }}>User</p>
    </Wrapper>
  );
};

export default UserProfile;
