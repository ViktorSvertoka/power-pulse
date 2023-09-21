import { Container } from '../../styles/container';
import { WrapperSignInPage } from '../../pages/SignInPage/SignInPage.styled';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import {
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
} from '../../pages/HomePage/HomePage.styled';
import sprite from '../../images/sprite.svg';
const SignUpPage = () => {
  return (
    <Container>
      <WrapperSignInPage>
        <RegisterForm />
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
      </WrapperSignInPage>
    </Container>
  );
};

export default SignUpPage;
//  <Container>
// </Container>
