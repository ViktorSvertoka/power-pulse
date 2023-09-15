import styled from 'styled-components';

export const Btn = styled.button`
background: ${(props) => props.background};
color: ${(props) => props.color};
border: ${(props) => props.border};
padding: 16px 60px;
justify-content: center;
align-items: center;
border-radius: 12px;
  
  &:hover {
    background: ${(props) => props.hoverBackground};
    color: ${(props) => props.hoverColor};
  }
`;