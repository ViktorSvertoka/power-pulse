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
  Calories,
  SvgRunMan,
  IconRunManContainer,
  TitleRunMan,
  SpanRunMan,
  SvgLine,
} from './HomePage.styled';
import sprite from '../../images/sprite.svg';

const HomePage = () => {
  return (
    <Container>
      <HomeSection>
        <TitleContainer>
          <SvgLine>
            <use href={`${sprite}#icon-line`}></use>
          </SvgLine>
          <HomeTitle>Transforming your body shape with Power Pulse</HomeTitle>
          <BtnHomeContainer>
            <HomePageLink to="/signup">Sign Up</HomePageLink>
            <HomePageLink to="/signin">Sign In</HomePageLink>
          </BtnHomeContainer>
        </TitleContainer>
        <HomePhoto>
          <TitleContainerTablet>
            <SvgLine>
              <use href={`${sprite}#icon-line`}></use>
            </SvgLine>
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
            <Calories>
              <IconRunManContainer>
                <SvgRunMan>
                  <use href={`${sprite}#icon-running-stick-figure`}></use>
                </SvgRunMan>
              </IconRunManContainer>
              <TitleRunMan>
                500 <SpanRunMan>cal</SpanRunMan>
              </TitleRunMan>
            </Calories>
          </CuteSquaresContainer>
        </HomePhoto>
      </HomeSection>
    </Container>
  );
};

export default HomePage;
