import styled from 'styled-components';

export const WaistItemLi = styled.li`
  width: 100%;
  min-height: 141px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    margin: 0 auto;
  }
  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: calc((100% - 16px) / 2);
  }

  @media screen and (min-width: 1440px) {
    width: 370px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const CardLabel = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  color: #fff;

  padding: 5px 7.5px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  text-transform: uppercase;
`;

export const BtnLabel = styled.button`
  background: transparent;
  border: none;
  color: var(--orange-color);
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &::after {
    content: url(../../../../src/components/MainExercises/Waist/img/Icon.svg);
    display: block;
    width: 16px;
    height: 16px;
  }

  &:hover {
    color: var(--white-color);
  }
  &:focus {
    color: var(--white-color);
  }
`;

export const Title = styled.h3`
  position: relative;
  font-size: 24px;
  line-height: 1.333;
  color: var(--white-color);

  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 30px;
  max-width: 100%;

  &::before {
    content: url(../../../../src/components/products/img/run.svg);
    position: absolute;
    width: 24px;
    height: 24px;
    left: 0;
    top: calc(50% - 12px);
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 1.5;
`;

export const ListItemValue = styled.span`
  color: var(--white-color);
`;
