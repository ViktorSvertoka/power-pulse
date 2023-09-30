import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from '../../redux/auth/selectors';

import sprite from '../../images/sprite.svg';
import {
  Button,
  Avatar,
  Photo,
  Wrapper,
  IconBtn,
  SvgLogoUser,
  TitleName,
  Subtitle,
} from './UserProfile.styled';
import { updateAvatar } from '../../redux/auth/operations';

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [avatar, setAvatar] = useState(user.avatarURL);

  const avatarUser = <Photo src={avatar} width="100%" alt="Avatar" />;
  const avatarLogo = (
    <SvgLogoUser fill="var(--normal-color)" width="62" height="62">
      <use href={`${sprite}#icon-user`}></use>
    </SvgLogoUser>
  );

  const handleAvatarChange = event => {
    const file = event.target.files[0];
    if (file) {
      const blob = new Blob([file]);
      const objectURL = URL.createObjectURL(blob);
      setAvatar(objectURL);
    }

    try {
      dispatch(updateAvatar(file)); // Assuming this dispatch works correctly
      console.log(file);
    } catch (error) {
      console.error('Помилка при відправленні файлу на сервер', error);
    }
  };

  return (
    <Wrapper>
      <Avatar>{avatar ? avatarUser : avatarLogo}</Avatar>
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
      <TitleName>{user.name}</TitleName>
      <Subtitle>User</Subtitle>
    </Wrapper>
  );
};

export default UserProfile;
