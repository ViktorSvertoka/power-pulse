import styled, { css } from 'styled-components';

import bgImgDesk1x from 'src/images/01-registration-1x.jpg';
import bgImgDesk2x from 'src/images/01-registration-2x.jpg';
import bgImgTab1x from 'src/images/01-registration-tablet-1x.jpg';
import bgImgTab2x from 'src/images/01-registration-tablet-2x.jpg';
import bgImgMob1x from 'src/images/01-registration-mobile-1x.jpg';
import bgImgMob2x from 'src/images/01-registration-mobile-2x.jpg';

import bbgImgDesk1x from 'src/images/02-registration-1x.jpg';
import bbgImgDesk2x from 'src/images/02-registration-2x.jpg';
import bbgImgTab1x from 'src/images/02-registration-tablet-1x.jpg';
import bbgImgTab2x from 'src/images/02-registration-tablet-2x.jpg';
import bbgImgMob1x from 'src/images/02-registration-mobile-1x.jpg';
import bbgImgMob2x from 'src/images/02-registration-mobile-2x.jpg';

import abgImgDesk1x from 'src/images/03-registration-1x.jpg';
import abgImgDesk2x from 'src/images/03-registration-2x.jpg';
import abgImgTab1x from 'src/images/03-registration-tablet-1x.jpg';
import abgImgTab2x from 'src/images/03-registration-tablet-2x.jpg';
import abgImgMob1x from 'src/images/03-registration-mobile-1x.jpg';
import abgImgMob2x from 'src/images/03-registration-mobile-2x.jpg';

const backgroundImages = {
  mobile: {
    0: bgImgMob1x,
    1: bbgImgMob1x,
    2: abgImgMob1x,
  },
  tablet: {
    0: bgImgTab1x,
    1: bbgImgTab1x,
    2: abgImgTab1x,
  },
  desktop: {
    0: bgImgDesk1x,
    1: bbgImgDesk1x,
    2: abgImgDesk1x,
  },
};
export const WrapperBodiPage = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  justify-content: space-between;
  padding-top: 50px;

  /* margin: 0px auto; */

  
  position: relative;

  @media screen and (max-width: 375px) {
    /* height: 95%; */
    max-width: 335px;
    /* margin-top:50px; */
    padding: 0px 10px 10px 10px;
  }
  @media screen and (min-width: 375px) {
    /* margin-top: 90px; */
    margin-left: auto;
    margin-right: auto;
    /* height: 89%; */
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 523px;
    padding-top: 120px;
    margin-left: 32px;
    /* height: 80%; */
  }

  @media screen and (min-width: 1440px) {
    width: 523px;
    margin-left: 90px;
  }
`;

export const WrapperParamsPage = styled.div`
  display: flex;
  box-sizing: border-box;
  
  margin: 0px auto;
  height: 88vh;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: contain;

  @media screen and (max-width: 374px) {
    max-width: 375px;
    ${({ step }) => css`
      background-image: url(${backgroundImages.mobile[step]});
    `}
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
  }

  @media screen and (min-width: 375px) {
    width: 375px;
    height: 89vh;
    margin-left: auto;
    margin-right: auto;
    background-color: transparent;
    ${({ step }) => css`
      background-image: url(${backgroundImages.mobile[step]});
    `}
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      ${({ step }) => css`
        background-image: url(${backgroundImages.mobile[step]});
      `}
    }
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: contain;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 87vh;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--black-color);
    ${({ step }) => css`
      background-image: url(${backgroundImages.tablet[step]});
    `}
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      ${({ step }) => css`
        background-image: url(${backgroundImages.tablet[step]});
      `}
    }
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: contain;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    height: 87vh;
    margin-left: auto;
    margin-right: auto;
    background-color: transparent;
    ${({ step }) => css`
      background-image: url(${backgroundImages.desktop[step]});
    `}
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      ${({ step }) => css`
        background-image: url(${backgroundImages.desktop[step]});
      `}
    }
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
  }
`;

export const FormContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  
  max-width: 335px;
  margin-right: 0;
 margin-left: 0;
  border-radius: 5px;
  background-color: transparent;
  @media screen and (max-width: 375px) {
   
  }
  @media screen and (min-width: 375px) {
    width: 523px;
    
  }

  @media screen and (min-width: 768px) {
    max-width: 523px;
    
  }

  @media screen and (min-width: 1440px) {
    width: 523px;
    
  }
`;

export const FormImput = styled.div`
  width: 100%;

  background-color: transparent;
`;

export const FormHeader = styled.h2`
  text-align: left;
  padding-bottom: 20px;
  color: #efede8;
  font-family: 'RobotoBold';
  font-size: 24px;

  font-weight: 700;
  line-height: 1.16;
  @media screen and (min-width: 375px) {
    color: #efede8;
    font-family: 'RobotoBold';
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.37;
  }
`;

export const FormParagraph = styled.p`
  text-align: left;
  color: rgba(239, 237, 232, 0.3);
  font-family: 'RobotoRegular';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28; 
margin-bottom:50px;
  color: var(--normal-color);
  @media screen and (min-width: 375px) {
    
  }

  @media screen and (min-width: 768px) {
    /* padding-bottom: 50px; */
    line-height: 1.3;
    font-family: 'RobotoRegular';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    max-width: 496px;
  }

 
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  /* border: 1px solid #ccc; */
  justify-content: space-between;
`;

export const WrapForm = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const FormButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  display: flex; 
  align-items: center;
  position: relative;
  padding: 12px 40px;
  
  color: #fff;
  border: none; 
  border-radius: 12px;
  cursor: pointer;
  background-color: transparent;
  &::after {
    content: ' →';
    margin-left: 8px;
    color: var(--orange-color);
  }

  &:hover {
    background-color: transparent;
    border-color: var(--hover-color); 
    color: var(--hover-color); 
  }

  &:focus {
    color: var(--orange-color); 
    outline: none; 
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const StyledButtonGo = styled.button`
  padding: 12px 40px;
  background: var(--orange-light-color);
  color: #ccc;
  border: 2px solid var(--orange-light-color);
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: var(--hover-color);
    border-color: var(--hover-color);
    color: #ccc;
  }

  &:focus {
    color: #ccc; /* Оранжевый цвет текста при фокусе */
    outline: none; /* Убираем стандартное контурное вокруг кнопки */
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const StyledButtonBack = styled.button`
  position: relative;
  padding: 12px 40px;
  /* background: var(--orange-color); Back*/
  color: #ccc;
  border: none; /*2px solid transparent Прозрачный border */
  border-radius: 12px;
  cursor: pointer;
  background-color: transparent;
  &::before {
    content: ' ←';
    margin-right: 8px;
    color: var(--orange-color);
  }

  &:hover {
    background-color: transparent;
    border-color: var(--hover-color);
    color: var(--hover-color);
  }

  &:focus {
    color: var(--orange-color); /* Оранжевый цвет текста при фокусе */
    outline: none; /* Убираем стандартное контурное вокруг кнопки */
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
export const StyledButtonFirst = styled.button`
  border-radius: 2px;
  background: #ef8964;
  box-shadow: 0px 1px 10px 0px rgba(230, 83, 60, 0.8);
  width: 80px;
  height: 4px; /* Установите желаемую высоту */
  color: white; /* Цвет текста */
  font-weight: bold; /* Жирный текст */
  /* margin-right: 10px; Расстояние между кнопками */
`;

export const WraperButtonPagin = styled.div`
  /* border-radius: 2px; */
  display: flex;
  justify-content: space-around;
  /* box-sizing:border-box; */
  background: transparent;
  max-width: 268px;
  height: 6px;
  margin-bottom: 32px;

  /*margin-right: 10px; */
`;
export const StyledButtonSecond = styled.button`
  border-radius: 2px;
  background: #303030;
  width: 80px;
  height: 4px;
  color: white;
  font-weight: bold;
  /* margin-right: 10px; */
`;

export const StyledButtonSecond2 = styled.button`
  border-radius: 2px;
  background: #303030;
  width: 80px;
  height: 4px;
  color: white;
  font-weight: bold;
  /* margin-right: 10px; */
`;
export const StyledButtonThird = styled.button`
  border-radius: 2px;
  background: #efa082;
  box-shadow: 0px 1px 10px 0px rgba(230, 83, 60, 0.8);
  width: 80px;
  height: 4px;
  color: white;
  font-weight: bold;
`;
export const WraperCalories = styled.div`
  display: flex;
  

  @media screen and (min-width: 768px) {
   
  }
`;
export const WraperCal = styled.div`
  display: flex;
`;

