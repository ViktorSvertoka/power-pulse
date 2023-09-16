import styled from 'styled-components';

export const HomeSection = styled.section`
  max-width: 1440px;
  display: flex;
  align-items: center;
  padding-left: 96px;
`;

export const HomeTitle = styled.h1`
  font-size: 70px;
  font-weight: 500;
  line-height: 1.11;

  color: var(--white-color);
`;

export const TitleContainerTablet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  max-width: 720px;
  margin-top: 120px;
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
`;

export const BtnHomeTablet = styled.div`
  display: flex;
  gap: 20px;
`;

export const HomePhoto = styled.div`
  background-image: url('../../../src/images/hero-mobile-1x.jpg');

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 812px;
  text-align: center;

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
