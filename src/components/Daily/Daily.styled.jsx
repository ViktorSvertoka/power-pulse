import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 165px;
  height: 96px;
  padding: 14px;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: ${({ color }) => color};

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 209px;
    height: 108px;
    padding: 14px 18px;
    align-items: flex-start;
    gap: 32px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Svg = styled.svg`
  width: 16px;
  height: 16px;
  fill: #e6533c;
  stroke: #e6533c;
`;

export const Text = styled.p`
  color: rgba(239, 237, 232, 0.8);
  font-family: 'RobotoRegular';
  font-size: 12px;
  line-height: 16px;
`;

export const Value = styled.p`
  color: #efede8;
  font-family: 'RobotoBold';
  font-size: 24px;
  line-height: 1.3;
  margin-top: auto;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 18px;
  }
`;
