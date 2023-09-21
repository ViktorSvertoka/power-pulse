import {
  BtnHomeContainer,
  HomePageLink,
  HomeTitle,
  SvgLine,
  TitleContainer,
} from '../../pages/HomePage/HomePage.styled';
import sprite from '../../images/sprite.svg';

export const HomePageTitle = () => {
  return (
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
  );
};
