import styled from 'styled-components';

// const Container = styled.div`
//   background-color: #000000;
//   width: 1440px;
//   margin: 0 auto;

// `;

const Wrap = styled.div`
  @media screen and (min-width: 375px) and (max-width: 767.99px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) and (max-width: 1440px) {
    display: flex;
    padding-left: 32px;
    padding-top: 78 px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

const ExercisesTitle = styled.h2`
  @media screen and (min-width: 375px) and (max-width: 767.99px) {
    background-color: #000000;
    width: 375px;
    padding-top: 40px;
    padding-left: 20px;
    font: Roboto-Bold;
    font-size: 24px;
    line-height: 1,16;
    color: #efede8;
  }
   @media screen and (min-width: 768px) and (max-width: 1440px) {
    padding-top: 72px;
    font: Roboto
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 1,37;
    color: #efede8;
  }

  @media screen and (min-width: 1440px)  {
    color: #EFEDE8;
    font: Roboto-Bold;
    font-size: 32px;
   
    font-weight: 700;
    line-height: 1,37;
    padding-top:72px;
    padding-left:96px;
 
  }
  
`;

const ExercisesNavList = styled.ul`
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 768px) and (max-width: 1440px) {
    padding-top: 78px;
    margin-left: auto;
    margin-right: 32px;
    color: #efede8;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    color: #efede8;
    gap: 32px;
    margin-left: auto;
    padding-right: 96px;
    padding-top: 78px;
  }
`;

const ExercisesItem = styled.li`
  @media screen and (min-width: 375px) and (max-width: 767.99px) {
    position: relative;
    display: flex;

    padding-top: 20px;
    padding-left: 20px;
    color: #EFEDE8;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;  
    line-height: 1,28;
    color: #EFEDE8;
    &::after {
      content: '';
      position: absolute;
      bottom: -3px;
      width: 100%;
      height: 4px;
      background-color: var(--orange-color);
    }

  
  @media screen and (min-width: 768px) and (max-width: 1440px) {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1,5;
  }
  @media screen and (min-width: 768px) and (max-width: 1440px) {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1,5;
  }
`;

const ImageList = styled.ul`
  @media screen and (min-width: 375px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 375px;

    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 40px;
    padding-bottom: 134px;
  }

  @media screen and (min-width: 768px) and (max-width: 1440px) {
    display: flex;

    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 768px;
    margin-left: auto;
    margin-right: auto;

    padding-left: 32px;
    padding-right: 32px;
    padding-top: 64px;
    padding-bottom: 134px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;

    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 1440px;
    margin-left: auto;
    margin-right: auto;

    padding-left: 32px;
    padding-right: 32px;
    padding-top: 64px;
    padding-bottom: 134px;
  }
`;
const ImageItem = styled.li`
  display: block;
  @media screen and (min-width: 768px) and (max-width: 1440px) {
    flex-basis: calc((100% - 2 * 16px) / 3);
  }
`;

const Image = styled.img`
  display:block
  max-width: 100%;
  height: auto;
  border: 1px #efede8;
  border-radius: 12px;
`;

export {
  ExercisesTitle,
  ExercisesItem,
  Wrap,
  ExercisesNavList,
  ImageList,
  Image,
  ImageItem,
};
