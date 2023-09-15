import Button from '../../components/Button/Button';
import { Container } from '../../styles/container';
import {
  BtnHomeContainer,
  HomeSection,
  HomeTitle,
  TitleContainer,
  HomePhoto,
  TitleContainerTablet,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <HomeSection>
        <TitleContainer>
          <HomeTitle>Transforming your body shape with Power Pulse</HomeTitle>
          <BtnHomeContainer>
            <Button
              type="button"
              text="Sign Up"
              background="transparent"
              color="var(--white-color)"
              border="1px solid var(--normal-color)"
              // hoverBackground="var(--orange-color)"
            />
            <Button
              type="button"
              text="Sign In"
              background="transparent"
              color="var(--white-color)"
              border="1px solid var(--normal-color)"
              // hoverBackground="var(--orange-color)"
            />
          </BtnHomeContainer>
        </TitleContainer>
        <HomePhoto>
          <TitleContainerTablet>
            <HomeTitle>Transforming your body shape with Power Pulse</HomeTitle>
            <BtnHomeContainer>
              <Button
                type="button"
                text="Sign Up"
                background="transparent"
                color="var(--white-color)"
                border="1px solid var(--normal-color)"
                // hoverBackground="var(--orange-color)"
              />
              <Button
                type="button"
                text="Sign In"
                background="transparent"
                color="var(--white-color)"
                border="1px solid var(--normal-color)"
                // hoverBackground="var(--orange-color)"
              />
            </BtnHomeContainer>
          </TitleContainerTablet>
        </HomePhoto>
      </HomeSection>
    </Container>
  );
};

export default HomePage;
