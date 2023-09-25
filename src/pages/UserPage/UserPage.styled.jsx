import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

export const Title = styled.h2`
  color: #efede8;
  font-family: 'RobotoBold';
  font-size: 24px;
  line-height: 28px;
  margin-top: 40px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    font-size: 32px;
    line-height: 44px;
    margin-top: 72px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;
`;
