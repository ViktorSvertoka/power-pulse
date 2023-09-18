import styled from 'styled-components';
// import { Field } from 'formik';
import backgroundMob from 'src/images/hero-1x.jpg';

export const Container = styled.div`
  display: flex;
  max-width: 100vw;
  /* max-width: 1440px; */
  height: 100vh;
  background-image: url(${backgroundMob});
  /* background-size: 50% 100%; */
  /* background-position: 50% right; */
  background-position: right;
  background-repeat: no-repeat;
  background-size: 50% 100%;
  /* @media screen and (min-width: 375px) {
    /* max-width: 100vw;
    
    max-width: 100vw; */
    /* background-size: 50% 100%; */
    
   
  /*
  @media screen and (min-width: 768px) {
    max-width: 100vw;
    padding: 60px 75px;
    border-radius: 40px;
    gap: 22px;
  }

  @media screen and (min-width: 1440px) {
    gap: 8px;
  } */
`;


