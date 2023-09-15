import styled from 'styled-components';

export const MenuWrapper = styled.div`
  background-color: var(--orange-color);
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 200px;
  padding: 19px 20px 21px 20px;

  @media screen and (min-width: 768px) {
    width: 350px;
    padding: 26px 32px 32px 32px;
  }

  @media screen and (max-width: 1439px) {
    position: absolute;
    z-index: 999;

    &.shown {
      transform: translateX(0%);
      opacity: 1;
    }

    &.hidden {
      transform: translateX(-100%);
      opacity: 0;
    }

    transition:
      transform 750ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 750ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
