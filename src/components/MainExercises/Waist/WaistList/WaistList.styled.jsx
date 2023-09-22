import styled from 'styled-components';

export const WaistItemUl = styled.ul`
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  

  &::-webkit-scrollbar-thumb {
  background-color: #ef8964;
  border-radius: 12px;
}

&::-webkit-scrollbar {
  width: 8px;
}

&::-webkit-scrollbar-track {
  background: rgba(239, 237, 232, 0.1);
  border-radius: 12px;
}

  @media screen and (min-width: 768px) {
    overflow-y: auto;
    max-height: calc(100vh - 364px);
    gap: 32px 16px;
    max-width: 100%;
    max-height: 726px;
    padding-right: 10px;
  }

  @media screen and (min-width: 1440px) {
    overflow-y: auto;
    max-height: calc(100vh - 312px);
    padding-right: 16px;
    width: 850px;
    max-width: 100%;
  }
`;

