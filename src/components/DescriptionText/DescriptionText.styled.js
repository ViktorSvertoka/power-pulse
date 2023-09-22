import styled from 'styled-components';

export const ExclamationText = styled.p`
  width: auto;
  display: flex;

  font-size: 14px;
  line-height: 1.29;

  color: white;

  @media screen and (min-width: 768px) {
    width: ${props => props.width.tablet}px;

    font-size: 16px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ExclamationIcon = styled.svg`
  max-width: 24px;
  max-height: 24px;
  margin-right: 8px;
`;
