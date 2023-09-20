import styled from 'styled-components';
import backgroundMob from 'src/images/side-view.jpg';
import background from 'src/images/hero-2x.jpg';
import backgroundTabl from 'src/images/side-tabl.jpg';
export const Container = styled.div`
  display: flex;
  max-width: 100vw;

  height: 100vh;
  /* background-image: url(${backgroundMob}); */
  background: linear-gradient(168deg, #040404 14.75%, rgba(4, 4, 4, 0) 52.97%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    url(${backgroundMob});

  background-position: right;
  background-repeat: no-repeat;
  background-size: 90% 100%;
  background-position-y: calc(100% + 250px);

  @media screen and (min-width: 375px) {
    width: 100vw;
    background-image: url(${backgroundMob});
    background-size: 70% 100%;

    background-position-y: calc(100% + 170px);
  }

  @media screen and (min-width: 768px) {
    width: 100vw;
    background-image: url(${backgroundTabl});
    background-size: 50% 100%;

    background-position-y: calc(100% + 60px);
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    background-size: 50% 100%;
    background-image: url(${background});
    background-position-y: calc(100% + 120px);
  }
`;
