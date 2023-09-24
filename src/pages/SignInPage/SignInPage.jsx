import { useDispatch } from 'react-redux';
import { Container } from '../../styles/container';
import Button from '../../components/Button/Button';
import {
  TitleSignInPage,
  FormSignInPage,
  InputContainer,
  WrapperSignInPage,
  TextSignInPage,
  EmailInputSignInPage,
  PassInputSignInPage,
  SecondTextSingInPage,
  LinkSingInPage,
  CuteSquaresContainer,
  Tutorial,
  IconPlayContainer,
  Svg,
  TutorialTitle,
  TextTutorial,
  Calories,
  IconRunManContainer,
  TitleRunMan,
  SvgRunMan,
  SpanRunMan,
  HomePhoto,
} from './SignInPage.styled';
import sprite from '../../images/sprite.svg';
import { logIn } from '../../redux/auth/operations';

const SignInPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      }),
    );
    form.reset();
  };
  return (
    <Container>
      <WrapperSignInPage>
        <FormSignInPage onSubmit={handleSubmit}>
          <InputContainer>
            <TitleSignInPage>Sign In</TitleSignInPage>
            <TextSignInPage>
              Welcome! Please enter your credentials to login to the platform:
            </TextSignInPage>
            <EmailInputSignInPage
              type="email"
              name="email"
              placeholder="Email"
            />
            <PassInputSignInPage
              type="password"
              name="password"
              placeholder="Password"
            />
            <Button
              type="submit"
              text="Sign In"
              background="var(--orange-color)"
              color="var(--white-color)"
              hoverBackground="var(--orange-light-color)"
            />
            <SecondTextSingInPage>
              Don’t have an account?
              <LinkSingInPage to="/signup">Sign Up</LinkSingInPage>
            </SecondTextSingInPage>
          </InputContainer>
        </FormSignInPage>
        <HomePhoto>
          <CuteSquaresContainer>
            <Tutorial>
              <IconPlayContainer>
                <Svg>
                  <use href={`${sprite}#icon-Polygon-1`}></use>
                </Svg>
              </IconPlayContainer>
              <TutorialTitle>
                350+ <TextTutorial>Video tutorial</TextTutorial>
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
      </WrapperSignInPage>
    </Container>
  );
};

export default SignInPage;
