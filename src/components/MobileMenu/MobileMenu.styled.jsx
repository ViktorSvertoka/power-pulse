import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(255 255 255 / 0.5);
  backdrop-filter: blur(1px);
  display: flex;
  justify-content: start;
  align-items: center;
  z-index: 1;
`;

export const MenuWrapper = styled.div`
  background-color: var(--orange-color);
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 200px;
  padding: 19px 20px 21px 20px;
  z-index: 10;
  top: 0;

  @media screen and (min-width: 768px) {
    width: 350px;
    padding: 26px 32px 32px 32px;
  }

  @media screen and (max-width: 1439px) {
    position: absolute;

    &.shown {
      transform: translateX(0%);
      opacity: 1;
    }

    &.hidden {
      transform: translateX(100%);
      opacity: 0;
    }

    transition:
      transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Svg = styled.svg`
  width: 30px;
  height: 30px;
  fill: #ffffff;
  stroke: #ffffff;
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
`;
