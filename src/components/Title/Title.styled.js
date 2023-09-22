import styled from 'styled-components';

export const StyledTitle = styled.h2`
  color: white;

  font-family: RobotoRegular;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: 0.38px;
  margin-bottom: ${props => props.margin?.bt?.mob || '0'}px;
  margin-top: ${props => props.margin?.top?.mob || '0'}px;

  @media screen and (min-width: 768px) {
    margin-bottom: ${props => props.margin?.bt?.tab || '0'}px;
    margin-top: ${props => props.margin?.top?.tab || '0'}px;
    font-size: 32px;

    line-height: 1.11;
    letter-spacing: 0.7px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: ${props => props.margin?.top?.desk || '0'}px;
  }
`;
