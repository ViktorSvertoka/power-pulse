import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormContainer = styled.div`
  box-sizing: border-box;
  max-width: 335px;

  margin: 60px 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    margin: 108px 0 0 0;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 119px;
  }
`;
export const FormBox = styled(Form)`
  display: flex;
  box-sizing: border-box;
  max-width: 500px;
  @media screen and (max-width: 375px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 25px;
    margin-top: 90px;
    margin-bottom: 20px;

    max-width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 500px;
    margin-left: 32px;

    margin-top: 140px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 100px;
    margin-left: 150px;
  }
`;

export const Title = styled.h2`
  box-sizing: border-box;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.38;
  color: #efede8;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 32px;

    font-weight: 700;

    margin-bottom: 16px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.28;

  font-size: 16px;
  line-height: 1.33;
  letter-spacing: 0.01em;
  text-align: justify;

  text-align: flex-start;
  color: rgba(239, 237, 232, 0.3);

  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    width: 496px;
    height: 48px;
    margin-bottom: 32px;
  }
`;

export const InputContainer = styled.div`
  box-sizing: border-box;
  width: 335px;

  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 365px;
    margin-bottom: 40px;
  }
`;

export const InputWrap = styled.div`
  box-sizing: border-box;
  width: 100%;

  display: flex;
  margin-bottom: 20px;

  // flex-direction: column;

  @media screen and (min-width: 768px) {
    // width: 100%;
  }
`;

export const BtnContainer = styled.div`
  box-sizing: border-box;
  max-width: 100%;
  display: flex;

  align-items: flex-start;
`;

export const Input = styled(Field)`
  width: 100%;

  outline: 1px solid rgba(239, 237, 232, 0.3);

  border: none;
  position: relative;
  box-sizing: border-box;
  height: 46px;
  color: var(--white-color);
  font-family: 'RobotoRegular';
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 4px;
  margin-top: 4px;
  padding-left: 14px;
  padding-top: 14px;
  padding-bottom: 14px;
  background-color: transparent;
  border-radius: 12px;

  &::placeholder {
    color: var(--normal-color);
    font-family: 'RobotoRegular';
    font-size: 14px;
    line-height: 1.28;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.5;
    }
  }

  &:hover,
  &:focus {
    outline: 1px solid #e6533c;

    /* outline: 0; */
  }
  &.default {
    outline: 1px solid rgba(239, 237, 232, 0.3);
  }
  &.success {
    outline: 1px solid #3cbf61;
  }
  &.error {
    outline: 1px solid rgba(248, 5, 5, 0.973);
  }

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 46px;
  }
`;

export const ErrorWrap = styled.div`
  display: flex;

  /* width: 100%; */
  // padding-left: 12px;

  width: 100%;
  padding-left: 12px;

  align-items: center;
  justify-content: left;
  height: 14px;
  color: rgba(248, 5, 5, 0.973);
  font-size: 12px;
  font-weight: 400;
  // padding-top: 5px;
`;

export const Button = styled.button`
  width: 136px;
  height: 42px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  max-width: 196px;
  padding: 12px 40px;
  margin-bottom: 12px;
  white-space: nowrap;

  color: #ffff;
  background-color: #ef8964;
  border-radius: 12px;
  border: none;
  outline: none;
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  cursor: pointer;

  display: flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  font-family: inherit;
  background-color: #e6533c;
  color: white;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  line-height: calc(18 / 16);
  border: 1px solid rgba(239, 237, 232, 0.3);
  transition: background 0.3s ease-out;

  &:hover {
    color: white;
    background: #ef8964;
  }

  @media screen and (min-width: 768px) {
    width: 190px;
    height: 56px;

    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0;

    padding: 16px 60px;
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  text-decoration: underline;
  display: inline-block;
  color: #ffff;
`;

export const IconBtn = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 7px;

  padding: 10px 0;
  background-color: inherit;
  border: none;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  cursor: pointer;

  @media screen and (max-width: 375px) {
    width: 50px;
    height: 50px;
    right: 2px;
  }
  @media screen and (min-width: 375px) {
    width: 53px;
    height: 53px;
    right: 30px;

    width: 30px;
    height: 30px;
    right: 1px;
  }
`;
export const Svg = styled.svg`
  width: 25px;
  height: 25px;
  margin-top: 6px;
  margin-right: 5px;
  stroke: #efede8;
`;

export const SvgLayc = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  stroke: #3cbf61;
`;

export const SvgEror = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 10px;

  vertical-align: middle;
`;
export const CrossIcon = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 18px;
  padding: 12px 0;
  background-color: #fff;
  border: none;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  cursor: pointer;
`;
export const ConfirmIcon = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 18px;
  padding: 12px 5px;
  background-color: #fff;
  border: none;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const ConfirmMessage = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: left;
  height: 14px;
  font-size: 12px;
  color: #3cbf61;
  padding-left: 12px;
  font-size: 12px;
  font-weight: 400;
  padding-top: 5px;
`;

export const PasswordComnfirIcon = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 60px;
  padding: 12px 0;
  background-color: #ffff;
  border: none;
`;
export const PasswordCrossIcon = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 60px;
  padding: 12px 0;
  background-color: #fff;
  border: none;
`;

export const TextIn = styled.p`
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 768px) {
    margin-left: 12px;
  }
`;
