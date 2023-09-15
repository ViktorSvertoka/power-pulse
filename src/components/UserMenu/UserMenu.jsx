import {
  ImgAvatar,
  Navigation,
  StyledLink,
  UserContainer,
  UserData,
} from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <UserContainer>
      <Navigation>
        <StyledLink to="/diary">Diary</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
        <StyledLink to="/exercises">Exercises</StyledLink>
      </Navigation>
      <UserData>
        <StyledLink to="/profile">Icon Settings</StyledLink>
        <ImgAvatar src="/" width={46} height={46} />
        <button type="button">
          Log Out
          {/* <svg /> */}
        </button>
      </UserData>
    </UserContainer>
  );
};
