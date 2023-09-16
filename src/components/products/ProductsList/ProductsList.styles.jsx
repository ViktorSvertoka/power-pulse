import styled from 'styled-components';

export const ProductsListUl = styled.ul`
  

  @media screen and (min-width: 375px) {
    display: flex;
    gap: 20px;
    flex-direction: column;
    max-width: 100%;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 768px) {
    overflow-y: scroll;
    gap: 16px;
    flex-wrap: wrap;
    flex-direction: row;
    max-height: 660px;
    padding-right: 16px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 860px;
    max-height: 487px;
  }
`;