import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  max-width: 390px;

  @media screen and (max-width: 1439px) {
    display: block;
    padding: 0 32px;
    max-width: 100%;
  }

  @media screen and (min-width: 374px) and (max-width: 767px) {
    padding: 0 20px;
  }
`;

const WrapWarning = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: center;
  margin-top: 48px;
  gap: 16px;

  @media screen and (max-width: 1439px) {
    margin-top: 64px;
    min-width: 358px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;
    min-width: 100%;
    gap: 8px;
  }
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: transparent;
`;

const TextWarning = styled.span`
  color: rgba(239, 237, 232, 0.3);
  font-family: 'RobotoRegular';
  font-size: 16px;
  line-height: 1.5;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 1.2;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 16px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 250px;
    max-width: 600px;
    flex-direction: column;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    max-width: 350px;
  }
`;

const GridItem = styled.div`
  @media screen and (min-width: 375px) and (max-width: 767px) {
    flex-wrap: nowrap;
    width: 157px;
    height: 96px;
  }
`;

export { Wrapper, FlexContainer, GridItem, WrapWarning, TextWarning, Circle };
