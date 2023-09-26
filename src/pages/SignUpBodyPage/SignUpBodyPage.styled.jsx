import styled from 'styled-components';
import bgImgDesk1x from 'src/images/01-registration-1x.jpg';
import bgImgDesk2x from 'src/images/01-registration-1x.jpg';
import bgImgTab1x from 'src/images/01-registration-tablet-1x.jpg';
import bgImgTab2x from 'src/images/01-registration-tablet-2x.jpg';
import bgImgMob1x from 'src/images/01-registration-mobile-1x.jpg';
import bgImgMob2x from 'src/images/01-registration-mobile-2x.jpg';
import { NavLink } from 'react-router-dom';

export const ContainerBodi = styled.div`
  
  max-width: 1440px;
  
  box-sizing: border-box;
  background-color: transparent;
  
  margin: 0px auto;
  position: relative;
  
  max-width: 375;

  height: 100%;
  @media screen and (min-width: 375px) {
    width: 375px;
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;




















export const Container = styled.div`
  border: 3px solid rgba(213, 235, 19, 0.3);
  width: 1440px;
 

  background-color: transparent;
  border: 1px solid #13ec0b;
  margin: 0px auto;
  /* position: relative;
  top: 0;
  right: 0; */
  max-width:375;
  background-color: transparent;
  height: 100%;
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

// export const Title = styled.h2`
//   color: #efede8;
//   font-family: RobotoBold;
//   font-size: 24px;
//   line-height: 28px;
//   margin-top: 40px;
// `;

// export const ContainerSignInPage = styled.div`
//     position: relative;
//      margin-left: auto;
//      margin-right: auto;
//      max-width: 320px;
//      padding-left: 5px;
//      padding-top: 117px;

//      @media screen and (min-width: 375px) {
//        max-width: 375px;
//       padding-left: 20px;
//       padding-top: 127px;
//      }
//      @media screen and (min-width: 768px) {
//        max-width: 768px;
//        padding-left: 32px;
//       padding-top: 189px;
//      }
//      @media screen and (min-width: 1440px) {
//        max-width: 1440px;
//       padding-left: 96px;
//       padding-top: 200px;
//      }
  
// `;
