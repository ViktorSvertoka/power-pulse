import { Container } from '../../styles/container';
import {
  BtnHomeContainer,
  HomeSection,
  HomeTitle,
  TitleContainer,
  HomePhoto,
  TitleContainerTablet,
  HomePageLink,
  CuteSquaresContainer,
  Tutorial,
  Svg,
  IconPlayContainer,
  TutorialTitle,
  TextTutorial,
} from './HomePage.styled';
import sprite from '../../images/sprite.svg';

const HomePage = () => {
  return (
    <Container>
      <HomeSection>
        <TitleContainer>
          <HomeTitle>Transforming your body shape with Power Pulse</HomeTitle>
          <BtnHomeContainer>
            <HomePageLink to="/signup">Sign Up</HomePageLink>
            <HomePageLink to="/signin">Sign In</HomePageLink>
          </BtnHomeContainer>
        </TitleContainer>
        <HomePhoto>
          <TitleContainerTablet>
            <HomeTitle>Transforming your body shape with Power Pulse</HomeTitle>
            <BtnHomeContainer>
              <HomePageLink to="/signup">Sign Up</HomePageLink>
              <HomePageLink to="/signin">Sign In</HomePageLink>
            </BtnHomeContainer>
          </TitleContainerTablet>
          <CuteSquaresContainer>
            <Tutorial>
              <IconPlayContainer>
                <Svg>
                  <use href={`${sprite}#icon-Polygon-1`}></use>
                </Svg>
              </IconPlayContainer>
              <TutorialTitle>
                350+ <TextTutorial>tutorial</TextTutorial>
              </TutorialTitle>
            </Tutorial>
            <div>
              <svg width={20} height={20}>
                <use href="/"></use>
              </svg>
              <h3>
                500 <span>cal</span>
              </h3>
            </div>
          </CuteSquaresContainer>
        </HomePhoto>
      </HomeSection>
    </Container>
  );
};

export default HomePage;
