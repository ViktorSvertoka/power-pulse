import { Navigation, StyledLink, UserContainer } from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <UserContainer>
      <Navigation>
        <StyledLink to="/diary">Diary</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
        <StyledLink to="/exercises">Exercises</StyledLink>
      </Navigation>
      <div>
        <StyledLink to="/profile">Icon Settings</StyledLink>
        {/* <img src="/" /> */}
        <button type="button">
          Log Out
          {/* <svg /> */}
        </button>
      </div>
    </UserContainer>
  );
};
