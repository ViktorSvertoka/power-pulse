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
  margin: 0px auto;
  height: 90vh;
  border: 1px solid #aa0707;
  position: relative;
bottom:0;
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

export const WrapperParamsPage = styled.div`
  border: 1px solid #fff;
  margin: 0px auto;
  height: 90vh;
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
    height: 90vh;
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
display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  border: 2px solid rgba(34, 16, 196, 0.3);
display:flex;
  flex-direction: column;
  height: 74vh;
  margin-top: 90px;

  margin-left: 20px;
  margin-right: 20px;
  max-width: 335px;

  border-radius: 5px;
  background-color: transparent;
  @media screen and (max-width: 375px) {
    max-width: 335px;
    height: 80vh;
  }
  @media screen and (min-width: 375px) {
    width: 523px;
    height: 81vh;
  }

  @media screen and (min-width: 768px) {
    max-width: 523px;
    margin-top: 140px;
    margin-left: 90px;
    height: 73vh;
  }

  @media screen and (min-width: 1440px) {
    width: 523px;
    /* height: 80vh; */
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
  font-family: Roboto;
  font-size: 24px;

  font-weight: 700;
  line-height: 1.16;
  @media screen and (min-width: 375px) {
    color: #efede8;
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.37;
  }
`;

export const FormParagraph = styled.p`
  text-align: left;
  color: rgba(239, 237, 232, 0.3);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28; /* 128.571% */

  color: var(--normal-color);
  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 50px;
    line-height: 1.3;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    max-width: 496px;
  }

  @media screen and (min-width: 1440px) {
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
  display: flex; /* Делаем контейнер flex-контейнером */
  align-items: center;
  position: relative;
  padding: 12px 40px;
  /* background: var(--orange-color);2px solid transparent Back*/
  color: #fff;
  border: none; /* Прозрачный border */
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
    border-color: var(--hover-color); /* Изменение цвета border при hover */
    color: var(--hover-color); /* Изменение цвета текста при hover */
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
  display:flex;
  justify-content: space-around;
  /* box-sizing:border-box; */
  background: transparent;
  width: 268px;
  height: 6px;
  margin-top:190px;
  
  
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
export const Calories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  margin-left: auto;
  margin-right: 20px;

  width: 119px;
  height: 76px;

  border-radius: 12px;
  background: var(--orange-light-color);

  @media screen and (min-width: 768px) {
    width: 180px;
    height: 110px;
    gap: 12px;

    margin-right: 32px;
  }
`;
// Добавьте другие стили, если есть

// export const FormContainer = styled.div`
//   width: 500px;
//   margin-top: 20px;
//   border: 2px solid #07dfee;

// `;

// export const SectionTitle = styled.p`
//   color: var(--normal-color);
//   margin-bottom: 4px;
//   font-size: 12px;

// `;

// export const Input = styled.input`
//   border: 2px solid rgba(134, 245, 8, 0.3);
//   max-width: 155px;
//   padding: 14px;
//   margin-bottom: 14px;
//   align-items: center;
//   gap: 10px;
//   border-radius: 12px;
//   border: 1px solid rgba(239, 237, 232, 0.3);
//   background-color: transparent;
//   color: #efede8;
//   font-size: 14;
// `;

// export const WrapperInputField = styled.div`
//  width: 100%;
//   /* display: flex; */
//   /* display: inline-flex; */
//   /* align-items: flex-end; */
//   margin-top: 20px;
//   gap: 14px;
//   border: 1px solid rgba(137, 102, 233, 0.3);
// `;

// export const InputField = styled.input`
//   max-width: 135px;
//   padding: 14px;
//   align-items: center;
//   gap: 10px;
//   border-radius: 12px;
//   border: 1px solid rgba(239, 237, 232, 0.3);
//   background-color: transparent;
//   color: #efede8;
// `;

// export const Radio = styled.input`
//   /*  */
// `;

// export const Label = styled.label`
//   color: #efede8;
//   font-family: Roboto;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 400;
// `;

// export const Button = styled.button`
//   margin: 40px 0px 80px 20px;
//   padding: 12px 40px;
//   border-radius: 12px;
//   background: var(--orange-color);
//   color: rgba(239, 237, 232, 0.6);
// `;
