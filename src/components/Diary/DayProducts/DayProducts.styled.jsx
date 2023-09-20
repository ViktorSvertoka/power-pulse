import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 194px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  padding: 16px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 704px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 342px;
  }
`;

const WrapperTitleBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

const Title = styled.h3`
  color: rgba(239, 237, 232, 0.5);
  font-family: 'RobotoRegular';
  font-size: 14px;
  line-height: 1.3;
`;

const Svg = styled.svg`
  width: 16px;
  height: 16px;
  fill: #e6533c;
  stroke: #e6533c;
`;

const AddBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  padding: 0;
  background-color: transparent;
  color: #e6533c;
  font-family: 'RobotoMedium';
  font-size: 16px;
  line-height: 24px;
`;

const DefaultText = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  color: rgba(239, 237, 232, 0.3);
  font-family: 'RobotoRegular';
  font-size: 16px;
  line-height: 24px;
`;

export { Wrapper, Title, AddBtn, DefaultText, WrapperTitleBtn, Svg };
