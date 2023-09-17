import styled from 'styled-components';
// import { Field } from 'formik';
import backgroundMob from 'src/images/hero-1x.jpg';

export const Container = styled.div`
  display: flex;
  /* max-width: 100vw; */
  max-width: 1440px;
  height: 100vh;
  background-image: url(${backgroundMob});
  /* background-size: 40% 100%; */
  background-color: #040404;
  background-position: right;
  background-repeat: no-repeat;
`;
// export const Container = styled.div`
//
// `;
// #040404 RegPage
export const WrapContainer = styled.div`
  display: flex;
  /* box-sizing: border-box; */
  width: 496px;
  /* height: 336px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-left: auto; */
  /* margin-right: auto; */
  padding: 40px 12px;
  /* gap: 26px; */
  background-color: #040404;
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19); */
  margin-left: 100px;
  margin-top: 200px;

  /* @media screen and (min-width: 375px) {
    max-width: 480px;
    border-radius: 40px;
  }

  @media screen and (min-width: 768px) {
    max-width: 608px;
    padding: 60px 75px;
    border-radius: 40px;
    gap: 22px;
  }

  @media screen and (min-width: 1440px) {
    gap: 8px;
  } */
`;
// export const InputContainer = styled.div`
//   box-sizing: border-box;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `; 