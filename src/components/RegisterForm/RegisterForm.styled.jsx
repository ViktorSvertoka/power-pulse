import { Field } from 'formik';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { devices } from '../../constants/breakpoints';
// import { colors } from 'constants/colors';

export const FormContainer = styled.div`
  box-sizing: border-box;
  max-width: 500px;
  /* height: 400px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-left: auto;
  margin-right: auto; */
  /* padding: 40px 12px; */
 
  /* gap: 26px; */
  background-color: #040404;

  /* @media screen and (min-width: 375px) {
    max-width: 480px;
    margin-left: auto;
  margin-right: auto;
  } */

  /* @media screen and (min-width: 768px) {
    max-width: 608px;
    padding: 60px 75px;
    border-radius: 40px;
    gap: 22px;
  }

  @media screen and (min-width: 1440px) {
    gap: 8px;
  } */
`;

export const Title = styled.h2`
  box-sizing: border-box;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.38;
  color: #efede8;
  margin-bottom: 32px;

  /* @media screen and (min-width: 375px) {
    margin-bottom: 40px;
    font-size: 36px;
    letter: 4%;
    font-weight: 500;
  }*/
`;
export const InputContainer = styled.div`
  box-sizing: border-box;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
// export const InputWrap = styled.div`
//   box-sizing: border-box;
//   width: 100%;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

export const BtnContainer = styled.div`
  box-sizing: border-box;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Input = styled(Field)`
  box-sizing: border-box;
  width: 364px;
  outline: 1px solid rgba(239, 237, 232, 0.3);
  border: 1px solid rgba(239, 237, 232, 0.3);
  /* border: none; */
  border-radius: 12px;
  padding: 14px 14px 14px;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  color: #efede8;
  background-color: #040404;
  margin-bottom: 10px;
  &:hover {
    border: 1px solid #e6533c;
  }
  &:focus {
    border: 1px solid #e6533c;
  }
  &.default {
    outline: 1px solid rgba(239, 237, 232, 0.3);
  }
  &.success {
    outline: 1px solid rgba(26, 218, 9, 0.801);
  }
  &.error {
    outline: 1px solid rgba(248, 5, 5, 0.973);
  }
`;
export const ErrorWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding-left: 12px;
  align-items: center;
  justify-content: left;
  height: 14px;
  color: rgba(248, 5, 5, 0.973);
  font-size: 12px;
  font-weight: 400;

  
`;
export const Button = styled.button`
  max-width: 190px;
  padding: 16px 60px;
  margin-top:64px;
  margin-bottom: 12px;

  color: var('--white-color');
  background-color: #ef8964;
  border-radius: 16px;
  border: none;
  outline: none;
  font-family: inherit;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  cursor: pointer;

  &:hover {
    background: #e6533c;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  text-align: flex-start;
  color: rgba(239, 237, 232, 0.3);
`;

// export const StyledLink = styled(Link)`
//   font-size: 12px;
//   line-height: 1.33;
//   letter-spacing: 0.04em;
//   text-decoration: underline;
//   display: inline-block;
//   color: #ffff;
// `;
// export const IconBtn = styled.button`
//   width: 40px;
//   height: 48px;
//   position: absolute;
//   right: 12px;
//   padding: 12px 0;
//   background-color: #fff;
//   border: none;
//   border-top-right-radius: 40px;
//   border-bottom-right-radius: 40px;
//   cursor: pointer;
// `;

// export const CrossIcon = styled.button`
//   width: 24px;
//   height: 24px;
//   position: absolute;
//   right: 18px;
//   padding: 12px 0;
//   background-color: #fff;
//   border: none;
//   border-top-right-radius: 40px;
//   border-bottom-right-radius: 40px;
//   cursor: pointer;
// `;
// export const ConfirmIcon = styled.button`
//   width: 24px;
//   height: 24px;
//   position: absolute;
//   right: 18px;
//   padding: 12px 0;
//   background-color: #fff;
//   border: none;
//   border-top-right-radius: 40px;
//   border-bottom-right-radius: 40px;
// `;

// export const ConfirmMessage = styled.div`
//   display: flex;
//   width: 100%;
//   align-items: center;
//   justify-content: left;
//   height: 14px;
//   font-size: 12px;
//   color: rgba(26, 218, 9, 0.801);
//   padding-left: 12px;
//   font-size: 12px;
//   font-weight: 400;
//   /* @media screen and (${devices.tablet}) {
//     height: 32px;
//   } */
// `;

// export const PasswordComnfirIcon = styled.button`
//   width: 24px;
//   height: 24px;
//   position: absolute;
//   right: 60px;
//   padding: 12px 0;
//   background-color: #ffff;
//   border: none;
// `;
// export const PasswordCrossIcon = styled.button`
//   width: 24px;
//   height: 24px;
//   position: absolute;
//   right: 60px;
//   padding: 12px 0;
//   background-color: #ffff;
//   border: none;
// `;
