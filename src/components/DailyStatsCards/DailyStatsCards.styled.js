import styled from '@emotion/styled';

export const CardWrap = styled.div`
  box-sizing: border-box;
  border: 1px solid;

  border: ${props => {
    if (props.border === 'green') return '1px solid #3CBF61';
    if (props.border === 'red') return '1px solid #E9101D';
    return '1px solid rgba(239, 237, 232, 0.30)';
  }};

  background-color: ${props =>
    props.fill === 'true' ? '#E6533C' : 'rgba(239, 237, 232, 0.05)'};
  height: 96px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 96px;
  padding: 10px;
  @media screen and (min-width: 375px) {
    padding: 14px;
  }
  @media screen and (min-width: 768px) {
    padding: 18px;
    height: 116px;
  }
  @media screen and (min-width: 1440px) {
    padding: 14px 18px;
  }
`;

export const KeyWrap = styled.div`
  display: flex;
  gap: 3px;
  @media screen and (min-width: 375px) {
    gap: 8px;
  }
`;

export const Svg = styled.svg`
  width: 20px;
  height: 20px;

  fill: #ef8964;
`;

export const Label = styled.span`
  color: ${props => {
    return props.fill === 'true'
      ? 'rgba(239, 237, 232, 0.80)'
      : 'rgba(239, 237, 232, 0.50)';
  }};

  font-family: 'RobotoRegular';
  font-size: 12px;
  line-height: ${16 / 12};
  @media screen and (min-width: 767px) {
    line-height: ${18 / 12};
  }
`;

export const KeyValue = styled.p`
  color: #efede8;
  margin: 0;

  font-family: 'RobotoBold';
  font-size: 18px;
  font-weight: 700;
  line-height: ${18 / 20};

  @media screen and (min-width: 767px) {
    font-size: 24px;
    line-height: ${32 / 24};
  }
`;
