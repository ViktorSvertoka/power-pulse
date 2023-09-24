import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
`;

export const Avatar = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 100px;
  border: 1px solid #e6533c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Photo = styled.img`
  border-radius: 100px;
`;

export const Button = styled.div`
  cursor: pointer;
`;

export const IconBtn = styled.svg`
  width: 24px;
  height: 24px;
  position: relative;
  top: -13px;
  left: 0px;
`;
