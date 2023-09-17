import styled from 'styled-components';
import sprite from '../../images/sprite.svg';
import { NavLink } from 'react-router-dom';
// import images from '../../images';

export const HomeSection = styled.section`
  /* max-width: 1440px;
  display: flex;
  align-items: center;
  padding-left: 96px; */
`;

export const HomeTitle = styled.h1`
  width: 100%;
  margin: 80px 20px 40px;

  font-family: inherit;
  font-size: 38px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.06;
  letter-spacing: 0.38px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    width: 598px;

    font-size: 70px;
    font-weight: 500;
    line-height: 1.12;
    letter-spacing: 0.7px;
  }
`;

export const TitleContainerTablet = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 720px;
  margin-bottom: 230px;
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const TitleContainer = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    gap: 64px;
    max-width: 720px;
    margin-top: 120px;
  }
`;

export const BtnHomeContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 20px;
`;

export const BtnHomeTablet = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 230px;
`;

export const HomePageLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.33;

  padding: 10px 27px;
  color: var(--white-color);

  border: 1px solid var(--normal-color);
  border-radius: 12px;

  &:hover,
  :focus {
    background-color: var(--orange-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;

    padding: 16px 60px;
  }
`;

export const CuteSquaresContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

export const Tutorial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 14px 18px;
  width: 146px;
  height: 66px;

  border-radius: 12px;
  background: #303030;
`;
export const Svg = styled.svg`
  display: block;
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
export const IconPlayContainer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  padding: 9px;
  background-color: var(--orange-light-color);

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const TutorialTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.12;

  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
  }
`;
export const TextTutorial = styled.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }
`;

export const HomePhoto = styled.div`
  background-image: url('../../../src/images/hero-mobile-1x.jpg');

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 812px;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('../../../src/images/hero-mobile-2x.jpg');
  }

  @media screen and (min-width: 375px) {
    width: 100%;
    height: 812px;
  }
  @media screen and (min-width: 768px) {
    background-image: url('../../../src/images/hero-tablet-1x.jpg');
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('../../../src/images/hero-tablet-2x.jpg');
    }
    width: 100%;
    height: 1024px;
  }
  @media screen and (min-width: 1440px) {
    background-image: url('../../../src/images/hero-1x.jpg');

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('../../../src/images/hero-2x.jpg');
    }
    width: 670px;
    height: 1005px;
    /* margin-top: -82px; */
  }
`;
