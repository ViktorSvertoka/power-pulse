import { useEffect, useState } from 'react';
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
import { getUserParams } from '../../redux/auth/operations';

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl);

  useEffect(() => {
    dispatch(getUserParams());
  }, [dispatch]);

  const avatarUser = <Photo src={avatarUrl} width="100%" alt="Avatar" />;
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
      setAvatarUrl(objectURL);
    }
  };

  // const uploadAvatarToServer = async event => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     try {
  //       const formData = new FormData();
  //       formData.append('avatar', file);
  //       console.log(formData);
  //     } catch (error) {
  //       console.error('Помилка при відправленні файлу на сервер', error);
  //     }
  //   }
  // };

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
      <TitleName>{user.name}</TitleName>
      <Subtitle>User</Subtitle>
    </Wrapper>
  );
};

export default UserProfile;
