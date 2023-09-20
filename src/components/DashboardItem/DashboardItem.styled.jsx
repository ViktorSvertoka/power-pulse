import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 187px;
  height: 116px;
  padding: 16px;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: ${({ color }) => color};

  @media screen and (min-width: 375px) and (max-width: 767px) {
    padding: 8px;
    width: 157px;
    height: 96px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h3`
  color: rgba(239, 237, 232, 0.8);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'RobotoBold', sans-serif;
  font-size: 12px;
  line-height: 1.5;
`;

const Value = styled.p`
  color: #efede8;
  font-family: 'RobotoBold';
  font-size: 24px;
  line-height: 1.3;
  margin-top: auto;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 18px;
  }
`;

export { Container, Title, Value, Wrapper };
