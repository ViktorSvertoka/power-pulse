import styled from 'styled-components';

export const Btn = styled.button`
  background: ${props => props.background};
  color: ${props => props.color};
  border: ${props => props.border};

  justify-content: center;
  align-items: center;
  padding: 16px 60px;
  border-radius: 12px;

  &:hover {
    background: ${props => props.hoverBackground};
    color: ${props => props.hoverColor};
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0;

    width: 182px;
    height: 56px;

    white-space: nowrap;
  }
`;
