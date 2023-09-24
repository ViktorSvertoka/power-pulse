// const SignUpBloodPage = () => {
//   return <div>SignUpBloodPage</div>;
// };
import styled from 'styled-components';
import bgImgDesk1x from 'src/images/01-registration-1x.jpg';
import bgImgDesk2x from 'src/images/01-registration-1x.jpg';
import bgImgTab1x from 'src/images/01-registration-tablet-1x.jpg';
import bgImgTab2x from 'src/images/01-registration-tablet-2x.jpg';
import bgImgMob1x from 'src/images/01-registration-mobile-1x.jpg';
import bgImgMob2x from 'src/images/01-registration-mobile-2x.jpg';
import { NavLink } from 'react-router-dom';


 

export const Container = styled.div`
  /* padding: 25px 18px;20px */
  margin: 0px auto;
  width: 100%;
  height:90vh;
  /* position:relative;
  top:0;
  right:0; */
  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;
export const WrapperBodiPage = styled.div`
  display: flex;
  /* position: absolute; */
`;


export const WrapperSignInPage = styled.section`
  /* padding-top:90px; */
  width: 334px;
  height: 90vh;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--black-color);
  background-image: linear-gradient(
      168deg,
      #040404 14.75%,
      rgba(4, 4, 4, 0) 52.97%
    ),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    url(${bgImgMob1x});
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;

  @media screen and (min-width: 375px) {
    width: 767px;
    height: 90vh;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--black-color);
    background-image: linear-gradient(
        168deg,
        #040404 14.75%,
        rgba(4, 4, 4, 0) 52.97%
      ),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${bgImgMob1x});
    @media creen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          168deg,
          #040404 14.75%,
          rgba(4, 4, 4, 0) 52.97%
        ),
        linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
        url(${bgImgMob2x});
    }
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
  }
  @media screen and (min-width: 768px) {
    width: 1440px;
    height: 90vh;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--black-color);
    background-image: linear-gradient(
        170deg,
        #040404 3.66%,
        rgba(4, 4, 4, 0) 19.15%
      ),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${bgImgTab1x});
    @media creen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          170deg,
          #040404 3.66%,
          rgba(4, 4, 4, 0) 19.15%
        ),
        linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
        url(${bgImgTab2x});
    }
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    height: 90vh;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--black-color);
    background-image: linear-gradient(
        80deg,
        #040404 -2.45%,
        rgba(4, 4, 4, 0) 68.17%
      ),
      url(${bgImgDesk1x});
    @media creen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          80deg,
          #040404 -2.45%,
          rgba(4, 4, 4, 0) 68.17%
        ),
        url(${bgImgDesk2x});
    }
    background-repeat: no-repeat;
    background-position: right;

    background-size: contain;
  }
`;