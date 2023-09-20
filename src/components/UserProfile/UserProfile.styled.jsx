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

export const Button = styled.button`
  position: relative;
  top: -13px;
  width: 22px;
  height: 22px;
  border: none;
  background-color: transparent;
`;

export const IconBtn = styled.svg`
  width: 24px;
  height: 24px;
  position: relative;
  top: -1.5px;
  left: -7px;
`;
