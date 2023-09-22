import styled from 'styled-components';

export const ExersiceModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const ExersiceModalWindowWrap = styled.div`
   width: 335px;
  padding: 48px 16px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 800px;
    padding: 48px 32px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "image list"
      "timer button";
  }
`;

export const ExersiceModalImgWrapper = styled.div`
width: 270px;
  height: 226px;

  @media screen and (min-width: 768px) {
    grid-area: list;
   
  }
`;
export const ExersiceModalTimer = styled.div`

display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* grid-area: timer; */

`;

export const ExersiceModalImg = styled.img`
  width: 270px;
  height: 226px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  object-fit: cover;

  @media screen and (min-width: 768px) {
    margin-right: 16px;
  }
`;

export const BoxBtn = styled.div`
   
  @media screen and (min-width: 768px) {
    grid-area: button;
    display: flex;
    justify-content: flex-end;
  }
`;





export const ExersiceModalWindowBtn = styled.button`
   color: var(--white);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  padding: 12px 32px;
  border-radius: 12px;
  background: var(--orange-color);
  align-self: flex-start;
  &:hover {
  background: var(--orange-light-color);
  color: var(--white-color);
}
  @media screen and (min-width: 768px) {
    align-self: flex-end;
  }
`;