import { HeaderContainer, Navigation, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/signup">SignUpPage</StyledLink>
        <StyledLink to="/signin">SignInPage</StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
